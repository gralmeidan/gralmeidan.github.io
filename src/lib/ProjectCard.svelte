<script>
  import InViewDiv from './InViewDiv.svelte';
  import { fly, fade } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  export let description;
  export let repository;
  export let tags;
  export let title;
  export let href;
</script>

<InViewDiv className="h-[20vh]">
  <hr class="border-neutral-800 mt-6 mb-4" />
  <section class="my-2 font-roboto">
    <div class="flex justify-between">
      <h2 class="text-pink-600 font-semibold text-lg">{title}</h2>
      {#if href}
        <a {href} target="_blank" class="no-highlight">
          <img
            src="./icons/external-link.svg"
            class="w-5 ext-link"
            alt="Acessar página"
          />
        </a>
      {/if}
    </div>
    <p class="text-sm my-2 mb-4">{description['en-US']}</p>
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
  </section>
</InViewDiv>

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
    @apply bg-neutral-800 -top-11 p-2 block whitespace-nowrap rounded-md absolute z-10 invisible;
  }

  .tooltip:hover div {
    @apply visible;
  }

  .ext-link {
    filter: invert(50%);
  }

  .ext-link:hover,
  a:hover .ext-link {
    filter: invert(70%);
  }
</style>
