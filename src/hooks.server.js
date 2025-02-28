import { redirect } from '@sveltejs/kit';

export async function handle({ event, resolve }) {
    const sessionRaw = event.cookies.get('session');

    console.log("Session in hooks (before parsing):", sessionRaw); // Debugging

    if (sessionRaw) {
        try {
            event.locals.user = JSON.parse(sessionRaw);
            console.log("Parsed user in hooks:", event.locals.user); // Debugging
        } catch (error) {
            console.error("Error parsing session in hooks:", error);
            event.locals.user = null;
        }
    } else {
        event.locals.user = null;
    }

    return resolve(event);
}
