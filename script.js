'use strict';

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




function calc(num1, operation, num2) {
	const isNotValid = (typeof num1 !== 'number') || (typeof num2 !== 'number') || operation === '';
	if (isNotValid) {
		return 'error';
	} else if (operation === '+') {
		return +num1 + +num2;
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

console.log(calc(5, '-', 4));