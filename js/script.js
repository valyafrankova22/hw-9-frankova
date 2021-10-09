// Task #1
const x = 10;
const y = 7;

result = (x > y) ? alert(`x больше, чем  y`) : alert(`x не больше, чем y`);


//Task #2
const num = +prompt(`Введите число`);
if(num % 2 === 0) {
    alert(`Число ${num} четное`);
} else {
    alert(`Число ${num} не четное`);
}



//Task #3
const userNum = prompt(`Введите целое число`);
if (Math.sign(+userNum) === 1) {
    alert (userNum.length + `символов в вашем числе` + `\n` + `Число ${userNum} однозначно положительное`);
} else {
    alert (userNum.length + `символов в вашем числе` + `\n` + `Число ${userNum} однозначно отрицательное`);
}



// Task #4
const num1 = +prompt(`Введите первое число`);
const num2 = +prompt(`Введите второе число`);
const num3 = +prompt(`Введите третье число`);

if (num1 > num2 && num1 > num3) {
    alert (`Наибольшее число - ${num1}`);
} else if (num2 > num1 && num2 > num3) {
    alert (`Наибольшее число - ${num2}`);
} else if (num3 > num1 && num3 > num2) {
    alert (`Наибольшее число - ${num3}`);
}




// Task #5
const side1 = +prompt(`Введите первое число`);
const side2 = +prompt(`Введите второе число`);
const side3 = +prompt(`Введите третье число`);

if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
    alert(`Такой треугольник существует`);
} else {
    alert(`Треугольника не существует`);
}


