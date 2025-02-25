<script>
// @ts-nocheck

	import '../app.css'; // ✅ Import Tailwind styles
	import Nav from '$lib/nav.svelte';
</script>

<div class="min-h-screen bg-gray-100">
	<main class="container mx-auto p-6">
		<slot />
	</main>
</div>
