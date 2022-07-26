<script context="module">
  export const navView = tweened(0, {
    duration: 300,
    easing: cubicOut,
  });
</script>

<script>
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import NavOptions from './NavOptions.svelte';

  const toggleVisible = () => {
    $navView = $navView > 0 ? 0 : 200;
    closeIcon = !closeIcon;
  };

  let closeIcon = false;
</script>

<button
  style:right={`${$navView}px`}
  on:click={toggleVisible}
  class="flex flex-col no-highlight fixed top-0 z-50 right-0 p-2"
>
  {#each Array(3) as _}
    <hr
      class="bg-white border-[1px] w-7 transition-all duration-200 my-[3px]"
      class:close-icon={closeIcon}
    />
  {/each}
</button>

<nav
  style:width={`${$navView}px`}
  class="overflow-hidden h-[100vh] inset-shadow bg-neutral-850 fixed top-0 right-0"
>
  <NavOptions className="mobile-nav-options" onClick={toggleVisible} />
  <a
    class="mobile-nav-options"
    target="_blank"
    href="https://github.com/gralmeidan">github</a
  >
  <a
    class="mobile-nav-options"
    target="_blank"
    href="https://www.linkedin.com/in/gralmeidan/">linkedin</a
  >
</nav>

<style>
  .inset-shadow {
    -webkit-box-shadow: inset 10px 1px 20px 2px rgba(14, 14, 14, 0.199);
    box-shadow: inset 10px 1px 20px 2px rgba(14, 14, 14, 0.199);
  }
  .close-icon:first-child {
    @apply rotate-45 translate-y-2;
  }

  .close-icon:last-child {
    @apply -rotate-45 -translate-y-2;
  }

  .close-icon:nth-child(2) {
    @apply -translate-y-3 opacity-0;
  }
</style>
