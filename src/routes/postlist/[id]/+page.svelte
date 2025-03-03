<script lang="ts">
	// @ts-nocheck
	import Nav from '$lib/nav.svelte';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { page } from '$app/stores';

	let post: { id: number; title: string; body: string } | null = null;

	// Ambil ID dari URL
	let id = get(page).params.id;

	// Mengambil data dari API backend kita sendiri
	async function fetchPost() {
		const res = await fetch(`/api/posts?id=${id}`);
		if (res.ok) {
			post = await res.json();
		} else {
			post = null; // Jika tidak ditemukan
			console.error('Post not found:', id);
		}
	}
	onMount(fetchPost);
</script>

<Nav />

<div class="bg-slate-500 text-white p-6 rounded-lg shadow-lg">
	<h1 class="text-3xl font-bold mb-4">Post Detail</h1>

	{#if post}
		<div class="p-4 bg-black border rounded-lg shadow-md">
			<h2 class="text-lg font-semibold">{post.title}</h2>
			<p class="text-white-600">{post.body}</p>
		</div>
	{:else}
		<p class="text-red-400">⚠ Post not found!</p>
	{/if}

	<a href="/postlist" class="mt-4 inline-block text-white-400 hover:underline">⬅ Back to Posts</a>
</div>
