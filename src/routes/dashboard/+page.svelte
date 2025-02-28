<script>
    import Nav from '$lib/nav.svelte';

    export let data;
    console.log("Received data in frontend:", data); // Debugging

    let username = data?.username ?? 'Unknown';
    console.log('Final username in frontend:', username); // Debugging

    async function logout() {
        await fetch('/logout', { method: 'POST' });
        window.location.href = '/login';
    }
</script>

<!-- Navbar -->
<Nav />

<div class="absolute top-4 right-6 bg-white shadow-md px-4 py-2 rounded-lg text-gray-800 font-semibold">
    Welcome, {username}!
</div>

<div class="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
    <div class="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center space-y-6">
        <!-- Info -->
        <p class="text-gray-600">You are now logged in to the dashboard.</p>

        <!-- Tombol Logout -->
        <button 
            on:click={logout} 
            class="w-full bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition duration-200"
        >
            Logout
        </button>
    </div>
</div>
