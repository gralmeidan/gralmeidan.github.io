<script>
  import strings from '../strings';
  import getLocale from '../helpers/getLocale';

  const locale = getLocale();
  const { aboutme, portfolio, contact } = strings[locale].nav;

  const nav = [
    { href: '#aboutme', text: aboutme },
    { href: '#portfolio', text: portfolio },
    { href: '#contact', text: contact },
  ];

  export let className;
  export let onClick = () => {};
</script>

<svelte:body class="overflow-hidden" />

{#each nav as { text, href }}
  <a class={className} {href} on:click={onClick}>
    {text}
  </a>
{/each}
