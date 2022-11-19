<script setup lang="ts">
import PokemonCard from '@/components/PokemonCard.vue';
import PokemonCarousel from '@/components/PokemonCarousel.vue';
import PokemonTable from '@/components/PokemonTable.vue';

import { getPokemon } from '@/core/services/pokemon';
import { useQuery } from 'vue-query';
import { useRoute } from 'vue-router';

const { params } = useRoute();

const { isLoading, data } = useQuery([`pokemonById`, params.id], () =>
  getPokemon(params.id as string)
);
</script>

<template>
  <section>
    <div v-if="isLoading">Carregando...</div>

    <div v-if="data">
      <v-row>
        <v-col>
          <PokemonCard
            :pokemon="data"
            :show-detail-link="false"
            image-size="300"
          />
        </v-col>
        <v-col>
          <PokemonTable :pokemon="data" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <PokemonCarousel :pokemon="data" />
        </v-col>
      </v-row>
    </div>
  </section>
</template>
