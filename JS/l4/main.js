// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function calc (a,b){
//     let res = a + b;
//     return res;
// }
// let result = calc (10,20);
// console.log(result);
// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function calc (r){
//     let res = r * r
//     return res
//     }
// let result = calc (3.14);
// console.log(result);
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function calc (h,r){
//     let res = h + r + r
//     return res;
// }
// let result = calc (20,50);
// console.log(result);
// - створити функцію яка приймає масив та виводить кожен його елемент
// let arr = [2,2,8]
// function calc2(array) {
//     for (const item of array) {
//         console.log(item);
//     }
// }
// calc2(arr);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function list (a){
//     document.write(`<p>${a}</p>`);
// }
// list ('okten')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function list (a){
//     document.write(`<ul>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`</ul>`)
// }
// list ('okten')
// list('hola')
// list('epic')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function list(a){
// document.write(`<ul>`);
//     document.write(`<li>${a}</li`);
//     document.write(`<li>${a}</li`);
// document.write(`</ul>`)
// }
// list(`okten`);
// list(`hello`);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let elem = [1,3,'hola',true]
// function iter(hello){
//     document.write(`<ul>`)
//     for (const item of hello) {
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`)
//     }
//     iter(elem)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let arr = [
//     {id:228,
//     name:'vasya',
//     age:2},
//
//     {id:882,
//         name:'lesya',
//         age:4},
// ]
// function obj(hola){
//     for (const item of hola) {
//         document.write(`<div>`${item.id} ${item.name} ${item.age}<`<div>`)
//     }
// }
// obj(arr)

// - створити функцію яка повертає найменьше число з масиву

// let num = [1,3,6,32,235]
// function minnum(array){
//     let min = array[0];
//     for (const item of array) {
//         if (item < min){
//             min = item
//         }
//     }
//     return min
// }
// console.log(minnum(num));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//

// function calc(){
//     let result = 0;
//     for (const item of arguments) {
//         result = result + item;
//     }
// return result; }
// console.log(calc(10,40,50,56));