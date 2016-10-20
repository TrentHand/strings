//global variables
var textInput = document.getElementById("textInput");
var submitBTN = document.getElementById("submitBTN");
var results = document.getElementById("results");

var testString = "";


// Implement the logic in the reversal function that reverses the order of the characters in the string, and outputs the result in the DOM, below the text input. ******THIS IS MY LAST PIECE!!!*****
function reversal(textInput) {
	var reversedOrder = textInput.split("").reverse().join("");
	DOMprint(reversedOrder);
}

// Implement the logic in the alphabits function that return the characters in alphabetical order, and outputs the result in the DOM, below the text input.
function alphabits(textInput) {
	var sortedText = textInput.split("").sort().join("");
	DOMprint(sortedText);
}
// Implement the logic in the palindrome function that determine whether the string is a palindrome(a word that is spelled the same forward or backwards, i.e. madam, bob). If it is, display the text "Your string is a palidrome" in the DOM, below the text input.
function palindrome(testString) {
	if (testString === testString.split("").reverse().join("")) {
		results.innerHTML += "Your string is a palindrome!";
	}

}

// When the user presses the enter key in the text input, or clicks the button, set the value of the testString variable (see below) to the value of the input.
// The output of each of the functions should immediately appear as well.



submitBTN.addEventListener("click", function(event) {
	event.preventDefault();
	testString = textInput.value;

	if (testString.match(/^[A-Za-z]+$/)){
		allCall();
	}
	else {
		alert("please only use alphabetical letters");
	}
});

//function to send the result to the DOM
function DOMprint(finalResult) {
	results.innerHTML += "<div>The solution is: " + finalResult + "</div>";
}

// function to call all functions when user submits
function allCall () {
	results.innerHTML = "";//clears the text in the DOM from previous function
	reversal(testString);//calls reversal function with testString as the argument
	alphabits(testString);
	palindrome(testString);
}