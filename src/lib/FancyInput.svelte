<script>
  export let name;
  export let value;
  export let label;
  export let type;

  const att = { name, id: name, placeholder: ' ', class: 'fancy-input' };
</script>

<div class="flex flex-col-reverse items-start font-roboto mt-3">
  {#if type === 'input'}
    <input {...att} bind:value />
  {:else}
    <textarea {...att} bind:value />
  {/if}
  <label class="fancy-label" for={name}>{label}</label>
</div>

<style>
  .fancy-label {
    @apply transition-all ease-out text-neutral-400;
  }

  .fancy-input:placeholder-shown + .fancy-label {
    @apply translate-y-8 translate-x-2 text-neutral-500 cursor-text;
  }

  .fancy-input {
    @apply py-2 bg-transparent focus-visible:outline-none pl-2 border-b-neutral-600 border border-transparent focus-visible:border-b-neutral-500 transition-colors w-full;
  }

  .fancy-input:focus + .fancy-label {
    @apply text-pink-600 translate-y-0 translate-x-0;
  }

  textarea {
    @apply h-52;
  }
</style>
