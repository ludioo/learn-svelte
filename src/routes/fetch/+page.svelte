<script lang="ts">
	// @ts-nocheck
	import Nav from '$lib/nav.svelte';
	let posts: { id: number; title: string; body: string }[] = [];

	async function fetchPosts() {
		const res = await fetch('https://jsonplaceholder.typicode.com/posts');
		posts = await res.json();
	}
	const menuLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/fetch', label: 'Fetch' }
	];

	fetchPosts();
</script>

<Nav links={menuLinks} />

<div class="bg-yellow-500 text-white p-6 rounded-lg shadow-lg">
	<h1 class="text-3xl font-bold mb-4">Fetched Posts</h1>
	{#if posts.length === 0}
		<p>Loading...</p>
	{:else}
		<ul class="space-y-4">
			{#each posts as post}
				<li class="p-4 bg-black border rounded-lg shadow-md">
					<a href="/fetch/{post.id}" class="text-blue-400 hover:underline text-lg font-semibold">
						{post.title}
					</a>
					<p class="text-white-600">{post.body}</p>
				</li>
			{/each}
		</ul>
	{/if}
</div>
