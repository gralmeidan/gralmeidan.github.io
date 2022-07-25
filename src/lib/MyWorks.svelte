<script>
  import projects from '../projects.json';
  import InViewDiv from './InViewDiv.svelte';
  import ProjectCard from './ProjectCard.svelte';
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
