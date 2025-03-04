import { createClient } from '@supabase/supabase-js';

// @ts-ignore
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

export async function handle({ event, resolve }) {
    const sessionId = event.cookies.get('session'); // Ambil session dari cookies

    if (sessionId) {
        // Ambil user berdasarkan ID dari database
        const { data: user, error } = await supabase
            .from('learn-svelte-users')
            .select('*')
            .eq('id', sessionId)
            .single();

        console.log('User fetched in hooks:', user, error);

        if (user) {
            event.locals.user = user; // Simpan user lengkap di locals
        }
    } else {
        event.locals.user = null;
    }

    const response = await resolve(event);
    return response;
}
