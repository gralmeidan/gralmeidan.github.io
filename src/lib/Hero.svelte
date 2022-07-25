<script>
  import DesktopSocials from './DesktopSocials.svelte';
  let innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<div class="flex items-center h-[100vh] px-2">
  <!-- {#if innerWidth > 640}
    <DesktopSocials />
  {/if} -->
  <section class="section w-full">
    <div class="sm:mb-3 text-white">
      <h1 class="text-4xl font-semibold font-roboto sm:text-6xl lg:text-[64px]">
        Hi, I'm <br class="lg:hidden" />
        <span class="text-pink-600">Geraldo Almeida</span>
      </h1>
      <p class="text-sm font-roboto font-semibold sm:text-3xl lg:text-4xl">
        and I do stuff sometimes.
      </p>
      <hr class="border-pink-600 my-2 max-w-sm sm:max-w-xs" />
      <p class="text-lg font-roboto font-semibold sm:text-2xl sm:max-w-[670px]">
        I am a Brazilian full stack web developer and currently a student at
        Trybe
      </p>
    </div>
    <div>
      <button class="hero-button font-roboto">explore works</button>
      <button class="hero-button font-roboto">about me</button>
    </div>
  </section>
</div>

<style>
  .hero-button {
    font-variant: small-caps;
    @apply font-semibold border-4 p-3 my-2 mr-2 sm:transition-all sm:hover:bg-white sm:hover:text-neutral-900 sm:text-xl lg:text-2xl sm:border-[6px] text-white;
  }
</style>
