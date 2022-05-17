// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// function User (id,name,surname,email,phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;

// let user1 = new User('1','anton','ptushkin','pa@gmail.com',228);
// console.log(user1);

// створити пустий масив, наповнити його 10 об'єктами new User(....)
// let user = { }
// user.name = 'anton'
// user ['age'] = 31
// console.log(user);
// function User (name,age){
//     this.name = name;
//     this.age = age;
// }
// let user1 = new User('vasya',32);
// let user2 = new User('olha',32);
// let user3 = new User('va',32);
// let user4 = new User('sya',32);
// let user5 = new User('asya',32);
// let user6 = new User('ya',32);
// let user7 = new User('pusya',32);
// let user8 = new User('nastia',32);
// let user9 = new User('yura',32);
// let user10 = new User('dura',32);
// console.log(user2);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let users = [
//     {name:orko,id:21},
//     {name:lesya,id:22},
//     {name:or,id:46},
//     {name:ko,id:51},
// ]
// usersforEach(function (user))
//     console.log(users);
// }
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Clients {
//     constructor(id, name, surname , email, phone, order) {
//         this.id = id
//         this.name = name
//         this.surname = surname
//         this.email = email
//         this.phone = phone
//         this.order = order
//     }
// }
// const client1 = new Clients(56,'Orko','Orestovych');
// console.log(client1);

// створити пустий масив, наповнити його 10 об'єктами Client

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
//

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// function Car(model, producer, age, maxspeed, power) {
//     this.model = model;
//     this.producer = producer;
//     this.age = age;
//     this.maxspeed = maxspeed;
//     this.power = power;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     };
//     this.info = function () {
//         for (const item in this) {
//             //
//             // console.log(this);
//         }
//         this.increaseMaxSpeed = function (newSpeed) {
//             this.maxspeed += newSpeed
//         }
//         this.changeYear = function (newValue) {
//             this.age = newValue
//         }
//         this.addDriver = function (driver){
//             this.driver = driver;
//
//         }
//     }
// }
//
// let car1 = new Car('c', 'bmw', 32, 220, 2.2)
// console.log(car1);
// car1.drive();
// car1.info()
// console.log(car1.increaseMaxSpeed(50));
// console.log(car1);
// console.log(car1.newvalue(2220));
// console.log(car1.addDriver('vasya'));
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car {
//     constructor(model, producer, age, maxspeed, power) {
//         this.model = model;
//         this.producer = producer;
//         this.age = age;
//         this.maxspeed = maxspeed;
//         this.power = power;
//     }
//
//     info(){
//
// =
//     for(
//
//     const
//     item
//     in
//     this
// ) }
//     //
//     // console.log(this);
// };
// increaseMaxSpeed = (newSpeed)
// {
//     this.maxspeed += newSpeed
// }
// ;
// changeYear = (newValue)
// {
//     this.age = newValue
// }
// ;
// addDriver = (driver)
// {
//     this.driver = driver;
// }
//
// let whitecar = new Car('c', 'merc', 21, 220, 1.6)
// console.log(whitecar);
//
// drive(speed)
// {
//     console.log('${speed}drive ${this.maxspeed}');
// }

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
function popelushka(name,age,size){
    this.name = name;
    this.age = age;
    this.size = size;
}
let p1 = new popelushka('oksa',32,42)
console.log(p1);
function Prince (name,age,findsize){
    this.name = name;
    this.age = age;
    this.findsize = findsize;
}
let newprince = new Prince('vasya',22,36);
let find = (arrCind,prince) => {
    for (const item of arrCind) {
        if (item.size === prince.findsize) {
            return `${item.name}`;
        }
    }
}
console.log(find(p1, newprince));
let cind = p1.find(value => value.size === newprince);
console.log(cind);