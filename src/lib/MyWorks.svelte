<script>
  import projects from '../projects.json';
  import ProjectCard from './ProjectCard.svelte';
  console.log(projects);
</script>

<h1>Some of the stuff I did</h1>
{#each Object.values(projects) as project}
  <ProjectCard {...project} />
{/each}
