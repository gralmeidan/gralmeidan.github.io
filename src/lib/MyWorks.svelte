<script>
  import projects from '../projects.json';
  import InViewDiv from './InViewDiv.svelte';
  import ProjectCard from './ProjectCard.svelte';
  import { fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
</script>

<InViewDiv className="relative">
  <span slot="id" id="portfolio" class="relative -top-40" />
  <section class="section">
    <h1>My works</h1>
    {#each Object.values(projects) as project}
      <ProjectCard {...project} />
    {/each}
  </section>
</InViewDiv>
