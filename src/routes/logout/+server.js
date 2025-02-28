import { json, redirect } from '@sveltejs/kit';

export async function POST({ cookies }) {
    cookies.delete('session', { path: '/' });
    return json({ success: true });
}
