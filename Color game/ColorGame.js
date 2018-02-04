
/*
var colors = [
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(0, 255, 255)",
"rgb(255, 0, 255)",
"rgb(0, 255, 0)",
"rgb(0, 0, 255)"
]
*/
//create a function that takes a number
//and generate n numbers of random colors in the array
var numberOfSquare = 6;
var colors = generateRandomColors(numberOfSquare);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var RGBVal = document.querySelector("#RGBVal");
var header = document.querySelector(".head");

var messageDisplay = document.querySelector("#message");

var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");

RGBVal.textContent = pickedColor;

resetButton.addEventListener("click", function(){

	colors = generateRandomColors(6);
	pickedColor = pickColor();
	RGBVal.textContent = pickedColor;

	messageDisplay.textContent = "";
	this.textContent = "New Colors"

	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	header.style.backgroundColor = "steelblue";
})

easyButton.addEventListener("click", function(){
	this.classList.add("selected");
	hardButton.classList.remove("selected");
	numberOfSquare = 3;
    colors = generateRandomColors(numberOfSquare);
	pickedColor = pickColor();
	RGBVal.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}	
	}
})

hardButton.addEventListener("click", function(){
	this.classList.add("selected");
	easyButton.classList.remove("selected");
	numberOfSquare = 6;
	colors = generateRandomColors(numberOfSquare);
	pickedColor = pickColor();
	RGBVal.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";		
		
	}
})

for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor);
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	})
}

function changeColors(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
	header.style.backgroundColor = color;
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length); // give integers 1-6    
	return colors[random];
}    

function generateRandomColors(n){
	//make an array
	var arr = [];
	//add n random colors to the array
	for (var i = 0; i < n; i++) {
		arr.push(randomColor());
	}
	//return the array at the end
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb("+ r + ", "+ g + ", "+ b +")";
}
