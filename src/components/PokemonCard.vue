<script setup lang="ts">
import type { Pokemon } from '@/interfaces/pokemon';
import { useRouter } from 'vue-router';

defineProps<{
  pokemon: Pokemon;
  showDetailLink: boolean;
}>();

const router = useRouter();

function handleDetailClick(id: string) {
  router.push({ name: 'details', params: { id } });
}
</script>

<template>
  <v-card>
    <v-img
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`"
      height="300"
    ></v-img>
    <v-card-title>{{ pokemon.name }}</v-card-title>
    <v-card-subtitle>{{ pokemon.type }}</v-card-subtitle>
    <v-card-actions class="actions">
      <v-btn
        v-if="showDetailLink"
        color="info"
        variant="tonal"
        @click="handleDetailClick(pokemon.id)"
      >
        Ver detalhes
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.actions {
  display: flex;
  justify-content: end;
}
</style>
