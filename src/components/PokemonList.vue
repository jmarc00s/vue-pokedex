<script setup lang="ts">
import { getPokemonsPaged } from '@/core/services/pokemon';
import { useQuery } from 'vue-query';
import type { Pokemon } from '../interfaces/pokemon';
import PokemonCard from './PokemonCard.vue';

const { isLoading, data, error } = useQuery<Pokemon[]>('pokemons', () =>
  getPokemonsPaged(0, 12)
);
</script>

<template>
  <div v-if="isLoading">Carregando...</div>
  <div v-if="error">{{ error }}</div>
  <div v-else-if="data?.length">
    <section class="grid">
      <PokemonCard
        v-for="pokemon in data"
        :key="pokemon.id"
        :pokemon="pokemon"
        show-detail-link
      ></PokemonCard>
    </section>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 1rem;
}
</style>
