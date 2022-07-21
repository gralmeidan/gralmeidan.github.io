<script>
  import { tweened } from 'svelte/motion';
  import { onMount } from 'svelte';
  import cssVariables from '../hooks/cssVariables';

  export let value = 0;
  export let name;
  export let color;

  const prog = tweened(0);

  onMount(() => {
    $prog = value;
  });
</script>

<label class="block">
  {name} <br class="sm:hidden" />
  <progress use:cssVariables={{ color }} max="100" value={$prog} class="" />
</label>

<style>
  progress {
    @apply w-full;
  }
  progress::-webkit-progress-bar {
    @apply rounded-md overflow-hidden bg-neutral-500;
  }
  progress::-webkit-progress-value {
    background-color: var(--color);
  }
</style>
