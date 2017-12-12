// var array = [1,2,3,4,5];
// var array = ["hi", "bye", "zebra", "alpha"]
// var array = [1,1,1,1]
// var array = [1,2,3,4]

function printReverse (){
	for (var i = array.length; i >= 0; i--) {
		console.log(array[i])
	}
}

function isUniform(arr){
	var first = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] !== first){
			return false;
		}
	}
	return true;	
}

function sumArray (arr){
	var total = 0;
	arr.forEach(function(element){
		total += element;
	})
	return total;
}

function max(arr){
	var max = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] > max){
			max = arr[i];
		}
	}
	return max;
}
// function isEven (x){
// 	var num = x % 2;
// 	if (num === 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// ANOTHER WAY TO WRITE SAME FUNCTION

// function isEven (num){
//  	return num % 2 === 0;
//  }


// function factorial (num) {
// 	var result = 1;
// 	for (var i = 2; i <= num ; i++) {
// 		result *= i;
// 	}
// 	return result;
// }

// function kebabToSnake(str){
// 	// replace all dashes with underscores
// 	var newStr = str.replace(/-/g, "_");
// 	return newStr;
// 	//return str
// }

// var colors = ["red", "blue", "green"]
// colors.forEach(function(data){
// 	console.log(data)
// })

// var numbers = [1,2,3,4,5,6,7,8,9,10];
// for (var i = 0; i < numbers.length ; i++) {
// 	if(i % 3 === 0) {
// 		console.log(i);
// 	}
// }