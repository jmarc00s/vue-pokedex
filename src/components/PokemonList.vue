<script setup lang="ts">
import type { Pokemon } from '../interfaces/pokemon';
import PokemonCard from './PokemonCard.vue';

defineProps<{ pokemons: Pokemon[] }>();
</script>

<template>
  <section class="grid">
    <PokemonCard
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      :pokemon="pokemon"
    ></PokemonCard>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, auto);
}
</style>
