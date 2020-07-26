<script>
  import Article from './Article.svelte';
  import { onMount } from 'svelte';
  import Loader from '../../components/Loader.svelte';

  let articles = [];
  let loading = false;

  const url = 'https://ancient-brushlands-91721.herokuapp.com/api/article';

  onMount(async () => {
    try {
      loading = true;
      const res = await fetch(url);
      articles = await res.json();
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
  {:else if articles.length === 0}
    <p>No Articles</p>
  {:else}
    {#each articles as article}
      <Article {article} />
    {/each}
  {/if}
</div>
