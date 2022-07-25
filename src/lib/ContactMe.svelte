<script>
  import FancyInput from './FancyInput.svelte';
  import { fly } from 'svelte/transition';
  import InViewDiv from './InViewDiv.svelte';

  let name = '';
  let email = '';
  let message = '';

  let response;
  let error;

  const submitForm = () => {
    response = undefined;
    error = undefined;

    if (name === '' || email === '' || message === '') {
      error = 'Every field is required';
      return;
    }

    const URL = 'https://formsubmit.co/ajax/f9c030aaad6b5efec769c33a6a946cb3';
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name,
        message,
        email,
      }),
    })
      .then((response) => response.json())
      .then((data) => (response = data))
      .catch((error) => (response = error));

    name = '';
    email = '';
    message = '';
  };
</script>

<InViewDiv className="h-[20vh]" htmlId="contact">
  <section class="section">
    <h1>Contact me</h1>
    <form>
      <FancyInput type="input" name="name" bind:value={name} label="Name" />
      <FancyInput type="input" name="email" bind:value={email} label="E-mail" />
      <FancyInput
        type="textarea"
        name="message"
        bind:value={message}
        label="Message"
      />
      <div class="flex items-baseline">
        <button
          on:click|preventDefault={submitForm}
          class="font-roboto p-2 mt-4 bg-neutral-800 px-4 rounded transition-colors hover:bg-neutral-700 active:bg-neutral-900"
          >Submit</button
        >
        {#if response || error}
          {#if response?.success}
            <p
              class="ml-4 text-sm font-roboto text-neutral-400"
              in:fly={{ y: -20 }}
            >
              Form submitted successfully!
            </p>
          {:else}
            <p
              class="ml-4 text-sm font-roboto text-neutral-400"
              in:fly={{ y: -20 }}
            >
              {error || 'Something went wrong, please try again later'}
            </p>
          {/if}
        {/if}
      </div>
    </form>
  </section>
</InViewDiv>
