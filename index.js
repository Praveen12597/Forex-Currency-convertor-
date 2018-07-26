/*	variable for first form  */
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

/* variables of Second form  FIND RATE */

var choice = "";

var divOutput2 = "";

var test = "";

var x = "";

/*====================================================================================================*/


function func1() {
  
 	 baseCurrency = document.querySelector("#bcurency");
	 anotherCurrency = document.querySelector("#acurency");

	 outputDiv = document.querySelector("#output");

	 A = document.querySelector("#amountA");
	 B = document.querySelector("#amountB");
	 E = document.querySelector("#equal");

	 /*	 for find rate	*/

	 divOutput2 = document.querySelector("#output2");

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

	A.innerHTML = amount + " " + curencyA; //val.rates[curencyB] ;
	E.innerHTML = "=" ;

	// calculating total value after conversion 
	totaAmount = amount * val.rates[curencyB] ;

	B.innerHTML = totaAmount.toFixed(4) + " " + curencyB ;

}

/*======================================================================================================*/

function find() {

	choice = document.querySelector("#curr").value;

	var url = `https://exchangeratesapi.io/api/latest?base=${choice}`;

	fetch(url)
		.then(function(response2) {
			return response2.json();
		})
		.then(function(val2) {
			findRate(val2)
		})
		.catch(function(error2) {
			console.log("Error During fetch: " + error2.message);
			alert("Error During fetch: " + "Please Cheque Your Internet Connection");
		});
}

function findRate(val2) {
	console.log(val2);
	console.log(divOutput2);
	console.log(choice);
	test = val2;

	for (r in val2.rates) {
		//console.log(val2.rates[r]);
	}

	for (a in val2.rates) {
	    
	    console.log(a +" " +test.rates[a]);

	    x += '<div class="well" id="output">  <h1>' + a + ' = ' +val2.rates[a] + '  </h1> </div>';

	}

	 $('#output2').append(x);

}