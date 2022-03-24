export async function getImgs() {
	const url = "https://572e-201-49-245-32.ngrok.io/api/SafeBox";

	// let data = {
	// 	name: "teste",
	// };

	let request = new Request(url, {
		method: "GET",
		// body: JSON.stringify(data),
		headers: new Headers({
			"Content-Type": "application/json; charset=UTF-8",
		}),
	});

	return fetch(request).then(function (response) {
		return response.json();
	});
}
