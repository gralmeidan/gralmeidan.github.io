<script>
  import FancyInput from './FancyInput.svelte';
  let name = '';
  let email = '';
  let message = '';
</script>

<section class="m-4">
  <FancyInput type="input" name="name" value={name} label="Name" />
  <FancyInput type="input" name="email" value={email} label="E-mail" />
  <FancyInput type="textarea" name="message" value={message} label="Message" />
</section>
