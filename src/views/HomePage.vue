<script setup lang="ts">
import type { Pokemon } from '@/interfaces/pokemon';
import { onMounted, ref } from 'vue';
import { getPokemonsPaged } from '@/core/services/pokemon';

const pokemons = ref<Pokemon[]>([]);

const fetchPokemons = async () => {
  const data = await getPokemonsPaged(0, 10);
  pokemons.value = data;
};

onMounted(async () => {
  await fetchPokemons();
});
</script>
<template>
  <h1 class="text-center text-h6">Welcome to Vue Pokedex</h1>
  <p v-for="pokemon in pokemons" :key="pokemon.id">{{ pokemon.name }}</p>
</template>
