<script>
  import { onDestroy } from 'svelte';
  import getLocale from '../helpers/getLocale';
  import InViewDiv from './InViewDiv.svelte';
  import SkillProgress from './SkillProgress.svelte';
  import strings from '../strings.json';

  let age = 18;
  const ageInterval = setInterval(() => {
    age = (
      (new Date() - new Date(2004, 0, 16, 0, 0, 0)) /
      (1000 * 60 * 60 * 24 * 365.25)
    ).toFixed(8);
  }, 100);

  onDestroy(() => {
    clearInterval(ageInterval);
  });

  const skills = [
    { name: 'JavaScript/TypeScript', value: 90, color: '#f7df1e' },
    { name: 'React', value: 80, color: '#61dafb' },
    { name: 'Flutter', value: 80, color: '#1fbcfd' },
    { name: 'Svelte', value: 70, color: '#FF2A2A' },
    { name: 'Nest', value: 55, color: '#e0234e' },
  ];

  const locale = getLocale();
  const { title, paragraphs, skills_title } = strings[locale].aboutme;
</script>

<InViewDiv htmlId="aboutme">
  <article class="section">
    <h1 class="lg:ml-2">{title}</h1>
    <div class="lg:flex lg:items-start lg:p-2">
      <section class="lg:w-1/2">
        {#each paragraphs as paragraph}
          <p>
            {@html paragraph.replace('${age}', `<code>${age}</code>`)}
          </p>
        {/each}
      </section>
      <InViewDiv className="lg:w-1/2 lg:ml-2">
        <section
          class="border p-2 mt-4 lg:mt-0 border-transparent border-t-neutral-700 lg:border-0"
        >
          <h2 class="text-center font-semibold lg:text-lg my-2 lg:mt-0">
            {skills_title}
          </h2>
          {#each skills as { name, value, color }}
            <SkillProgress {name} {value} {color} />
          {/each}
        </section>
      </InViewDiv>
    </div>
  </article>
</InViewDiv>

<style>
  p {
    font-family: Roboto, sans-serif;
    @apply my-2 text-center md:text-left md:text-lg;
  }
</style>
