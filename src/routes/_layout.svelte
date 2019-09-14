<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<main class="flex flex-col h-screen">
	<Nav {segment}/>
	<section class="flex-1 overflow-auto">
		<slot></slot>
	</section>
</main>
