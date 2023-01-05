<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<h1 class="text-4xl font-semibold text-purple-200">
  <span class="capitalize">{data.pokemon.name}</span>
</h1>

<div class="flex">
  <img src="{data.pokemon.sprites.front_default}" alt="Front Default" />
  <img src="{data.pokemon.sprites.back_default}" alt="Front Default" />
</div>
