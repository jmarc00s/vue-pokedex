<script setup lang="ts">
import PokemonList from '@/components/PokemonList.vue';
import PokemonSearch from '@/components/PokemonSearch.vue';
</script>
<template>
  <h1 class="text-center text-h6">{{ $t('homePage.welcome') }}</h1>
  <PokemonSearch />
  <PokemonList />
</template>
