<script lang="ts">
    // @ts-nocheck
    import Nav from '$lib/nav.svelte';
    import Input from '$lib/input.svelte';
    import { onMount } from 'svelte';
    import { page } from '$app/stores';

    let post = { title: '', body: '' };
    let successMessage = '';

    // Ambil ID dari URL
    let id = $page.params.id;

    async function fetchPost() {
        const res = await fetch(`/api/posts/${id}`);
        if (res.ok) {
            post = await res.json();
        } else {
            post = { title: '', body: '' }; // Reset jika tidak ditemukan
        }
    }

    async function updatePost() {
        const res = await fetch(`/api/posts/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(post)
        });

        if (res.ok) {
            successMessage = "✅ Post berhasil diperbarui!";
        } else {
            successMessage = "❌ Gagal memperbarui post!";
        }
    }

    onMount(fetchPost);
</script>

<Nav />

<div class="bg-stone-500 text-white p-6 rounded-lg shadow-lg">
    <h1 class="text-3xl font-bold mb-4">Edit Post</h1>

    <form on:submit|preventDefault={updatePost} class="space-y-4 mt-4">
        <Input bind:value={post.title} label="Judul:" placeholder="Enter title post..." />
        <Input bind:value={post.body} label="Isi:" placeholder="Enter body post..." />
        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Simpan Perubahan
        </button>
    </form>

    {#if successMessage}
        <p class="mt-4 text-white">{successMessage}</p>
    {/if}

    <a href="/postlist" class="mt-4 inline-block text-white hover:underline">⬅ Back to Post List</a>
</div>
