import { json } from '@sveltejs/kit';
import { posts } from '$lib/data/posts.js'; // ✅ Pastikan jalur ini benar

// Handle GET request (Mengambil semua posts)
export async function GET() {
    return json(posts);
}

// Handle POST request (Menambahkan post baru)
export async function POST({ request }) {
    const newPost = await request.json();
    newPost.id = posts.length + 1; // ID otomatis bertambah
    posts.push(newPost);

    return json(newPost, { status: 201 });
}
