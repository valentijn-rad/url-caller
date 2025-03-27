/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async scheduled(event, env, ctx) {
		console.log("Running task at:", event.scheduledTime);
		const response = await fetch("https://acceleratorsuite-sandbox.mxapps.io/");

		if (response.ok) {
			const data = await response.text();
			console.log("Response from URL fetched");
			const hasResuming = /<p[^>]*>[^<]*resuming[^<]*<\/p>/i.test(data);

			if (hasResuming) {
				console.log("App is resuming.");

			} else {
				console.log("App is running.");

			}
		} else {
			console.error("Failed to fetch URL:", response.status, response.statusText);

		}
	}
};
