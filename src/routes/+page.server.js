import { redirect } from '@sveltejs/kit';

export function load({ locals }) {
    if (locals.user) {
        // Jika user sudah login, redirect ke dashboard
        throw redirect(302, '/dashboard');
    } else {
        // Jika user belum login, redirect ke login page
        throw redirect(302, '/login');
    }
}
