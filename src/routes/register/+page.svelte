<script>
    import { onMount } from 'svelte';
    import Input from '$lib/input.svelte';

    let username = '';
    let password = '';
    let error = '';
    let success = '';

    async function register() {
    const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    const data = await res.json();

    if (data.success) {
        success = "Registration successful! Redirecting to login...";
        setTimeout(() => window.location.href = "/login", 2000);
    } else {
        error = "Registration failed: " + (data.error || "Unknown error");
    }
}
</script>

<div class="flex items-center justify-center min-h-screen bg-gradient-to-r from-red-500 to-blue-600">
    <div class="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full text-center space-y-6">
        <h2 class="text-3xl font-bold text-gray-800">Register</h2>

        <Input bind:value={username} label="Username" placeholder="Enter your username" />
        <Input bind:value={password} type="password" label="Password" placeholder="Enter your password" />

        <button 
            on:click={register} 
            class="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200"
        >
            Register
        </button>

        <p>Already have an account? <a href="/login">Login here</a></p>

        {#if error}
            <p class="text-red-500 text-sm">{error}</p>
        {/if}

        {#if success}
            <p class="text-green-500 text-sm">{success}</p>
        {/if}
    </div>
</div>
