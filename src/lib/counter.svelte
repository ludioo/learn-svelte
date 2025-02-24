<script>
	// @ts-nocheck

	import { count } from '$lib/counterStore.js';
	export let startValue = 0; // Bisa menerima nilai awal dari luar

	count.set(startValue);
</script>

<div class="flex flex-col bg-gray-200 p-6 rounded-lg shadow space-y-4">
	<div class="flex space-x-4">
		<button
			class="bg-red-500 text-white px-4 py-2 rounded"
			on:click={() => count.update((n) => n - 1)}>-</button>
		<button
			class="bg-green-500 text-white px-4 py-2 rounded"
			on:click={() => count.update((n) => n + 1)}>+</button>
	</div>
	<h1 class="text-xl text-blue-700">
		Counter: {$count}
	</h1>
</div>