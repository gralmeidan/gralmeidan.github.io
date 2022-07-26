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
    { name: 'JavaScript', value: 85, color: '#f7df1e' },
    { name: 'React', value: 70, color: '#61dafb' },
    { name: 'Tailwind', value: 60, color: '#07b6d5' },
    { name: 'Svelte', value: 20, color: '#ff3e00' },
  ];

  const locale = getLocale();
  const { title, p1, p2, skills_title } = strings[locale].aboutme;
</script>

<InViewDiv htmlId="aboutme">
  <article class="section">
    <h1 class="ml-2">{title}</h1>
    <div class="md:flex md:items-center md:p-2">
      <section class="md:w-1/2">
        <p>
          {@html p1.replace('${age}', `<code>${age}</code>`)}
        </p>
        <p>
          {p2}
        </p>
      </section>
      <InViewDiv className="md:w-1/2 md:ml-2">
        <section class="border rounded-md p-2 border-neutral-600 md:border-0">
          <h2 class="text-center font-semibold md:text-lg">
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
