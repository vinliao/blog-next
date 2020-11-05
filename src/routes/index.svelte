<script>
	let posts = ['this is my first post', 'this is my second post']
</script>

<style>
  
  .content {
    padding-bottom: 10rem;
	} 
	
	.content-title {
		font-size: 5rem;
		font-weight: 700;
	}

	.content-date {
		color: hsl(0, 0%, 40%);
		font-weight: 200
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