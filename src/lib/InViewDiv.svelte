<script>
  import { inview } from 'svelte-inview';

  export let className = '';
  export let htmlId = '';
  let isInView;

  const handleInView = ({ detail: { inView } }) => {
    isInView = inView;
  };
</script>

<div
  use:inview={{
    unobserveOnEnter: true,
    rootMargin: '-20%',
  }}
  on:change={handleInView}
  style:height={'fit-content'}
  class:relative={htmlId !== ''}
  class={className}
>
  {#if htmlId !== ''}
    <span id={htmlId} class="-top-12 relative" />
  {/if}
  {#if isInView}
    <div class="slide-top">
      <slot />
    </div>
  {:else}
    <div class="opacity-0">
      <slot />
    </div>
  {/if}
</div>

<style>
  .slide-top {
    -webkit-animation: slide-top 1000ms cubic-bezier(0.23, 1, 0.32, 1) 0ms
      alternate forwards;
    animation: slide-top 1000ms cubic-bezier(0.23, 1, 0.32, 1) 0ms alternate
      forwards;
  }

  @-webkit-keyframes -global-slide-top {
    0% {
      -webkit-transform: translateY(200px);
      transform: translateY(200px);
      opacity: -100;
    }
    100% {
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
      opacity: 100;
    }
  }
  @keyframes -global-slide-top {
    0% {
      -webkit-transform: translateY(200px);
      transform: translateY(200px);
      opacity: -100;
    }
    100% {
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
      opacity: 100;
    }
  }
</style>
