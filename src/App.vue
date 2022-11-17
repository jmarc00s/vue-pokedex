<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <v-layout>
    <v-app-bar color="info">
      <v-app-bar-title>Vue pokedex</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
  </v-layout>
</template>

<style scoped></style>
