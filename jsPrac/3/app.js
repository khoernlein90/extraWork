console.log("PRINT NUMBERS BETWEEN -10 AND 19");
var num = -10;

while (num < 20) {
    console.log(num)
    num++;
}

console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40");
var num2 = 10;

while (num2 <= 40) {
    if (num2 % 2 === 0) {
        console.log(num2);
    }
        num2++;
}

console.log("ALL ODD NUMBERS BETWEEN 300 AND 333");
var num3 = 300;

while (num3 <= 333) {
	if (num3 % 2 === 1) {
		console.log(num3)
	}
	num3++;
}

console.log("PRINT ALL NUMBER DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 5O");
var num4 = 5;

while (num4 <= 50) {
	if (num4 % 5 === 0 && num4 % 3 === 0) {
		console.log(num4);
	}
	num4++;
}