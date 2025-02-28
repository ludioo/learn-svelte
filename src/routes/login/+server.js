import { json } from '@sveltejs/kit';

export async function POST({ request, cookies }) {
    const { username, password } = await request.json();

    // Simulasi penyimpanan username & password di server
    const storedUser = { username: 'admin', password: '123456' };

    if (username === storedUser.username && password === storedUser.password) {
        // Simpan session di cookies dengan konfigurasi yang benar
        cookies.set('session', JSON.stringify({ username }), { 
            path: '/', 
            httpOnly: false,  // Untuk debugging, bisa diakses frontend
            secure: false,     // Set false untuk development, true jika di HTTPS
            sameSite: 'lax',   // Pastikan dikirim di request normal
            maxAge: 60 * 60 * 24 // 1 hari
        });

        console.log("Session Set in Cookies:", JSON.stringify({ username })); // Debugging

        return json({ success: true });
    }

    return json({ success: false });
}
