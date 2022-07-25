<script>
  import { onMount } from 'svelte';
  import AboutMe from '../lib/AboutMe.svelte';
  import ContactMe from '../lib/ContactMe.svelte';
  import Hero from '../lib/Hero.svelte';
  import MyWorks from '../lib/MyWorks.svelte';
  let ready = false;
  onMount(() => (ready = true));
</script>

{#if ready}
  <Hero />
  <AboutMe />
  <div class="h-[40vh]" />
  <MyWorks />
  <div class="h-[40vh]" />
  <ContactMe />
  <div class="h-[40vh]" />
{/if}
