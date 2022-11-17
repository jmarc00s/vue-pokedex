<script setup lang="ts">
import type { Pokemon } from '@/interfaces/pokemon';

defineProps<{ pokemon: Pokemon }>();
</script>

<template>
  <v-card>
    <v-img
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`"
      height="300"
    ></v-img>
    <v-card-title>{{ pokemon.name }}</v-card-title>
    <v-card-subtitle>{{ pokemon.type }}</v-card-subtitle>
    <v-card-actions>
      <v-btn>Ver detalhes</v-btn>
    </v-card-actions>
  </v-card>
</template>
