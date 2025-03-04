import { json } from '@sveltejs/kit';
import { createClient } from '@supabase/supabase-js';
import bcrypt from 'bcryptjs';
import 'dotenv/config';

// Buat Supabase Client dengan Service Role
// @ts-ignore
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

export async function POST({ request }) {
    const { username, password } = await request.json();

    // Cek apakah username sudah digunakan
    const { data: existingUser, error: userError } = await supabase
        .from('learn-svelte-users')
        .select('id')
        .eq('username', username)
        .single();

    if (existingUser) return json({ success: false, error: 'Username already exists' });

    // Hash password sebelum disimpan
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Simpan user baru di tabel custom `users`
    const { data, error } = await supabase
        .from('learn-svelte-users')
        .insert([{ username, password: hashedPassword }])
        .select();

    if (error) return json({ success: false, error: error.message });

    return json({ success: true, user: data });
}
