//////////////// Minimum
function min(first, second) {
	return Math.min(first, second);
}

///////////////// Recursion
function isEven(value) {
	if (value === 0) {
		return true;
	}
	else if (value % 2 === 0) {
		return true;
	}
	else if (value < 0) {
		return false;
	}
	else {
		return false;
	}
}

/////////////// Bean counting
function countBs(someStr) {
	var count = 0;
	for(var i = 0; i < someStr.length; i++) {
		if (someStr[i] === "B") {
			count += 1;
		}
	}
	return count;
}

function countChar(someStr, letter) {
	var count = 0;
		for(var i = 0; i < someStr.length; i++) {
		if (someStr[i] === letter) {
			count += 1;
		}
	}
	return count;
}
