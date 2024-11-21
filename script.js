"use strict";

let num = 20; // глобальная переменная

function showFirstMessage(text) {
    console.log(text);
    let num = 10; // локальная переменная
    console.log(num);
}

showFirstMessage("Hello World!");
console.log(num);

function calc(a, b) {
    return (a + b); // возвращает переменные a , b
}

console.log(calc(4, 3));
// выводит итоговый ответ в консоль
console.log(calc(5, 6));
// выводит итоговый ответ в консоль
console.log(calc(10, 6));
// выводит итоговый ответ в консоль

function ret() {
    let num = 50;

    // 


    return num; // возвращает значение num

}



const anotherNum = ret();
console.log(anotherNum);

// Классификация Функций

const logger = function() {
    console.log("Hello");
};

logger(); // вызывает функцию


/* const calc = (a, b) => a + b ; */

// Стрелочная функция
const calc = (a, b) => {
    console.log('1');
    return a + b;
};

// Принцип DRY-Don't repeat YourSelf
// Принцип Не повторять свой код

const usdCurr = 28; // курс доллара
const eurCurr = 32; // курс евро
function convert (amount, curr) { //функция с переменными
    console.log(curr * amount);  // курс + сумма 
    // сокращаем переменную usdCurr-eurCurr для большей универсальности
    // выводит определенную сумму исходя из переменной usdCurr = 28; все что напишет пользователь идет в amount и лишь потом пересчитывается
} 

convert(500, usdCurr); // 500 * по курсу доллара
// здесь понадобится изменить переменную на полное ее имя

convert(500, eurCurr); // 500 * по курсу евро
// здесь понадобится изменить переменную на полное ее имя


// const usdCurr = 28; // курс доллара
// const discount = 0.9; // скидка

// function convert(amount, curr) {
//     return curr * amount;
// }

// function promotion(result) {
//     console.log(result * discount);
// }

// promotion(convert(500, usdCurr));

// // промежуточная переменная

// const res = convert(500, usdCurr); 500 
// promotion(res); 

// получится тот же результат со скидкой
// тк идет вложение переменной res в функцию promotion, которая изначально содержит скидку



//Функции с ключевым словом return

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return
    }
    console.log('done')
}

test(); // вызывает функцию

