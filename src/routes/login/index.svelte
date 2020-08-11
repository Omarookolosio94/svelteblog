<script>
  import { goto } from '@sapper/app';
  import { errorMsg, session } from '../../stores';

  let user = {
    email: '',
    password: ''
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/auth/login', {
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
          message: [{ msg: 'Welcome Back' }]
        });
        goto('/');
        user = {
          email: '',
          password: ''
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
    height: 60vh;
    width: 100%;
  }
</style>

<svelte:head>
  <title>Ariere - Register/Login</title>
</svelte:head>

<div class="form-box">

  <div class="my-4">
    <p class="text-bold">Welcome to Ariere</p>
  </div>
  <div class=" col-10 col-md-8 col-lg-4 mx-auto ">
    <form on:submit|preventDefault={handleSubmit}>
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          class="form-control"
          placeholder="Enter email"
          bind:value={user.email} />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          bind:value={user.password} />
      </div>

      <button type="submit" class="btn btn-primary w-100">
        <i class="fal fa-sign-in-alt" />
        Login
      </button>
    </form>

    <p class="mt-2">
      Not A Member Yet?
      <a href="/register">Register Today for Free</a>
    </p>
  </div>
</div>
