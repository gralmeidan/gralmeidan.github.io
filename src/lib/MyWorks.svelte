<script>
  import projects from '../projects.json';
  import InViewDiv from './InViewDiv.svelte';
  import ProjectCard from './ProjectCard.svelte';
  import { fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
</script>

<InViewDiv>
  <section
    class="m-4 md:max-w-screen-md md:m-auto lg:max-w-screen-lg"
    transition:fly={{
      duration: 800,
      y: 200,
      easing: quintOut,
    }}
  >
    <h1
      class="font-roboto font-semibold text-2xl md:text-4xl text-center text-pink-600 my-4 md:text-left"
    >
      My works
    </h1>
    {#each Object.values(projects) as project}
      <ProjectCard {...project} />
    {/each}
  </section>
</InViewDiv>
