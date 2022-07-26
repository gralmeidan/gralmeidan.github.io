<script>
  import projects from '../projects.json';
  import InViewDiv from './InViewDiv.svelte';
  import ProjectCard from './ProjectCard.svelte';
  import strings from '../strings';
  import getLocale from '../helpers/getLocale';

  const locale = getLocale();
</script>

<InViewDiv className="relative" htmlId="portfolio">
  <section class="section">
    <h1>{strings[locale].portfolio.title}</h1>
    {#each Object.values(projects) as project}
      <ProjectCard {...project} />
    {/each}
  </section>
</InViewDiv>
