<script setup lang="ts">
import { ref } from 'vue';
import { useQuery } from 'vue-query';

import type { Pokemon } from '@/interfaces/pokemon';
import { getPokemonsPaged } from '@/core/services/pokemon';
import PokemonList from '@/components/PokemonList.vue';

const { isLoading, data, error } = useQuery<Pokemon[]>('pokemons', () =>
  getPokemonsPaged(0, 12)
);
</script>
<template>
  <h1 class="text-center text-h6">Welcome to Vue Pokedex</h1>
  <div v-if="isLoading">Carregando...</div>
  <div v-if="error">{{ error }}</div>
  <div v-else-if="data?.length">
    <PokemonList :pokemons="data"></PokemonList>
  </div>
</template>
