'use strict';

var lotto;
var html = "";

var getRandomNumber = function(upper) { 
	var num = Math.floor((Math.random() * upper) + 1);
	return num;
	}

for (var i = 0; i < 6;) {
	html += getRandomNumber(50) + " ";
	i += 1;
} 
document.write("<p>Here are 6 numbers between 1 and 50, chosen at random: <h1>" + html + "</h1> Good luck!</p>");