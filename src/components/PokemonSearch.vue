<script setup lang="ts">
import { useStore } from '@/store';
import { ref } from 'vue';
import { useDebounce } from '@/composable/useDebounce';

const store = useStore();
const search = ref('');
const { debounce } = useDebounce();

const handleSearchInput = ({ target }: any) => {
  search.value = target.value;
  debounce(() => store.setFilter(search.value));
};
</script>

<template>
  <form class="d-flex align-center" @submit.prevent="">
    <v-text-field
      :label="$t('pokemonSearch.search')"
      :value="search"
      @input="handleSearchInput"
      variant="underlined"
    />
  </form>
</template>
