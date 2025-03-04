import { redirect } from '@sveltejs/kit';

export function load({ locals }) {
    console.log("User session from locals:", locals.user); // Debugging

    if (!locals.user) {
        console.log("User not found, redirecting...");
        throw redirect(302, '/login');
    }

    return { 
        // @ts-ignore
        username: locals.user.username 
    };
}
