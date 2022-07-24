<script>
  import FancyInput from './FancyInput.svelte';
  let name = '';
  let email = '';
  let message = '';
  let response;

  const submitForm = () => {
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

<section class="m-4">
  <form>
    <FancyInput type="input" name="name" bind:value={name} label="Name" />
    <FancyInput type="input" name="email" bind:value={email} label="E-mail" />
    <FancyInput
      type="textarea"
      name="message"
      bind:value={message}
      label="Message"
    />
    <div class="flex">
      <button
        on:click|preventDefault={submitForm}
        class="font-roboto p-2 mt-4 bg-neutral-800 px-4 rounded transition-colors hover:bg-neutral-700 active:bg-neutral-900"
        >Submit</button
      >
      <p>Form submitted</p>
    </div>
  </form>
</section>
