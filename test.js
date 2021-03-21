//console.log('hello world ');
//console.error('this is an error test');
//console.warn("this is a warning");
//var a = 10;
//a = 40;
//console.log(a);
//let, const

//const age = 30;
//age = 15;
//console.log(age);


//string , numbers , boolean , undefined
// var name = 'balkis ';
// var number = 14.5;
// var iscold = true;
// var x;
// var z = null;
// console.log(typeof number);


// concatenation
// const age = 30;
// const name = 'Ali';
//console.log('My name is : '+ name + ' i am '+age)

// const hello = `My name is ${name} and i am ${age}`
// console.log(hello)

// const s = 'Hello Weekend';
// console.log(s.length);//property of js
// console.log(s.toLowerCase()); //methode of js
// console.log(s.substring(0,5))
// console.log(s.split(''))
// const c ='selim,jihed,aimen';
// console.log(c.split(','))

// array variables that hold multiple values
// const numbers = new Array(1,2,3,4,5); //creation of array with the constructor
// console.log(numbers);
// const fruits = ['apples','oranges',1,2.2, true ]
// console.log(fruits[3])
// fruits [5]='hello';
// console.log(fruits);
// fruits.push('mangos');
// fruits.unshift('bbcc');
// fruits.pop()
// console.log(fruits)
// console.log(Array.isArray(fruits))

// console.log(fruits.indexOf('oranges')); 

// const person = {
//     firstName:'Selim',
//     age: 30,
//     hobbies: ['music', 'movies','sports'],
//     adress : {
//         street:'50 Main',
//         city : 'Boston',
//         state: 'MA',
//     }
// }
// console.log(person.age)
//destructuring to pull out object properties
// const { firstName , age , adress:{city}} = person
// console.log(firstName)
// we can add a property directly :
// person.email='selim@gmail.com'
// console.log(person)
// Array of object letrals
// const todos = [
//     {
//         id : 1,
//         text: 'take js cours',
//         isCompleted : true
//     },
//     {
//         id : 2,
//         text: 'take React cours',
//         isCompleted : true
//     },
//     {
//         id : 3,
//         text: 'take Node.js cours',
//         isCompleted : false
//     }

// ]
// console.log(todos.length);

// const todosJSON = JSON.stringify(todos);
// console.log(todosJSON);

// FOR LOOP

// for (let i = 0; i<=todos.length; i++){
//     console.log(i);
//     // console.log(`For Loop Number : ${i}`)
// }


// While

// let i = 0;
// while (i<5) {
//     console.log(`For Loop Number : ${i}`)
//     i++
// }
// for (let item of todos) {
//     console.log(item);
// }

// heigh order array methods
// foreach, map, filter
// forEach : just loops through the array
// map : create a new array from an array
// filter : create a new array from an array based on condition

// forEach
// todos.forEach(function (todos){
//     console.log(todo.text);
// }
// )

//MAP
// const todoText = todos.map(function(item) {
//     return item.text;
// })
// console.log(todotext)

// filter
// const todocompleted = todos.filter(function(item){
// return item.isCompleted === true;

// }).map(function (todo){
//     return todo.text;
// })
// console.log(todocompleted);

// conditionals
// simple if/else statement

// let x = 10;
// let z = '10';
// console.log(x == z);

// x=10
// if (x===10){
//     console.log("x is 10")
// }
// else if (x>10){
//     console.log('x is greater then 10')
// }
// else (console.log('x is less then 10 or not a number'))

// Ternary operator / shorthand if statement
// const x = 10;
// const color = x > 10 ? 'red' : 'blue';
// console.log(color);

// switch
// color = 'blue'
// switch (color){
//     case'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is not red or blue')
// }
// const x =4;
// const y = 11;
// if (x>5 || y>10){
//     console.log('x is more then 5 or y is more then 10')
// }


// function
// declaration
// function addnbr(nbr1,nbr2){
//     console.log(nbr1 + nbr2);
// }

// appeler une fct
// addnbr(5,6);
// addnbr(); \\return nan

// arrow functions
// const addNumbers=( num1=1 , num2 = 4) => num1 + num2
// console.log(addNumbers());

// const addNumbers = num1 => num1 + 5;
// console.log(addNumbers(70))



// OOP
// constructor function
// function person(firstName, lastName, dob){
//     this.firstName=firstName;
//     this.lastName = lastName;
//     this.dob = new Date (dob);
//     // we can add amethod or functions to this object

// }
// const person1 = new person('John','Doe','4-3-1980');
// console.log(person1)

// person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear();
//     }
// person.prototype.getFullName = function(){
//     return`${this.firstName} ${this.lastName}`
//     }


// create class with es6
// class person{
//     constructor(firstName, lastName, dob) {
//         this.firstName=firstName;
//         this.lastName = lastName;
//         this.dob = new Date (dob);
//     }
//     getBirthYear(){
//         return this.dob.getFullYear()
//     }
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// const person2 = new person('Balkis', 'Younes','04-04-1994');
// console.log(person2);





// ----------------DOM---------------

// window object is the parent object of the browser
// console.log(window);

// const form = document.getElementById('my-form');
// console.log(form)

// console.log(document.querySelector('.container')); //.class //#id


// Multiple element

// console.log(document.querySelectorAll('.item'))
// console.log(document.getElementsByClassName('.item'))
// console.log(document.getElementsByTagName('div'))

// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));

const ul = document.querySelector('.items')
// ul.remove();
// console.log(ul)
// ul.lastElementChild.remove();
// ul.firstElementChild.remove();
// ul.lastElementChild.textContent='lotfi';
// ul.children[1].innerHTML='selim'

// const btn = document.querySelector('.btn');
// btn.style.backgroundColor='red';


// Create an eventListener
// btn.addEventListener('click',(e)=>{ //Mouseover
//     e.preventDefault()
//     // console.log(e.target); //(e)
//     console.log(e.target.className);
// })

// document.querySelector('#my-form').style.background = '#ccc'

// -----------------------FORM----------------------

const myForm= document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users')
myForm.addEventListener('submit',onSubmit)
function onSubmit(e){
    e.preventDefault();
    // console.log(nameInput.value);
    // console.log(emailInput.value);
    if(nameInput.value ==='' || emailInput.value === ''){
        // alert('Please enter fields');
        msg.innerHTML='Please enter fields';
        msg.classList.add('error');
        setTimeout(()=>msg.remove(),3000);
    }
    else {
        // console.log('Success')
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);
        // clear fields
        nameInput.value = '';
        emailInput.value='';
    }
}


     
