<script lang="ts">
    // @ts-nocheck
    export let value: string = ""; // Pastikan value bertipe string
    export let placeholder: string = "Enter text"; // Tentukan placeholder sebagai string
</script>

<input
    bind:value
    placeholder={placeholder}
    class="mt-4 p-2 border border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
/>
