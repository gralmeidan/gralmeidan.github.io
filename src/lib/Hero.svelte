<script>
  import getLocale from '../helpers/getLocale';
  import strings from '../strings';
  import DesktopSocials from './DesktopSocials.svelte';
  let innerWidth = 0;
  const locale = getLocale();

  const { greet, name, sub, description, anchors } = strings[locale].hero;
</script>

<svelte:window bind:innerWidth />

<div class="flex items-center h-[100vh] px-2">
  <!-- {#if innerWidth > 640}
    <DesktopSocials />
  {/if} -->
  <section class="section w-full my-auto">
    <div class="sm:mb-3 text-white">
      <h1 class="text-4xl font-semibold font-roboto sm:text-6xl lg:text-[64px]">
        {greet} <br />
        <span class="text-pink-600">{name}</span>
      </h1>
      <p class="text-sm font-roboto font-semibold sm:text-3xl lg:text-4xl">
        {sub}
      </p>
      <hr class="border-pink-600 my-2 max-w-sm sm:max-w-xs" />
      <p class="text-lg font-roboto font-semibold sm:text-2xl sm:max-w-[670px]">
        {description}
      </p>
    </div>
    <div>
      <a class="hero-button font-roboto" href="#aboutme">
        {anchors.aboutme}
      </a>
      <a class="hero-button font-roboto" href="#portfolio">
        {anchors.portfolio}
      </a>
    </div>
  </section>
</div>

<style>
  .hero-button {
    font-variant: small-caps;
    @apply font-semibold border-4 p-3 my-2 mr-2 sm:transition-all sm:hover:bg-white sm:hover:text-neutral-900 sm:text-xl lg:text-2xl sm:border-[6px] text-white inline-block;
  }
</style>
