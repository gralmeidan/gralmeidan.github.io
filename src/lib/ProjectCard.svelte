<script>
  export let description;
  export let repository;
  export let tags;
  export let title;
  export let trybe;
  export let href;
</script>

<div class="border border-neutral-800 rounded-md m-2 p-3 max-w-md font-roboto">
  <h2 class="text-rose-600 font-semibold text-lg">{title}</h2>
  <p class="text-sm my-2">{description['en-US']}</p>
  <div class="flex justify-between">
    <div class="flex">
      {#each tags as tag}
        <div
          class="tooltip pr-1"
          style:margin-right={tag === 'svelte' && '-3px'}
        >
          <div>{tag}</div>
          <img
            src={`./icons/${tag}.${
              tag === 'react-testing-library' ? 'png' : 'svg'
            }`}
            alt={tag}
            class="text-rose-600 w-6 h-5"
          />
        </div>
      {/each}
    </div>
    <a href={repository} target="_blank" class="no-highlight">
      <img
        src="./github-norect.svg"
        class="w-5 h-5 scale-[2.3]"
        alt="Repository"
      />
    </a>
  </div>
</div>

<style>
  img {
    filter: invert(8%) sepia(17%) saturate(0%) brightness(97%) contrast(84%);
    @apply transition-all duration-200;
  }

  img:hover {
    filter: invert(0%) sepia(0%) saturate(100%) brightness(100%) contrast(100%);
  }

  .tooltip {
    @apply relative;
  }

  .tooltip div {
    @apply bg-neutral-800 transition-all opacity-0 -top-11 p-2 block whitespace-nowrap rounded-md absolute z-10 invisible;
  }

  .tooltip:hover div {
    @apply opacity-100 visible;
  }
</style>
