<script>
  export let description;
  export let repository;
  export let tags;
  export let title;
  export let trybe;
</script>

<div class="border border-neutral-800 rounded-md m-2 p-3 max-w-md font-roboto">
  <h2 class="text-rose-600 font-semibold text-lg">{title}</h2>
  <p class="text-sm my-2">{description['en-US']}</p>
  <div class="flex gap-1">
    {#each tags as tag}
      <img
        src={`./icons/${tag}.${
          tag === 'react-testing-library' ? 'png' : 'svg'
        }`}
        alt={tag}
        class="text-rose-600 w-5 mr-1"
      />
    {/each}
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
</style>
