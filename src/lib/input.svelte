<script lang="ts">
    // @ts-nocheck
    export let value: string = ""; // Data yang akan di-bind
    export let placeholder: string = "Enter text"; // Placeholder default
    export let label: string = ""; // Label opsional
    export let type: string = "text"; // Default type = text
</script>

<div class="w-full text-left space-y-1">
    {#if label}
        <!-- svelte-ignore a11y_label_has_associated_control -->
        <label class="block text-white-700 font-medium">{label}</label>
    {/if}
    <input
        type={type}
        bind:value
        placeholder={placeholder}
        class="w-full p-3 border border-gray-300 rounded-lg text-white-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 shadow-sm"
    />
</div>
