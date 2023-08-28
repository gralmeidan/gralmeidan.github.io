<script>
  import projects from '../projects.json';
  import InViewDiv from './InViewDiv.svelte';
  import ProjectCard from './ProjectCard.svelte';
  import strings from '../strings';
  import getLocale from '../helpers/getLocale';

  const locale = getLocale();

  const projectList = Object.values(projects).filter(({ hidden }) => !hidden);
</script>

<InViewDiv className="relative" htmlId="portfolio">
  <section class="section">
    <h1>{strings[locale].portfolio.title}</h1>
    {#each projectList as project}
      <ProjectCard {...project} />
    {/each}
  </section>
</InViewDiv>
