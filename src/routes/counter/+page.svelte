<script>
	// @ts-nocheck

	import Nav from '$lib/nav.svelte';
	import Counter from '$lib/counter.svelte';
	import { count } from '$lib/counterStore.js';
	let tittle = 'Counter Page';
	const menuLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/counter', label: 'Counter' },
		{ href: '/fetch', label: 'Fetch' }
	];
</script>

<Nav links={menuLinks} />

<div class="bg-red-500 text-white p-6 rounded-lg shadow-lg space-y-4">
    <h1 class="text-3xl font-bold">
		{tittle}
	</h1>
    <Counter/>
</div>