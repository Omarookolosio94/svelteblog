<script context="module">
  import LinkButton from '../../components/LinkButton.svelte';
  import { formatDate } from '../_components/Article.svelte';
  import UserArticles from '../_components/UserArticles.svelte';
  import Loader from '../../components/Loader.svelte';
  import { goto } from '@sapper/app';
  import { url, headers } from '../index.svelte';
  import { getProfile } from '../auth/api';

  let profile;
  let msg;
  let loading = false;

  export async function preload(page, session) {
    try {
      const { token } = session;

      if (!token) {
        return this.redirect(302, '/');
      }

      const result = await getProfile(this.fetch, token);

      const res = await result.json();

      if (result.status === 401) {
        this.redirect(302, '/');
      }

      if (res.msg) {
        loading = false;
        msg = res;
      } else {
        loading = false;
        profile = res;
      }
    } catch (err) {
      console.log(err);
    }
  }
</script>

<script>
  import { errorMsg } from '../../stores';
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
  <div class="header-title bg-primary">
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
  <div class="my-3">
    <p>Add Info To Your Profile</p>

    <LinkButton pathto="/" tagname="Update Profile" icon="user-plus" />

  </div>
{/if}

<!-- <div class="my-4">
  <UserArticles id={userId} />
</div> -->
