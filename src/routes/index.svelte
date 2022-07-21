<script>
  import { onMount } from 'svelte';
  import Hero from '../lib/Hero.svelte';
  let ready = false;
  onMount(() => (ready = true));
</script>

{#if ready}
  <Hero />
{/if}
