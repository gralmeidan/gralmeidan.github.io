<script>
  import { onMount } from 'svelte';
  import AboutMe from '../lib/AboutMe.svelte';
  import Hero from '../lib/Hero.svelte';
  let ready = false;
  onMount(() => (ready = true));
</script>

{#if ready}
  <Hero />
  <AboutMe />
{/if}
