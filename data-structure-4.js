//#4 Data Structures
/////////////////////// Sum of a range
function range(start, end) {
	var sum = [];
	if (start > end) {
		if (arguments.length > 2) {
			for(var i = start; i >= end; i += arguments[2]) {
				sum.push(i);
			}
		}
		else {
			for(var i = start; i >= end; i += -1) {
				sum.push(i);
		}
	}
}	
else {
	if (arguments.length > 2) {
			for(var i = start; i <= end; i += arguments[2]) {
				sum.push(i);
			}
		}
		else {
			for(var i = start; i <= end; i += 1) {
				sum.push(i);
			}
		}
	}
	return sum;
}

function sum(list) {
	var sum = 0;
	for(var i = 0; i < list.length; i++) {
		sum += list[i];
	}
	return sum;
}

//////////////////// Reversing an array
function reverseArray(arr) {
	var newArr = [];
  	var arrLen = arr.length;
	for(var i = 0; i < arrLen; i++) {
		newArr.push(arr.pop());
	}
	return newArr;
}

function reverseArrayInPlace(arr) {
	var half = Math.floor(arr.length / 2);
	var temp = 0;
	for(var i = 0; i < half; i++) {
		temp = arr[i];
		arr[i] = arr[arr.length-1-i];
      
		arr[arr.length-1-i] = temp;
	}
	return arr;
}

/////////////////////////// A list
function arrayToList(arr) {
  var list = { value: arr[arr.length-1], rest: null };
	for(var i = arr.length - 2; i >= 0; i--) {
      list = { value: arr[i], rest: list };
	}
  return list;
}

function listToArray(list) {
	var arrList = [];
	arrList.push(list.value);
  	//console.log(arrList, typeof list);
	while(list.rest !== null) {
		arrList.push(list.rest.value);
		list = list.rest;
	}
	return arrList;
}

function prepend(value, rest) {
	return { value: value, rest: rest };
}

function nth(list, index) {
	var i = 0;
	var currentList = list;
	while(i < index) {
		currentList = currentList.rest;
		i++;
	}
	return currentList.value;
}

/////////////////// Deep comparison
function deepEqual(first, second) {
	
}














