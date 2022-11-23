<script setup lang="ts">
import { useStore } from '@/store';
import { ref } from 'vue';

const store = useStore();

const search = ref('');

const handleSubmit = () => store.setFilter(search.value);
</script>

<template>
  <form @submit.prevent="handleSubmit" :on-keydown.enter="handleSubmit">
    <v-text-field label="Pesquisar" v-model="search" variant="underlined" />
  </form>
</template>
