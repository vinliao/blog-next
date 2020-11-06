<script>
  import rawPosts from "./posts/*.md";
  let posts = []

  // preprocess post
  for (let i = 0; i < rawPosts.length; i++) {
    const rawPost = rawPosts[i]
    const tempPost = {
      date: new Date(rawPost.metadata.date).toDateString(),
      permalink: `posts/${rawPost.filename.slice(0, rawPost.filename.search('.md'))}`,
      title: rawPost.metadata.title
    } 

    posts.push(tempPost)
  }

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
    <span class="content-date">{post.date}</span>
    <br/>
    <a
      href={post.permalink}
      class="content-title">
      {post.title}
    </a>
    <br />
  </div>
{/each}
