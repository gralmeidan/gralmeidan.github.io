<script context="module">
  export const navView = tweened(0, {
    duration: 400,
    easing: cubicOut,
  });
</script>

<script>
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  const nav = [
    { href: '#aboutme', text: 'about me' },
    { href: '#portfolio', text: 'my works' },
    { href: '#contact', text: 'contact' },
  ];

  const toggleVisible = () => {
    if ($navView > 0) navView.set(0);
    else navView.set(200);
  };
</script>

<svelte:body class="overflow-hidden" />

<button
  style:right={`${$navView}px`}
  class="absolute top-0 p-2 right-0 flex flex-col gap-[6px] z-10 bg-neutral-900"
  on:click={toggleVisible}
>
  {#each Array(3) as _}
    <hr class="bg-white border-[1px] w-7" />
  {/each}
</button>

<nav
  style:width={`${$navView}px`}
  class="overflow-hidden right-0 absolute h-[100vh] bg-neutral-900"
>
  {#each nav as { text, href }}
    <a
      class="font-roboto text-white block small-caps font-semibold text-lg hover:text-pink-600 transition-colors p-2 pl-4 whitespace-nowrap "
      {href}
    >
      {text}
    </a>
  {/each}
</nav>

<style>
  .inset-shadow {
    -webkit-box-shadow: inset 10px 1px 20px 2px rgba(0, 0, 0, 0.63);
    box-shadow: inset 10px 1px 20px 2px rgba(0, 0, 0, 0.63);
  }
</style>
