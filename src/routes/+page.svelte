<script>
	// @ts-nocheck

	import Nav from '$lib/nav.svelte';
	import Counter from '$lib/counter.svelte';
	import Input from '$lib/input.svelte';
	import { count } from '$lib/counterStore.js';
	let tittle = 'Home Page';
	let name = '';
</script>

<!-- Navigasi -->
<Nav/>

<!-- Judul -->
<div class="bg-blue-500 text-white p-6 rounded-lg shadow-lg space-y-4">
	<h1 class="text-3xl font-bold">
		{tittle}
	</h1>

	<h2 class="text-3xl font-bold">
		Welcome to SvelteKit, {name.toUpperCase()}!
	</h2>
	<!-- Input -->
	<Input bind:value={name} placeholder="Enter your name" />
</div>
