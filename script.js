'use strict';

function calc(operation, num1, num2) {
	num1 = prompt('Введите первое значение');
	operation = prompt('Выберите действие: сложение (+), вычитание (-), умножение(*), деление(/), возведение в степень(**)');
	num2 = prompt('Введите второе значение');
	if (typeof num1, num2 != 'number' || operation == '') {
		alert('error');
	} else if (operation == '+') {
		return alert(+num1 + +num2);
	} else if (operation == '-') {
		return alert(num1 - num2);
	} else if (operation == '*') {
		return alert(num1 * num2);
	} else if (operation == '/') {
		return alert(num1 / num2);
	} else if (operation == '**') {
		return alert(num1 ** num2);
	}
};

const start = document.getElementById('start');

start.addEventListener('click', function () {
	calc();
})