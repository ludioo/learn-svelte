import { redirect } from '@sveltejs/kit';

export function load({ locals, url }) {
    // Izinkan akses ke halaman login tanpa perlu login
    if (url.pathname === '/login') return;

    // Jika tidak ada user (belum login), redirect ke login
    if (!locals.user) {
        throw redirect(302, '/login');
    }

    return { user: locals.user };
}