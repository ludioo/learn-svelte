<script>
    import { onMount } from 'svelte';
    import Input from '$lib/input.svelte';

    let username = '';
    let password = '';
    let error = '';

    async function login() {
        const res = await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await res.json();
        if (data.success) {
            window.location.href = '/dashboard'; // Redirect ke dashboard
        } else {
            error = 'Login gagal! Periksa username & password.';
        }
    }
</script>

<!-- Container Utama -->
<div class="flex items-center justify-center min-h-screen bg-gradient-to-r from-red-500 to-blue-600">
    <div class="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full text-center space-y-6">
        <!-- Judul -->
        <h2 class="text-3xl font-bold text-gray-800">Login</h2>

        

        <!-- Input Username -->
        <Input bind:value={username} label="Username" placeholder="Enter your username" />

        <!-- Input Password -->
        <Input bind:value={password} type="password" label="Password" placeholder="Enter your password" />

        <!-- Tombol Login -->
        <button 
            on:click={login} 
            class="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
        >
            Login
        </button>
        
        <!-- Notifikasi Error -->
        {#if error}
            <p class="text-red-500 text-sm">{error}</p>
        {/if}
    </div>
</div>
