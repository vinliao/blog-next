<script>
	import Nav from '../components/Nav.svelte';
</script>

<style lang="scss">
	@import '../style/variables';

	.container {
		max-width: $max-width;
		margin: 0 auto;
		padding-top: 2rem;
	}
</style>

<Nav/>

<div class="container">
	<slot></slot>
</div>