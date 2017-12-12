console.log("PRINT NUMBERS BETWEEN -10 AND 19");
// var num = -10;

// while (num < 20) {
//     console.log(num)
//     num++;
// }

for (var i = -10; i < 20; i++) {
	console.log(i);
}

console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40");
// var num2 = 10;

// while (num2 <= 40) {
//     if (num2 % 2 === 0) {
//         console.log(num2);
//     }
//         num2++;
// }
for (var i = 10; i <= 40; i+=2) {
	console.log(i)
}

console.log("ALL ODD NUMBERS BETWEEN 300 AND 333");
// var num3 = 300;

// while (num3 <= 333) {
// 	if (num3 % 2 === 1) {
// 		console.log(num3)
// 	}
// 	num3++;
// }
for(var i = 300; i <= 333; i++){
	if (i % 2 === 1) {
		console.log(i);
	}
}

console.log("PRINT ALL NUMBER DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 5O");
// var num4 = 5;

// while (num4 <= 50) {
// 	if (num4 % 5 === 0 && num4 % 3 === 0) {
// 		console.log(num4);
// 	}
// 	num4++;
// }
for (var i = 5; i <= 50; i++){
	if (i % 5 === 0 && i % 3 === 0) {
		console.log(i)
	}
}