import type { Pokemon } from '@/interfaces/pokemon';
import axios from 'axios';

export async function getPokemons(): Promise<Pokemon[]> {
  const { data } = await axios<Pokemon[]>('/pokemons');

  return data;
}

export async function getPokemonsPaged(
  page: number,
  size: number
): Promise<Pokemon[]> {
  const { data } = await axios<Pokemon[]>(
    `/pokemons/paged?page=${page}&size=${size}`
  );

  return data;
}

export async function getPokemon(id: string): Promise<Pokemon> {
  const { data } = await axios<Pokemon>(`/pokemon/${id}`);
  return data;
}

export async function getRelatedPokemons(
  pokemonId: string
): Promise<Pokemon[]> {
  const { data } = await axios<Pokemon[]>(`/pokemon/related/${pokemonId}`);
  return data;
}
