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

		const url = 'https://acceleratorsuite-sandbox.mxapps.io/xas/';
		const options = {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: '{"action":"get_session_data","params":{"hybrid":false,"offline":false,"referrer":null,"profile":"","timezoneoffset":-60,"timezoneId":"Europe/Amsterdam","preferredLanguages":["nl","en-US","en"],"version":2},"profiledata":{"1743160627959-0":21}}'
		};

		try {
			const response = await fetch(url, options);
			const data = await response.json();
			console.log(data);
		} catch (error) {
			console.error(error);
		}

	}
};
