<script setup lang="ts">
import { useRoute } from 'vue-router';

const {
  params: { id },
} = useRoute();
</script>

<template>
  <section>Details page, pokemon {{ id }}</section>
</template>
