import { api } from "$lib/pokeapi";
import type { PageServerLoad } from "./$types";

import { z } from "zod";
import { error } from "@sveltejs/kit";

// TODO(patrik): Move this to the pokeapi util
const schema = z.object({
  name: z.string(),
  sprites: z.object({
    front_default: z.string(),
    back_default: z.string(),
  }),
});

export const load = (async ({ params }) => {
  // TODO(patrik): Move this to the pokeapi util
  const res = await api.get(`/pokemon/${params.name}`);

  try {
    const pokemon = schema.parse(res.data);
    return { pokemon };
  } catch (e) {
    throw error(500, {
      message: "PokeApi response doesn't match schema",
    });
  }
}) satisfies PageServerLoad;
