<script context="module">
  let profile;
  let msg;
  let loading = false;
  let userId;

  export async function preload(page) {
    try {
      loading = true;
      const { id } = page.params;
      userId = id;
      let url = `https://ancient-brushlands-91721.herokuapp.com/api/profile/user/${id}`;

      const res = await this.fetch(url);

      if (res.status === 200) {
        loading = false;
        profile = await res.json();
      } else {
        msg = await res.json();
        loading = false;
      }
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
  import Profile from '../../_components/Profile.svelte';
  import UserArticles from '../../_components/UserArticles.svelte';
</script>

<style>
  .art-detail {
    display: flex;
  }

  .header-title {
    padding: 5rem 3rem;
  }
</style>

<LinkButton pathto="/profile" tagname="Back" icon="arrow-left" />
{#if loading}
  <Loader />
{:else if profile}
  <div class="header-title bg-success">
    <h2 class="mb-2">{profile.user.name}</h2>
    <p>
      Email: {profile.user.email}
      <small class="mx-4">Joined Date: {formatDate(profile.date)}</small>

    </p>
    <div class="art-detail">
      {#each profile.skills as skill}
        <div class="mx-2">
          <small class="text-light text-capitalize">{skill}</small>
        </div>
      {/each}
    </div>
    {#if profile.social}
      <div class="art-detail">
        {#if profile.social.linkedin}
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer">
            <i
              class="fab fa-linkedin fa-2x my-2 text-light"
              aria-hidden="true" />
          </a>
        {/if}

      </div>
    {/if}
    <div class="my-3">
      <p>{profile.bio}</p>
    </div>
  </div>
{:else if msg}
  <p>{msg.msg}</p>
{/if}

<div class="my-4">
  <UserArticles id={userId} />
</div>
