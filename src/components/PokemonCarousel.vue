<script setup lang="ts">
import type { Pokemon } from '@/interfaces/pokemon';
import { useQuery } from 'vue-query';
import { getRelatedPokemons } from '@/core/services/pokemon';
import PokemonCard from './PokemonCard.vue';
import { ref } from 'vue';

type PokemonCarouselProps = {
  pokemon: Pokemon;
};
const props = defineProps<PokemonCarouselProps>();

const { data: pokemons } = useQuery(['pokemonCarousel', props.pokemon.id], () =>
  getRelatedPokemons(props.pokemon)
);
</script>

<template>
  <v-card>
    <v-card-title>Pokémons relacionados</v-card-title>
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
  padding: 2rem 5rem;
}
</style>
