<script context="module">
  export const url = 'https://ancient-brushlands-91721.herokuapp.com';

  export const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  };
</script>

<script>
  import Articles from './_components/Articles.svelte';
</script>

<svelte:head>
  <title>Ariere Publication</title>
</svelte:head>

<p>Welcome to Ariere Publication, Delivering the very Best</p>
<Articles />
