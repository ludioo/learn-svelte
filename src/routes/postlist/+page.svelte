<script lang="ts">
	// @ts-nocheck
	import Nav from '$lib/nav.svelte';
	import { onMount } from 'svelte';

	let posts: { id: number; title: string; body: string }[] = [];

	async function fetchPosts() {
		const res = await fetch('/api/posts');
		posts = await res.json();
	}

    async function deletePost(id) {
        const confirmDelete = confirm("Apakah kamu yakin ingin menghapus post ini?");
        if (!confirmDelete) return;

        const res = await fetch(`/api/posts?id=1`, {
            method: "DELETE"
        });

        if (res.ok) {
            posts = posts.filter(post => post.id !== id); // Hapus post dari frontend tanpa reload
        } else {
            alert("❌ Gagal menghapus post!");
        }
    }
	onMount(fetchPosts);
</script>

<Nav />

<div class="bg-yellow-500 text-white p-6 rounded-lg shadow-lg">
	<h1 class="text-3xl font-bold mb-4">Post List</h1>

	<a href="/postlist/new" class="text-white-400 hover:underline text-lg font-semibold">
		➕ Add Post
	</a>

	{#if posts.length === 0}
		<p class="mt-4">Loading...</p>
	{:else}
		<ul class="space-y-4 mt-4">
			{#each posts as post}
				<li class="p-4 bg-black border rounded-lg shadow-md">
					<a href="/postlist/{post.id}" class="text-blue-400 hover:underline text-lg font-semibold">
						{post.title}
					</a>
					<p class="text-white-600">{post.body}</p>
					<div class="mt-2 flex gap-2">
						<a
							href="/postlist/{post.id}/edit"
							class="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
						>
							✏ Edit
						</a>
						<button
							on:click={() => deletePost(post.id)}
							class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
						>
							🗑 Delete
						</button>
					</div>
				</li>
			{/each}
		</ul>
	{/if}
</div>
