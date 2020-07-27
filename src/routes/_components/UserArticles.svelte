<script>
  import Article from './Article.svelte';
  import { onMount } from 'svelte';
  import Loader from '../../components/Loader.svelte';

  let articles = [];
  let loading = false;
  export let id;

  const url = `https://ancient-brushlands-91721.herokuapp.com/api/article/user/${id}`;

  onMount(async () => {
    try {
      loading = true;
      const res = await fetch(url);
      articles = await res.json();
      loading = false;
      console.log(articles);
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

<div class="my-2">
  {#if articles.length > 0}
    <p class="text-bold">
      <span>User Articles:</span>
      {articles.length}
    </p>
  {/if}
</div>
<div class="box">
  {#if loading}
    <Loader />
  {:else if articles.length === 0}
    <p>Article not Yet Written</p>
  {:else}
    {#each articles as article}
      <Article {article} />
    {/each}
  {/if}
</div>
