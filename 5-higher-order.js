////////// Every and then som
function every(arr, thing) {
  var flag = true;
	arr.forEach(function(element, i, array) {
    if (!(thing(element))) {	
      flag = false;
		}  
	});
  return flag;
}

function some(arr, thing) {
  var flag = false;
	arr.forEach(function(element, i, array) {
    if ((thing(element))) {	
      flag = true;
		}
	});
  return flag;
}
