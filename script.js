
var css = document.querySelector("h3"); 
var color1 = document.querySelector(".color1"); 
var color2 = document.querySelector(".color2"); 
var body = document.getElementById("gradient");  
var randomBtn = document.getElementById("random");


function setGradient ()
{
	 body.style.background = "linear-gradient( to right, " + color1.value + ", " + color2.value+")"; 

	 css.textContent = body.style.background + ";"; 
}

function generateRandomColorNums()
{
	var value1=  Math.floor(Math.random() *(+255 - +0))+ +0;
	var value2=  Math.floor(Math.random() *(+255 - +0))+ +0;
	var value3=  Math.floor(Math.random() *(+255 - +0))+ +0;
}

function rgb1()
{
	return color1.value = rgb(value1, value2, value3); 
}

function rgb2()
{
	return color2.value = rgb(value3, value1, value2); 
}

function randomInput()
{
 body.style.background = "linear-gradient( to right, " + color1.value + ", " + color2.value+")"; 

	 css.textContent = body.style.background + ";"; 	
}

function initialGradient()
{
 css.textContent = "linear-gradient( to right, " + color1.value + ", " + color2.value+")" + ";";   	
}

randomBtn.addEventListener("click",randomInput); 

color1.addEventListener("input", setGradient); 

color2.addEventListener("input", setGradient); 

