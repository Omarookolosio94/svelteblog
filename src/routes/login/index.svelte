<script>
  import { goto } from '@sapper/app';
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
    <form>
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" placeholder="Enter email" />
        <small class="form-text text-muted">Email is Required</small>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" placeholder="Password" />
      </div>

      <button type="submit" class="btn btn-success w-100">
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
