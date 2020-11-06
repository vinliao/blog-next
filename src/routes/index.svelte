<script>
  let posts = ["this is my first post", "this is my second post"];
</script>

<style lang="scss">
  @import "../style/variables";

  .content {
    padding-bottom: 10rem;

    &-title {
      font-size: 5rem;
      font-weight: 700;
    }

    &-date {
      color: $text-color-lightest;
      font-weight: 200;
    }
	}

</style>

<svelte:head>
  <title>Stupid blog</title>
</svelte:head>

{#each posts as post}
  <div class="content">
    <span class="content-date"> 17-02-2006 </span>
    <br />
    <a href="/post" class="content-title"> {post} </a>
    <br />
  </div>
{/each}
