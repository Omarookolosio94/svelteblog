<script>
  import { onDestroy } from 'svelte';
  import { errorMsg } from '../../stores';

  $: timeout = $errorMsg
    ? setTimeout(() => ($errorMsg = null), 3000)
    : undefined;

  onDestroy(() => clearTimeout(timeout));
</script>

<style>
  .alert-box {
    position: fixed;
    top: 0;
    z-index: 10;
    left: 25%;
  }
</style>

{#if $errorMsg}
  <div class="alert-box col-8 col-md-6">
    {#each $errorMsg.message as alert}
      <p class={`alerts alert-${$errorMsg.type} py-2 my-2 text-center`}>
        {alert.msg}
      </p>
    {/each}
  </div>
{/if}
