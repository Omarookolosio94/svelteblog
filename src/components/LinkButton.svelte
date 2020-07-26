<script>
  export let tagname;
  export let icon;
  export let pathto;
</script>

<style>
  a.nohover {
    text-decoration: none;
  }
</style>

<a href={pathto} class=" btn btn-success my-2 nohover">
  <i class={`fal fa-${icon}`} />
  <span>{tagname}</span>
</a>
