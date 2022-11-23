<script setup lang="ts">
import type { Pokemon } from '@/interfaces/pokemon';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

type PokemonTableProps = {
  pokemon: Pokemon;
};

type PokemonTableColumnType = {
  title: string;
  value: string | number;
};

const props = defineProps<PokemonTableProps>();

const { t } = useI18n();

const columns = computed<PokemonTableColumnType[]>(() => {
  return [
    {
      title: t('pokemonTable.columns.attack'),
      value: props.pokemon.attack,
    },
    {
      title: t('pokemonTable.columns.defense'),
      value: props.pokemon.defense,
    },
    {
      title: t('pokemonTable.columns.hp'),
      value: props.pokemon.hp,
    },
    {
      title: t('pokemonTable.columns.speed'),
      value: props.pokemon.speed,
    },
    {
      title: t('pokemonTable.columns.sp_attack'),
      value: props.pokemon.special_attack,
    },
    {
      title: t('pokemonTable.columns.sp_defense'),
      value: props.pokemon.special_defense,
    },
  ];
});
</script>

<template>
  <v-card class="h-100">
    <v-card-title>{{ $t('detailsPage.title') }}</v-card-title>
    <v-table>
      <thead>
        <tr>
          <th>Atributo</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(column, index) in columns" :key="index">
          <td>{{ column.title }}</td>
          <td>{{ column.value }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<style scoped>
td {
  text-align: center;
}
</style>
