// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = ['hello world', 'lorem ipsum', 'javascript is cool'];
// console.log(str.length);
// console.log(str[0]);
// console.log(str[1]);
// console.log(str[2]);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let h = 'hello world';
// console.log(h.toUpperCase());
// let l = 'lorem ipsum'
// console.log(l.toUpperCase());
// let j = 'javascript is cool'
// console.log(j.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let h = 'HELLO WORLD';
// console.log(h.toLowerCase());
// let l = 'LOREM IPSUM'
// console.log(l.toLowerCase());
// let j = 'JAVASCRIPT IS COOL'
// console.log(j.toLowerCase());

// let rr = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL']
// console.log(rr.toLowerCase);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// let trim = str.trim();
// console.log(trim);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let arr = 'Ревуть воли як ясла повні';
// let split = arr.split(' ');
// console.log(split);
// ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let numbers = [10,8,-7,55,987,-1011,0,1050,0];
// console.log(numbers.map(value => value.toString()));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// console.log(sortNums.sort((ascending,descending) = => ascending - descending));

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// console.log(coursesAndDurationArray.sort((title,monthDuraction) => title - monthDuraction));
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// console.log(coursesAndDurationArray.filter(value => value.monthDuration > 4));

// описати колоду карт
// let cards = ['spade', 'diamond','heart', 'clubs'];
// ]
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'