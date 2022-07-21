<script>
  import { onDestroy } from 'svelte';

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
</script>

<div>
  <span>{'<about>'}</span>
  <article>
    <h1>About me</h1>
    <p>
      Hey! My name is Geraldo Almeida, I am <code>{age}</code> years old, and I enjoy
      writing code. My first contact with the wonderful world of programming was
      making simple Discord bots with Python, and my first project with web development
      was an extracurricular project in high school consisting of building a mobile
      app with React Native.
    </p>
    <p>
      I greatly enjoyed both experiences and have since worked towards becoming
      a Full Stack Web Developer by enrolling in a bootcamp and doing various
      projects to solidify my skills.
    </p>
  </article>
  <span>{'</about>'}</span>
</div>
