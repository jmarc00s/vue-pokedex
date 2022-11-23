<script setup lang="ts">
import { RouterView } from 'vue-router';
import TranslationSelect from '@/components/TranslationSelect.vue';
</script>

<template>
  <v-layout>
    <v-app-bar color="info">
      <v-app-bar-title>
        <RouterLink class="brand" to="/">Vue pokedex</RouterLink>
      </v-app-bar-title>
      <template v-slot:append>
        <TranslationSelect />
      </template>
    </v-app-bar>
    <v-main :scrollable="false">
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
  </v-layout>
</template>

<style scoped>
.brand {
  text-decoration: none;
  color: inherit;
}
</style>
