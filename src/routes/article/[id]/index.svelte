<script context="module">
  let article;
  let loading;

  export async function preload(page) {
    try {
      const { id } = page.params;
      let url = `https://ancient-brushlands-91721.herokuapp.com/api/article/${id}`;

      const res = await this.fetch(url);
      article = await res.json();
    } catch (err) {
      console.log(err);
    }
  }
</script>

<script>
  import { onMount } from 'svelte';
  import Loader from '../../../components/Loader.svelte';
  import Article, { formatDate } from '../../_components/Article.svelte';
  import LinkButton from '../../../components/LinkButton.svelte';
</script>

<style>
  .art-detail {
    display: flex;
  }

  .header-title {
    padding: 5rem 3rem;
  }
</style>

<LinkButton pathto="/" tagname="Back" icon="arrow-left" />
{#if loading}
  <Loader />
{:else if article}
  <div class="header-title bg-success">
    <h2 class="mb-2">{article.title}</h2>
    <p class="text-capitalize">
      Author: {article.author}
      <small class="mx-4">Date Published: {formatDate(article.date)}</small>

    </p>
    <div class="art-detail">

      {#each article.category as cats}
        <div class="mx-2">
          <small class="text-light">{cats}</small>
        </div>
      {/each}
      <div class="mx-2">
        <small class="text-light">
          <i class="fal fa-thumbs-up" />
          <span>{article.likes.length}</span>
        </small>
      </div>
    </div>
  </div>
  <div class="my-3">
    <p>{article.text}</p>
  </div>
{:else}
  <p>Article Not found</p>
{/if}
