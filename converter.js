// In the HTML, have one input field where someone can enter in a temperature.
// Create a radio button group where Celsius or Fahrenheit can be selected as the scale that the number should be converted to.
// Create a block level element that will hold the text of the converted temperature.
// Create a button that, when clicked, displays the converted temperature.
// Create another button that, when clicked, clears any text in the input field.
// Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.
// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// For any other temperature, the color should be green.

console.log('start');

var inputTemp = document.getElementById("inputTemp");
var convertButton = document.getElementById("convert");
var newTemp = document.getElementById("convertedTemp");
// var Cinput = document.getElementById("C");
// var Finput = document.getElementById("F");
var clearButton = document.getElementById("clear");

convertButton.addEventListener("click", function(){
	tempPicker(inputTemp.value);
})

function tempPicker(temp) {
	var Cinput = document.getElementById("C");
	console.log(Cinput)
	var Finput = document.getElementById("F");
	console.log(Finput)
	if (Cinput.checked === false && Finput.checked === false) {
			alert("Choose a temp to convert to...fool")
	} else if (Cinput.checked === true) {
		toCelsius(temp)
	} else if (Finput.checked === true) {
		toFahrenheit(temp)
	}
}
		

function toCelsius (temp) {
	temp = (((temp - 32)*5)/9);
	if (temp < 0) {
		newTemp.style.color = 'blue';
	} else if ( temp > 0 && temp < 32) {
		newTemp.style.color = 'green';
	} else if ( temp > 32) {
		newTemp.style.color = 'red';
	}
	newTemp.innerHTML = temp;

};

function toFahrenheit (temp) {
	temp = ((temp*9)/5)+32;
	if (temp < 32) {
		newTemp.style.color = 'blue';
	} else if (temp > 32 && temp < 90) {
		newTemp.style.color = 'green';
	} else if (temp > 90) {
		newTemp.style.color = 'red';
	}
	newTemp.innerHTML = temp;
}

clearButton.addEventListener("click", function() {
	inputTemp.value = " ";

})

inputTemp.addEventListener("keyup", function(e) {
	if (e.keyCode === 13) {
		tempPicker(inputTemp.value);
			
		}
	});






