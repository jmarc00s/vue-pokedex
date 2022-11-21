<script setup lang="ts">
import { ref, watch } from 'vue';
import { useQuery } from 'vue-query';
import { useRoute } from 'vue-router';

import PokemonCard from '@/components/PokemonCard.vue';
import PokemonCarousel from '@/components/PokemonCarousel.vue';
import PokemonTable from '@/components/PokemonTable.vue';
import { getPokemon } from '@/core/services/pokemon';
import type { Pokemon } from '@/interfaces/pokemon';

const route = useRoute();

const pokemon = ref<Pokemon>({} as Pokemon);

const { isLoading, data, refetch } = useQuery(
  [`pokemonById`, route.params.id],
  () => getPokemon(route.params.id as string),
  {
    onSuccess(data: Pokemon) {
      pokemon.value = data;
    },
  }
);

watch(
  () => route.params.id,
  async () => {
    refetch.value();
  }
);
</script>

<template>
  <section>
    <div v-if="isLoading">Carregando...</div>

    <div v-if="data">
      <v-row>
        <v-col>
          <PokemonCard
            :pokemon="pokemon"
            :show-detail-link="false"
            image-size="300"
          />
        </v-col>
        <v-col>
          <PokemonTable :pokemon="pokemon" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <PokemonCarousel :pokemon-id="pokemon.id" />
        </v-col>
      </v-row>
    </div>
  </section>
</template>
