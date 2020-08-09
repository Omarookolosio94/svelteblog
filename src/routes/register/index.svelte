<script>
  import { goto, stores } from '@sapper/app';
  import axios from 'axios';
  // import { userToken, errorMsg } from '../../stores';
  import { onMount } from 'svelte';
  import { authUser } from '../../utilis/utilis';

  let user = {
    name: '',
    email: '',
    password: '',
    password2: ''
  };

  // onMount(async () => {
  //   authUser($userToken);
  // });

  const { session } = stores();

  async function submit() {
    try {
      const res = await axios.post('/auth/register', user);
      // $session.user = res.data;

      console.log(res);

      user = {
        name: '',
        email: '',
        password: '',
        password2: ''
      };
      goto('/');
    } catch (err) {
      console.log(err);
    }
  }
</script>

<style>
  .form-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
</style>

<svelte:head>
  <title>Ariere - Register</title>
</svelte:head>

<div class="form-box">
  <div class=" ">
    <p class="text-bold">Start Your Journey With Us</p>

  </div>
  <div class="col-10 col-md-8 col-lg-4 mx-auto">
    <form on:submit|preventDefault={submit}>
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          placeholder="Enter Name"
          bind:value={user.name} />

      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          class="form-control"
          placeholder="Enter email"
          bind:value={user.email} />
        <small class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          bind:value={user.password} />
      </div>
      <div class="form-group">
        <label for="confirmpassword">Confirm Password</label>
        <input
          type="password"
          class="form-control"
          bind:value={user.password2} />
      </div>

      <button type="submit" class="btn btn-primary w-100">
        <i class="fal fa-sign-in-alt" />
        Login
      </button>

    </form>
    <p class="mt-2">
      Already A Member?
      <a href="/login">Login</a>
    </p>

  </div>
</div>
