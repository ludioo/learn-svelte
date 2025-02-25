<script lang="ts">
    // @ts-nocheck
    import Nav from '$lib/nav.svelte';
    import Input from '$lib/input.svelte'; // Impor Input Component

    let title = "";
    let body = "";
    let successMessage = "";

    async function submitPost() {
        const res = await fetch('/api/posts', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, body })
        });

        if (res.ok) {
            successMessage = "✅ Post berhasil ditambahkan!";
            title = "";
            body = "";
        } else {
            successMessage = "❌ Gagal menambahkan post!";
        }
    }
</script>

<Nav/>

<div class="bg-zinc-500 text-white p-6 rounded-lg shadow-lg">
    <h1 class="text-3xl font-bold mb-4">Add New Post</h1>

    <a href="/postlist" class="text-white-400 hover:underline text-lg font-semibold">
        ⬅ Back to Post List
    </a>

    <form on:submit|preventDefault={submitPost} class="space-y-4 mt-4">
        <Input bind:value={title} label="Judul:" placeholder="Enter title post..." />
        <Input bind:value={body} label="Isi:" placeholder="Enter body post..." />

        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Add Post
        </button>
    </form>

    {#if successMessage}
        <p class="mt-4 text-green-600">{successMessage}</p>
    {/if}
</div>
