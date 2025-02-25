<script>
	// @ts-nocheck

	import Nav from '$lib/nav.svelte';
	import Counter from '$lib/counter.svelte';
	import { count } from '$lib/counterStore.js';
	let tittle = 'Counter Page';
</script>

<Nav/>

<div class="bg-red-500 text-white p-6 rounded-lg shadow-lg">
    <h1 class="text-3xl font-bold mb-4">
		{tittle}
	</h1>
    <Counter/>
</div>