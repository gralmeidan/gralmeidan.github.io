<script>
  import '../app.css';
  import DesktopNav from '../lib/DesktopNav.svelte';
  import MobileNav, { navView } from '../lib/MobileNav.svelte';
  let innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<header>
  {#if !!innerWidth}
    {#if innerWidth < 640}
      <MobileNav />
    {:else}
      <DesktopNav />
    {/if}
  {/if}
</header>

<main style:left={`-${$navView}px`} class="absolute sm:static">
  <div src="./src/routes/background.svg" alt="" class="background" />
  <slot />
</main>

<style>
  .background {
    height: 100vh;
    width: 100vw;
    background-image: url('./src/routes/background.svg');
    background-position-y: bottom;
    background-position-x: right;
    @apply absolute -z-50 top-0 bg-no-repeat bg-cover;
  }
</style>
