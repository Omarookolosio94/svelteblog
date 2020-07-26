<script>
  import { onMount } from 'svelte';
  import Loader from '../../components/Loader.svelte';
  import Profile from './Profile.svelte';

  let profiles = [];
  let loading = false;

  const url = 'https://ancient-brushlands-91721.herokuapp.com/api/profile';

  onMount(async () => {
    try {
      loading = true;
      const res = await fetch(url);
      profiles = await res.json();
      loading = false;
    } catch (err) {
      loading = false;
      console.log(err);
    }
  });
</script>

<style>
  .box {
    display: flex;
    flex-wrap: wrap;
  }
</style>

<div class="box">
  {#if loading}
    <Loader />
  {:else if profiles.length === 0}
    <p>No Profile</p>
  {:else}
    {#each profiles as profile}
      <Profile {profile} />
    {/each}
  {/if}
</div>
