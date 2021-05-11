import { startWs } from '$lib/wsServer'

startWs();

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ request, render }) {

    return await render(request);

}