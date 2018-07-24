var baseCurrency = "";
var anotherCurrency = "";
var amount = "";

var outputDiv = "";

var curencyA = "";
var curencyB = "";

var A = "";
var B = "";
var E = "";

var totaAmount = "";

function func1() {
  
 	 baseCurrency = document.querySelector("#bcurency");
	 anotherCurrency = document.querySelector("#acurency");

	 outputDiv = document.querySelector("#output");

	 A = document.querySelector("#amountA");
	 B = document.querySelector("#amountB");
	 E = document.querySelector("#equal");

}
window.onload=func1;



function search() {

	curencyA = baseCurrency.value;
	amount = document.querySelector("#ammount").value;

	var url = `https://exchangeratesapi.io/api/latest?base=${curencyA}`;
	// alert(curencyA);

	fetch(url)
		.then(function(response) {
			return response.json();
		})
		.then(function(val) {
			convert(val)
		})
		.catch(function(error) {
			console.log("Error During fetch: " + error.message);
			alert("Error During fetch: " + "Please Cheque Your Internet Connection");
		});
}

function convert(val) {

	curencyB = anotherCurrency.value;

	//alert(curencyB);
	//alert(curencyA);

	// Adding a class to div
	outputDiv.classList.add("well");

	console.log(amount);

	A.innerHTML = amount + " " + baseCurrency.value; //val.rates[curencyB] ;
	E.innerHTML = "=" ;

	// calculating total value after conversion 
	totaAmount = amount * val.rates[curencyB] ;

	B.innerHTML = totaAmount.toFixed(4); + " " + anotherCurrency.value ;

}