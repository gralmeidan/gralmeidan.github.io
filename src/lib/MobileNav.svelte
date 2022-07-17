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

  const nav = [
    { href: '#aboutme', text: 'about me' },
    { href: '#portfolio', text: 'my works' },
    { href: '#contact', text: 'contact' },
  ];

  const toggleVisible = () => {
    if ($navView > 0) {
      navView.set(0);
      closeIcon = false;
    } else {
      navView.set(200);
      closeIcon = true;
    }
  };

  let closeIcon = false;
</script>

<svelte:body class="overflow-hidden" />

<button
  style:right={`${$navView}px`}
  class="absolute top-0 p-2 right-0 flex flex-col gap-[6px] z-10 bg-neutral-900 no-highlight pt-3"
  on:click={toggleVisible}
>
  {#each Array(3) as _}
    <hr
      class="bg-white border-[1px] w-7 transition-all duration-200"
      class:close-icon={closeIcon}
    />
  {/each}
</button>

<nav
  style:width={`${$navView}px`}
  class="overflow-hidden right-0 absolute h-[100vh] inset-shadow bg-neutral-800"
>
  <NavOptions
    className="font-roboto text-white block small-caps font-semibold text-lg hover:text-pink-600 transition-colors p-2 pl-6 whitespace-nowrap "
  />
</nav>

<style>
  .inset-shadow {
    -webkit-box-shadow: inset 10px 1px 20px 2px rgba(202, 155, 155, 0.63);
    box-shadow: inset 10px 1px 20px 2px rgba(14, 14, 14, 0.404);
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
