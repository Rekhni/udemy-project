'use strict';

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }

// showThis(3, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//     }
// };

// obj.sum();

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log("Hello! " + this.name);
//     }
// };

// let ivan = new User('Ivan', 33);
// let reha = new User('Reha', 24);
// console.log(ivan);
// ivan.hello();
// console.log(reha);
// reha.hello();

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// };

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//     return this * num;
// };

// const double = count.bind(3);
// console.log(double(3));
// console.log(double(13));


// 1) Обычная функция: this = window, но если use strict - undefined
// 2) Контекст у методов обьекта - сам обьект
// 3) this в конструкторах и классах - это новый экземпляр обьекта
// 4) Ручная привязка this: call, apply, bind

const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//     this.style.backgroundColor = 'green';
// });

btn.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'green';
});



const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this.num);
        };

        say();
    }
};

obj.sayNumber();

const double = a => a * 2;

console.log(double(4));
    





