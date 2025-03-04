import { redirect } from '@sveltejs/kit';

export function load({ locals, url }) {
    // Izinkan akses ke halaman login dan register tanpa perlu login
    if (url.pathname === '/login' || url.pathname === '/register') return;

    // Jika tidak ada user (belum login), redirect ke login
    if (!locals.user) {
        throw redirect(302, '/login');
    }

    return { user: locals.user };
}
