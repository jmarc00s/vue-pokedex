<script setup lang="ts">
import PokemonCard from '@/components/PokemonCard.vue';
import { getPokemon } from '@/core/services/pokemon';
import { useQuery } from 'vue-query';
import { useRoute } from 'vue-router';

const {
  params: { id },
} = useRoute();

const { isLoading, error, data } = useQuery('pokemonById', () =>
  getPokemon(id as string)
);
</script>

<template>
  <section>
    <div v-if="data">
      <v-row>
        <v-col>
          <PokemonCard :pokemon="data" :show-detail-link="false"></PokemonCard>
        </v-col>
        <v-col>
          <pre>{{ JSON.stringify(data, null, 2) }}</pre>
        </v-col>
      </v-row>
    </div>
  </section>
</template>
