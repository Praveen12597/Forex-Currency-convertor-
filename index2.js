function search() {

	let currencyA = document.querySelector("#bcurency").value;
	console.log(currencyA);
	let queryURL = `https://exchangeratesapi.io/api/latest?base=${currencyA}`;

	fetch(queryURL)
		.then(function (response) {
			return response.json();
		})
		.then(function (result) {
			console.log(result);
			convert(result);
		})
		.catch(function (error) {
			alert("Error Message :" + error.message);
		});
}

function convert(result) {
	console.log(result);
} 