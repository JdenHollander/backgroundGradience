var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

var button = document.getElementById("enter");

//color input matches generated background color - on first page load
body.style.background ="linear-gradient(to right, "+ color1.value + ", " + color2.value + ")";
//display linear gradient property - on page load
css.textContent = body.style.background + ";"

function setGradient(){
body.style.background = 
"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	//adds text content
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

//Add button which genertes 2 random numbers for color input
button.addEventListener("click", addListAfterClick);

function addListAfterClick(){
	color1.value = "#" + Math.floor(Math.random()*16777215).toString(16);
	color2.value = "#" + Math.floor(Math.random()*16777215).toString(16);
	setGradient();
}