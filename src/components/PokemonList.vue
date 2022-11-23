<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useQuery } from 'vue-query';

import {
  getPokemonsPaged,
  getPokemonsPagedWithFilter,
} from '@/core/services/pokemon';
import type { Pokemon } from '@/interfaces/pokemon';
import PokemonCard from '@/components/PokemonCard.vue';
import { useStore } from '@/store';

const page = ref(0);
const size = ref(18);
const pokemons = ref<Pokemon[]>([]);
const store = useStore();

const { isLoading, error, refetch } = useQuery<Pokemon[]>(
  ['pokemons', page.value],
  () => getPokemonsPaged(page.value, size.value),
  {
    onSuccess: (data: Pokemon[]): void => {
      pokemons.value.push(...data);
    },
  }
);

const { refetch: fetchWithFilter, isFetching } = useQuery<Pokemon[]>(
  ['pokemons-filtered', store.filter],
  () => getPokemonsPagedWithFilter(store.filter),
  {
    enabled: false,
    onSuccess: (data: Pokemon[]): void => {
      pokemons.value = [...data];
    },
  }
);

const handleScroll = async () => {
  const shouldFetchMoreItems =
    window.scrollY > (document.body.offsetHeight - window.innerHeight) * 0.75;

  if (shouldFetchMoreItems) {
    page.value = page.value + 1;
    await refetch.value();
  }
};

watch(
  () => store.filter,
  () => {
    fetchWithFilter.value();
  }
);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('wheel', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('wheel', handleScroll);
});
</script>

<template>
  <div v-if="isLoading || isFetching">Carregando...</div>
  <div v-if="error">{{ error }}</div>
  <div v-else-if="pokemons?.length">
    <section class="grid">
      <PokemonCard
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        :pokemon="pokemon"
        show-detail-link
      ></PokemonCard>
    </section>
  </div>
</template>

<style scoped>
.container {
  height: 80vh;
  overflow: auto;
}
.grid {
  display: grid;
  grid-template-columns: repeat(6, auto);
  gap: 1rem;
}

@media screen and (max-width: 1280px) {
  .grid {
    grid-template-columns: repeat(4, auto);
  }
}

@media screen and (max-width: 960px) {
  .grid {
    grid-template-columns: repeat(3, auto);
  }
}

@media screen and (max-width: 600px) {
  .grid {
    grid-template-columns: repeat(2, auto);
  }
}
</style>
