<script setup lang="ts">
import { useStore } from '@/store';
import { ref, watch } from 'vue';
import { useDebounce } from '@/composable/useDebounce';

const store = useStore();
const search = ref('');
const { debounce } = useDebounce();

const handleSubmit = () => store.setFilter(search.value);

const handleSearchInput = ({ target }: any) => {
  search.value = target.value;
  debounce(() => store.setFilter(search.value));
};
</script>

<template>
  <form
    class="d-flex align-center"
    @submit.prevent="handleSubmit"
    :on-keydown.enter="handleSubmit"
  >
    <v-text-field
      label="Pesquisar"
      :value="search"
      @input="handleSearchInput"
      variant="underlined"
    />
  </form>
</template>
