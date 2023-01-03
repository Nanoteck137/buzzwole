import type { PageServerLoad } from "./$types";

export const load = (async ({ params }) => {
  let name = params.name;
  return { name };
}) satisfies PageServerLoad;
