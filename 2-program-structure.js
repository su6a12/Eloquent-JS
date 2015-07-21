////////////// Loop triangle
function triangle(lines) {
	var line = "";
	for(var i = 1; i <= lines; i++) {
		line += "#";
		console.log(line);
	}
}
triangle(7);

/////////////// FizzBuzz
for(var i = 1; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log("FizzBuzz");
	}
	else if (i % 3 === 0) {
		console.log("Fizz");
	}
	else if (i % 5 === 0) {
		console.log("Buzz");
	}
	else
		console.log(i);
}

///////////// Chess Board
function board(size) {
	var line = "";
	for(var i = 1; i <= size; i++) {
		//even row, start with #
		if (i % 2 !== 0) {
			for(var j = 0; j < size; j+=2) {
				line += "# ";
			}
			console.log(line);
			line = "";
		}
		//odd row, start with space
		else {
			for(var j = 1; j <= size; j+=2) {
				line += " #";
			}
			console.log(line);
			line = "";
		}	
	}
}