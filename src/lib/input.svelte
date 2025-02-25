<script lang="ts">
    // @ts-nocheck
    export let value: string = ""; // Data yang akan di-bind
    export let placeholder: string = "Enter text"; // Placeholder default
    export let label: string = ""; // Label opsional
    export let type: string = "text"; // Default type = text
</script>

<div class="mt-4">
    {#if label}
        <!-- svelte-ignore a11y_label_has_associated_control -->
        <label class="block text-white">{label}</label>
    {/if}
    <input
        type={type}
        bind:value
        placeholder={placeholder}
        class="w-full p-2 border border-gray-300 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
</div>
