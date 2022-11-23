<script setup lang="ts">
import { i18n } from '@/i18n';
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const localeOptions = [
  { title: 'English', value: 'en' },
  { title: 'Português', value: 'pt-BR' },
];

const { locale } = useI18n();

const selectedValue = ref('pt-BR');

watch(selectedValue, (value) => {
  locale.value = value as 'en' | 'pt-BR';
});
</script>

<template>
  <v-select
    v-model="selectedValue"
    class="select-translation"
    variant="underlined"
    :items="localeOptions"
    item-title="title"
    item-value="value"
  />
</template>

<style scoped>
.select-translation {
  width: 15rem;
}
</style>
