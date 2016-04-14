//loop through all the reindeer in the array. Add reindeer to <div id=reindeer> prepend reindeer with corresponding color.


var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
// weird if else statement compares lengths. 
var loopCount = colors.length < reindeer.length ? colors.length: reindeer.length; 
var hohohoElement = document.getElementById("reindeer");

var currentColor = " ";
var currentReindeer = " ";

for (var i = 0; i < loopCount; i++) {
	currentColor = colors[i];
	currentReindeer = reindeer[i];
	hohohoElement.innerHTML += "<div>" + currentColor + " " + currentReindeer + "</div>"
}