<script>
  import projects from '../projects.json';
  import InViewDiv from './InViewDiv.svelte';
  import ProjectCard from './ProjectCard.svelte';
  import { fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
</script>

<InViewDiv>
  <section
    class="section"
    transition:fly={{
      duration: 800,
      y: 200,
      easing: quintOut,
    }}
  >
    <h1>My works</h1>
    {#each Object.values(projects) as project}
      <ProjectCard {...project} />
    {/each}
  </section>
</InViewDiv>
