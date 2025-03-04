import { json } from '@sveltejs/kit';
import 'dotenv/config';

export async function POST({ cookies }) {
    cookies.set('session', '', {
        path: '/',
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
        maxAge: 0
    });

    return json({ success: true });
}
