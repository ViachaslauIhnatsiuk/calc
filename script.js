'use strict';

function calc(num1, operation, num2) {
	num1 = +prompt('Введите первое значение');
	operation = prompt('Выберите действие: сложение (+), вычитание (-), умножение(*), деление(/), возведение в степень(**)');
	num2 = +prompt('Введите второе значение');
	if ((typeof num1 != 'number') || (typeof num2 != 'number') || operation == '' || operation == 'string') {
		alert('error');
	} else if (operation == '+') {
		return alert(num1 + num2);
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

