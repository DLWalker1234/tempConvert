console.log('start');

var inputTemp = document.getElementById("temp");
inputTemp.addEventListener("click", function() {
	console.log("event");
})

function toCelsius () {
	inputTemp = (((inputTemp - 32)*5)/9);
}

function toFahrenheit (inputTemp) {
	inputTemp = ((inputTemp*9)/5)+32;
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent);
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);


