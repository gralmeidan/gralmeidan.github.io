<script>
  import { onMount } from 'svelte';
  import AboutMe from '../lib/AboutMe.svelte';
  import ContactMe from '../lib/ContactMe.svelte';
  import DesktopSocials from '../lib/DesktopSocials.svelte';
  import Hero from '../lib/Hero.svelte';
  import MyWorks from '../lib/MyWorks.svelte';
  let ready = false;
  onMount(() => (ready = true));
</script>

{#if ready}
  <DesktopSocials />
  <Hero />
  <AboutMe />
  <MyWorks />
  <ContactMe />
{/if}
