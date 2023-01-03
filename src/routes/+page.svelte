<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 mx-5">
  {#each data.pokemons as pokemon}
    <a
      href="/view/{pokemon.name}"
      class="flex flex-col items-center shadow-lg bg-gradient-to-br from-purple-100 to-purple-300 "
    >
      <p class="text-2xl mt-4 first-letter:uppercase">{pokemon.name}</p>
      <img src="{pokemon.imageUrl}" alt="{pokemon.name}" class="w-32" />
    </a>
  {/each}
</div>
