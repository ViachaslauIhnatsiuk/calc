'use strict';

// 'Калькулятор на prompt и alert'

/* function calc(num1, operation, num2) {
	num1 = +prompt('Введите первое значение');
	operation = prompt('Выберите действие: сложение (+), вычитание (-), умножение(*), деление(/), возведение в степень(**)');
	num2 = +prompt('Введите второе значение');
	const isNotValid = (typeof num1 !== 'number') || (typeof num2 !== 'number') || operation === '' || operation === 'string';
	if (isNotValid) {
		alert('error');
	} else if (operation === '+') {
		return alert(num1 + num2);
	} else if (operation === '-') {
		return alert(num1 - num2);
	} else if (operation === '*') {
		return alert(num1 * num2);
	} else if (operation === '/') {
		return alert(num1 / num2);
	} else if (operation === '**') {
		return alert(num1 ** num2);
	}
};

const start = document.getElementById('start');

start.addEventListener('click', calc); */


// 'Калькулятор для консоли'


/* function calc(num1, operation, num2) {
	const isNotValid = (typeof num1 !== 'number') || (typeof num2 !== 'number') || operation === '';
	if (isNotValid) {
		return 'error';
	} else if (operation === '+') {
		return num1 + num2;
	} else if (operation === '-') {
		return num1 - num2;
	} else if (operation === '*') {
		return num1 * num2;
	} else if (operation === '/') {
		return num1 / num2;
	} else if (operation === '**') {
		return num1 ** num2;
	} else if (operation === '%') {
		return num1 % num2;
	} else {
		return 'unknown operation';
	}
};

console.log(calc(5, '+', 6)); */


// 'Калькулятор на switch case'

/* function calc(num1, operation, num2) {
	const isNotValid = (typeof num1 !== 'number') || (typeof num2 !== 'number') || operation === '';
	if (isNotValid) return 'error';
	switch (operation) {
		case '+':
			return num1 + num2;
		case '-':
			return num1 - num2;
		case '*':
			return num1 * num2;
		case '/':
			return num1 / num2;
		case '**':
			return num1 ** num2;
		case '%':
			return num1 % num2;
		default:
			return 'unknown operation';
	}
};

console.log(calc(6, '**', 5)); */



// 'Калькулятор на objects'

function calc(num1, operation, num2) {
	const isNotValid = (typeof num1 !== 'number') || (typeof num2 !== 'number') || operation === '';
	let operations = {
		sum: num1 + num2,
		sub: num1 - num2,
		mult: num1 * num2,
		div: num1 / num2,
	}
	if (isNotValid) {
		return 'error';
	} else if (operation in operations) {
		return operations[operation];
	} else {
		return 'unknown operation';
	}
};

console.log(calc(6, 'div', 5));