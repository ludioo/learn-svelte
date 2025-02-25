<script lang="ts">
    // @ts-nocheck
    export let links: { href: string; label: string }[] = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/counter', label: 'Counter' },
        { href: '/postlist', label: 'Post List' }
    ]; // Default menu, bisa diubah jika diperlukan
</script>

<nav class="mb-5 flex gap-4">
    {#each links as link}
        <a href={link.href} class="px-10 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
            {link.label}
        </a>
    {/each}
</nav>
