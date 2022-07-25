<script>
  import { onDestroy } from 'svelte';
  import InViewDiv from './InViewDiv.svelte';
  import SkillProgress from './SkillProgress.svelte';

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
</script>

<InViewDiv
  htmlId="aboutme"
  className="m-2 font-roboto h-[80vh] md:h-[60vh] relative"
>
  <span slot="id" id="aboutme" class="relative -top-10" />
  <article class="section relative">
    <h1 class="ml-2">About me</h1>
    <div class="md:flex md:items-center md:p-2">
      <section class="md:w-1/2">
        <p>
          Hey! My name is Geraldo Almeida, I am <code>{age}</code> years old, and
          I enjoy writing code. My first contact with the wonderful world of programming
          was making simple Discord bots with Python, and my first project with web
          development was an extracurricular project in high school consisting of
          building a mobile app with React Native.
        </p>
        <p>
          I greatly enjoyed both experiences and have since worked towards
          becoming a Full Stack Web Developer by enrolling in a bootcamp and
          doing various projects to solidify my skills.
        </p>
      </section>
      <InViewDiv className="md:w-1/2 md:ml-2">
        <section class="border rounded-md p-2 border-neutral-600 md:border-0">
          <h2 class="text-center font-semibold md:text-lg">My skills</h2>
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
  code {
    @apply bg-neutral-800 px-1 py-[2px] text-sm rounded-md font-mono text-neutral-300 md:text-base;
  }
</style>
