<script>
  const nav = [
    { href: '#aboutme', text: 'about me' },
    { href: '#portfolio', text: 'my works' },
    { href: '#contact', text: 'contact' },
  ];

  export let className;
</script>

<svelte:body class="overflow-hidden" />

{#each nav as { text, href }}
  <a class={className} {href}>
    {text}
  </a>
{/each}
