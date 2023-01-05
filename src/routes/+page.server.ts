import { api } from "$lib/pokeapi";
import type { PageServerLoad } from "./$types";

const LIMIT = 20;

export const load = (async ({ url }) => {
  const page = parseInt(url.searchParams.get("page") || "0");
  const offset = page * LIMIT;
  const res = await api.get(`/pokemon?limit=${LIMIT}&offset=${offset}`);

  const pokemons = [];
  for (const result of res.data.results) {
    const res = await api.get(result.url);

    pokemons.push({
      name: result.name,
      imageUrl: res.data.sprites.front_default,
    });
  }

  return { page, pokemons };
}) satisfies PageServerLoad;
