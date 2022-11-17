<script setup lang="ts">
import type { Pokemon } from '@/interfaces/pokemon';

defineProps<{ pokemon: Pokemon }>();
</script>

<template>
  <div>
    {{ pokemon.name }}
  </div>
</template>
