import { json } from '@sveltejs/kit';
import { posts } from '$lib/data/posts.js';

// GET /api/posts/:id -> Mengambil post berdasarkan ID
export async function GET({ params }) {
	const post = posts.find((p) => p.id === Number(params.id));

	if (!post) {
		return json({ error: 'Post not found' }, { status: 404 });
	}

	return json(post);
}

// PUT /api/posts/:id -> Mengupdate post berdasarkan ID
export async function PUT({ params, request }) {
	const index = posts.findIndex((p) => p.id === Number(params.id));

	if (index === -1) {
		return json({ error: 'Post not found' }, { status: 404 });
	}

	const updatedPost = await request.json();
	posts[index] = { ...posts[index], ...updatedPost };

	return json(posts[index]);
}

// DELETE /api/posts/:id -> Menghapus post berdasarkan ID
export async function DELETE({ params }) {
    const index = posts.findIndex(p => p.id === Number(params.id));

    if (index === -1) {
        return json({ error: "Post not found" }, { status: 404 });
    }

    // Hapus post dari array
    const deletedPost = posts.splice(index, 1)[0];

    return json({ message: "Post deleted successfully", deletedPost });
}
