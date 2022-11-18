<script setup lang="ts">
import type { Pokemon } from '@/interfaces/pokemon';

type PokemonTableProps = {
  pokemon: Pokemon;
};

type PokemonTableColumnType = {
  title: string;
  value: string | number;
};

const props = defineProps<PokemonTableProps>();

const columns: PokemonTableColumnType[] = [
  {
    title: 'Ataque',
    value: props.pokemon.attack,
  },
  {
    title: 'Defesa',
    value: props.pokemon.defense,
  },
  {
    title: 'HP',
    value: props.pokemon.hp,
  },
  {
    title: 'Velocidade',
    value: props.pokemon.speed,
  },
  {
    title: 'SP ataque',
    value: props.pokemon.special_attack,
  },
  {
    title: 'SP defesa',
    value: props.pokemon.special_defense,
  },
];
</script>

<template>
  <v-card class="h-100">
    <v-card-title>Detalhes do pokémon</v-card-title>
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
