<script lang="ts">
    // @ts-nocheck
    import Nav from '$lib/nav.svelte';
    import { onMount } from 'svelte';
    import { page } from '$app/stores';

    let post: { id: number; title: string; body: string } | null = null;

    // Ambil ID dari URL
    let id = $page.params.id;

    async function fetchPost() {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        post = await res.json();
    }

    const menuLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/fetch', label: 'Fetch' }
	];

    onMount(fetchPost);
</script>

<Nav links={menuLinks} />

<h1 class="text-2xl font-bold text-gray-800 mb-4">Post Detail</h1>

{#if post}
    <div class="p-4 border rounded-lg shadow-md">
        <h2 class="text-lg font-semibold">{post.title}</h2>
        <p class="text-gray-600">{post.body}</p>
    </div>
{:else}
    <p>Loading...</p>
{/if}
