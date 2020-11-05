<script>
	import Nav from '../components/Nav.svelte';
</script>

<style>
	/* main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	} */

	.container {
		max-width: 720px;
		margin: 0 auto;
		padding-top: 2rem;
	}
</style>

<Nav/>

<div class="container">
	<slot></slot>
</div>