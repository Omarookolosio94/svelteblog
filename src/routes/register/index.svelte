<script>
  import { goto } from '@sapper/app';
  import { errorMsg, session } from '../../stores';
  import { authUser } from '../../utilis/utilis';
  import { onMount } from 'svelte';

  let user = {
    name: '',
    email: '',
    password: '',
    password2: ''
  };

  onMount(async () => {
    if ($session && $session.token !== null) {
      authUser($session.token);
    }
  });

  const handleSubmit = async () => {
    try {
      const response = await fetch('/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(user)
      });

      const token = await response.json();
      if (token.errors) {
        errorMsg.set({ type: 'danger', message: token.errors });
      } else {
        session.set({
          token: token.token
        });
        errorMsg.set({
          type: 'success',
          message: [{ msg: 'Registration Successful, You are Welcome' }]
        });
        goto('/');
        user = {
          name: '',
          email: '',
          password: '',
          password2: ''
        };
      }
    } catch (error) {
      console.log(error);
    }
  };
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
    <form on:submit|preventDefault={handleSubmit}>
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
        Register
      </button>

    </form>
    <p class="mt-2">
      Already A Member?
      <a href="/login">Login</a>
    </p>

  </div>
</div>
