<script>
    // @ts-nocheck
	import Nav from '$lib/nav.svelte';
    let title = "About Page";
	// Tambahkan daftar menu navigasi
	const menuLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/fetch', label: 'Fetch' }
	];
</script>

<!-- Kirim props links ke Nav -->
<Nav links={menuLinks} />

<div class="bg-green-500 text-white p-6 rounded-lg shadow-lg">
    <h1 class="text-3xl font-bold">{title}</h1>
    <p class="mt-4">Ini adalah halaman about</p>
  </div>
