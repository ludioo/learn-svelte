// @ts-nocheck
import { json } from '@sveltejs/kit';
import { posts } from '$lib/data/posts.js';

// Handle GET /api/posts (Mengambil semua posts) atau /api/posts/:id
export async function GET({ url, params }) {
	const id = params?.id || url.searchParams.get('id');
	// Jika ada ID, cari post berdasarkan ID
	if (id) {
		const post = posts.find((p) => p.id === Number(id));
		if (!post) return json({ error: 'Post not found' }, { status: 404 });
		return json(post);
	}

	// Jika tidak ada ID, kirim semua posts
	return json(posts);
}

// Handle POST /api/posts (Menambahkan post baru)
export async function POST({ request }) {
	const newPost = await request.json();
	newPost.id = posts.length + 1; // ID otomatis bertambah
	posts.push(newPost);

	return json(newPost, { status: 201 });
}

// Handle PUT /api/posts/:id (Mengupdate post berdasarkan ID)
export async function PUT({ url, request }) {
	const id = url.searchParams.get('id');
	if (!id) return json({ error: 'Post ID is required' }, { status: 400 });

	const index = posts.findIndex((p) => p.id === Number(id));
	if (index === -1) return json({ error: 'Post not found' }, { status: 404 });

	const updatedPost = await request.json();
	posts[index] = { ...posts[index], ...updatedPost };

	return json(posts[index]);
}

// Handle DELETE /api/posts/:id (Menghapus post berdasarkan ID)
export async function DELETE({ url }) {
	const id = url.searchParams.get('id');
	if (!id) return json({ error: 'Post ID is required' }, { status: 400 });

	const index = posts.findIndex((p) => p.id === Number(id));
	if (index === -1) return json({ error: 'Post not found' }, { status: 404 });

	const deletedPost = posts.splice(index, 1)[0];

	return json({ message: 'Post deleted successfully', deletedPost });
}
