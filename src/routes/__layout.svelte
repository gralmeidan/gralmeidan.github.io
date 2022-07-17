<script>
  import '../app.css';
  import DesktopNav from '../lib/DesktopNav.svelte';
  import MobileNav, { navView } from '../lib/MobileNav.svelte';
  let innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<header>
  {#if innerWidth < 640}
    <MobileNav />
  {:else}
    <DesktopNav />
  {/if}
</header>

<main style:left={`-${$navView}px`} class="absolute sm:static">
  <slot />
</main>
