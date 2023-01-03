<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<h1 class="text-4xl font-semibold text-purple-200">View Pokemon: {data.name}</h1>
