'use strict';

// touchstart = срабатывает при касании на элемент
// touchmove = при касании на жлемент и потом провести по экрану
// touchend = когда палец перестает касаться экрана
// touchenter = когда палец заходит на какой-то элемент
// touchleave = когда палец покинул пределы элемента
// touchcancel = когда точка соприкосновения больше не регистрируется на экране


window.addEventListener('DOMContentLoaded', () => {
    let box = document.querySelector(".click_me");

    // box.addEventListener('touchstart', (e) => {
    //     e.preventDefault();
    //     console.log("Red box: touchstart");
    //     console.log(e.target); // получает объект с котрым взаимодействуем
    //     console.log(e.touches[0].target); // Получить первый палец
    //     console.log(e.touches); // получает все пальцы которые прикоснулись к поверхности
    //     console.log(e.changedTouches); // получает все пальцы которые прикоснулись к поверхности
    //     console.log(e.targetTouches); // регистритует только те пальцы, которые взаимодействуют только с конкрутным объектом
    // });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log("Red box: " + e.touches[0].pageX); //  Координаты по оси Хе5
    });

    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();
    //     console.log("Red box: touchend");
    // });
});


// РЕГУЛЯРКИ

// Var 1
// new RegExp('pattern', 'flags');
// /pattern/

let ans = "Aa";

let reg = /n/gi;

//console.log(ans.search(reg));// ищет только первое вхождение
//console.log(ans.match(reg)); // возвращает массив со всеми вхождениями
console.log(reg.test(ans)); // Проверка регулярки: true or false

// i = флаг регистра (позволяет найти что-то независимо от регистра)
// g = флаг глобальности (ищем глобально, не только первое вхождение)
// m = флаг многострочности

// \d = все цифры
// \D = искать не число
// \w = все буквы
// \W = искать не буквы
// \s = все пробелы
// \S = искать не пробелы
// \ = экранирующий слэш для спец.символов





let pass = "iijj9j9jr92j";
// /./ = означает, что регулярка будет искать либо заменять все симолы
console.log(pass.replace(/./g, "*"));
console.log("12-34-56".replace(/-/g,":"));





let newStr = "My name is / R2D2";

console.log(newStr.match(/\w\d\w\d/i));
console.log(newStr.match(/\//i));