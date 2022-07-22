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
  id={htmlId}
  use:inview={{
    unobserveOnEnter: true,
    rootMargin: '-20%',
  }}
  on:change={handleInView}
  class={className}
>
  {#if isInView}
    <slot />
  {/if}
</div>
