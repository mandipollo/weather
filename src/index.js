async function weather() {
	try {
		const response = fetch(
			`http://api.openweathermap.org/geo/1.0/direct?q=london&limit=5&appid=ea5ba8fd632beca25e48c8a8ffcbb062`
		);
		const data = await (await response).json();
		console.log(data);
	} catch {
		err => console.log(err);
	}
}

weather();
