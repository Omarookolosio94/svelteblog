<script>
  import Nav from './_components/Nav.svelte';
  import Alerts from './_components/Alerts.svelte';
</script>

<Alerts />
<Nav />

<div class="container my-3">
  <main>
    <slot />
  </main>
</div>
