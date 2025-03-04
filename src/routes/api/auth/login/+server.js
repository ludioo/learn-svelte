import { json } from '@sveltejs/kit';
import { createClient } from '@supabase/supabase-js';
import bcrypt from 'bcryptjs';

// @ts-ignore
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

export async function POST({ request, cookies }) {
    const { username, password } = await request.json();

    // Cek apakah user ada
    const { data: user, error } = await supabase
        .from('learn-svelte-users')
        .select('*')
        .eq('username', username)
        .single();

    console.log('User found:', user, error);

    if (!user || error) return json({ success: false, error: 'User not found' });

    // Bandingkan password yang di-hash
    const isValid = bcrypt.compareSync(password, user.password);
    console.log('Password match:', isValid);

    if (!isValid) return json({ success: false, error: 'Invalid password' });

    // Simpan session di cookies
    cookies.set('session', user.id, {
        path: '/',
        httpOnly: true,
        secure: false,  // Set `true` jika menggunakan HTTPS
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 // 1 hari
    });

    console.log('Session set in cookies:', cookies.get('session'));

    return json({ success: true, user });
}
