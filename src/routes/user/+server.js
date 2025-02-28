import { json } from '@sveltejs/kit';

export async function GET({ cookies }) {
    const session = cookies.get('session');

    if (!session) {
        return json({ username: null });
    }

    return json(JSON.parse(session));
}
