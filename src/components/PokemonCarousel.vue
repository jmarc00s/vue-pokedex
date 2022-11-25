<script setup lang="ts">
import { useQuery } from 'vue-query';
import { getRelatedPokemons } from '@/core/services/pokemon';
import PokemonCard from './PokemonCard.vue';
import { watch } from 'vue';

type PokemonCarouselProps = {
  pokemonId: string;
};

const props = defineProps<PokemonCarouselProps>();

const { data: pokemons, refetch } = useQuery(
  ['pokemonCarousel', props.pokemonId],
  () => getRelatedPokemons(props.pokemonId)
);

watch(
  () => props.pokemonId,
  async () => refetch.value()
);
</script>

<template>
  <v-card>
    <v-card-title>{{ $t('related') }}</v-card-title>
    <div class="grid">
      <PokemonCard
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        :pokemon="pokemon"
        show-detail-link
      />
    </div>
  </v-card>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 1rem;
  padding: 2rem;
}
</style>
