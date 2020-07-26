<script>
  export let profile;
</script>

<style>
  .card-box {
    width: 30%;
    margin: 10px;
  }
</style>

<div class="card card-box">
  <div class="card-body">

    <h5 class="card-title">

      <a href={`/profile/${profile.user._id}`}>{profile.user.name}</a>

    </h5>
    <p class="card-text">{profile.user.email}</p>
    <p class="card-text">
      <small class="text-muted">
        {profile.bio.length > 150 ? profile.bio
              .substring(0, 150)
              .concat('...') : profile.bio}
      </small>
    </p>
  </div>
</div>
