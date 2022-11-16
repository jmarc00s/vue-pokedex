<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <v-layout>
    <v-app-bar color="gray-lighten-2"></v-app-bar>
    <v-main>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
  </v-layout>
</template>

<style scoped></style>
