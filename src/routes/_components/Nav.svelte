<style>
  .link-text {
    color: #111;
  }

  .link-text:hover {
    color: #fff;
  }

  .navigation {
    display: flex;
    flex-direction: row;
  }
</style>

<nav class="navbar navbar-success bg-success p-2">
  <div class="container">
    <a class="navbar-brand " href="/">
      <img src="arlogo.svg" alt="airview" />
    </a>

    <ul class="navbar-nav navigation">
      <li class="nav-item active">
        <a class="nav-link link-text" href="/">
          <i class="fal fa-home" />
          Home
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link link-text" href="/article">Articles</a>
      </li>
      <li class="nav-item">
        <a class="nav-link link-text" href="/profile">Profiles</a>
      </li>

      <li class="nav-item active">
        <a class="nav-link link-text" href="/register">
          <i class="fal fa-user-plus" />
          Register
        </a>
      </li>
      <li class="nav-item active">
        <a class="nav-link link-text" href="/login">
          <i class="fal fa-sign-in-alt" />
          Login
        </a>
      </li>
    </ul>
  </div>

</nav>
