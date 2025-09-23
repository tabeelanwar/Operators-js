// Arithmetic Operators

// var a = 3
// var b = 5
// var c = 2
// var x = (a + b) / c
// console.log(x);

// var f = 2
// var d = 5
// var g = 10
// var q = (g / f) - d
// console.log(q);

// var h = 4
// var u = 2
// var p = 8
// var m = (p - - h) / u
// console.log(m);

// var l = 4
// var r = 5
// var t = (l + r) * (r - - l)
// console.log(t);

// var k = 2
// var j = 6
// var v = (j / k) * k - - (j - k)
// console.log(v);

// var e = 10
// var i = 7
// var n = (e - i) * (i - 5)
// console.log(n);


// Q1
// const a1= 'tabeeel anwar'
// const a2 = 23
// console.log(typeof a1+a2);

// Q2

// const a1 = {
//     name:"tabeel",
//     section: 2,
//     principle: false 
// }
// a1['age'] = '23'
// a1['friend'] = 'qas'
// console.log(a1);

// const a2 = {
//     gulp: "swallow (drink or food) quickly or in large mouthfuls, often audibly.",
//     nibble: "take small bites out of.",
//     wondering: "characterized by or expressive of a desire to know something; curious.",
//     frightened: "deter someone or something from involvement or action by making them afraid.",
//     eager: "strongly wanting to do or have something."
// }
// console.log(a2);

// const hostname = {
//     mango: "Mangos were first grown in India over 5,000 years ago.",
//     apple: "An apple is a sweet, edible fruit that grows on apple trees. It's a common and popular fruit",
//     strawberry: "A strawberry is a widely cultivated hybrid fruit, enjoyed for its sweet, aromatic, and juicy taste",
//     banana: "A banana is an elongated, edible fruit"
// }
// alert(location.hostname);

// assignment operators

// Comparison Operators

// ==	equal to
// ===	equal value and equal type
// !=	not equal
// !==	not equal value or not equal type
// >	greater than
// <	less than
// >=	greater than or equal to
// <=	less than or equal to

// let a1 = 6
// let b1 = 6

// console.log('a1 == b1 ', a1 ==b1);
// console.log('a1 != b1', a1 !=b1);
// console.log('a1 === b1', a1 ===b1);
// console.log('a1 !== b1', a1 !==b1);
// console.log('a1 < b1', a1 < b1);
// console.log('a1 < b1 ', a1 < b1);


// let h1 = 7
// let t1 = 8
// console.log(!h1<1);


// let x = 6
// let y = 8

// console.log(x == 6 && y !== 8);

// let t = 6
// let u = 8

// console.log(x == 6 || y !== 8);

// let h = 6
// let f = 8

// console.log(!x < 2);


// Conditional Statements

// Use if to specify a block of code to be executed, if a specified condition is true
// Use else to specify a block of code to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false
// Use switch to specify many alternative blocks of code to be executed


// let x = 17;

// if(x>18 || x==18){
//     console.log('you can drive');
// }else if(x<18){
//     console.log('you can not drive ');   
// }else{
//     console.log('kch nhi hain');
    
// }

// let h = 18;

// if(h>18 || h == 18){
//     console.log('you have access to this website');
    
// }else if(h<18){
//     console.log('you cannot access to this website');
    
// }else{
//     console.log('Welcome');
    
// }

// let t = 10; 

// if(t>10 || t == 10){
//     console.log('Aha tamatar barey mazedar');
    
// }else if(t<10){
//     console.log('lakri ki kathi, kathi pe ghora');
    
// }else{
//     console.log('chal chaiyan chaiyan chayian');
    
// }


// let x = 20

// if (x==20 || x>20) {
//     console.log('You have access to this website!');
    
// }

// else if (x<10) {
//     console.log("You don't have access to this website!");
    
// } else {
//     console.log("Welcome!");
    
// }


// let day = 'tuesday';

// switch (day) {
//     case 'monday':
//         console.log('today is monday');
//         break;

//         case 'tuesday':
//         console.log('today is tuesday');
//         break;

//     default:
//         console.log( 'kch nhi hain');       
//         break;
// }

// let pet = 'dog'

// switch (pet) {
//     case 'dog':
//         console.log('The dog name is Zorro');
//         break;

//             case 'cat':
//         console.log('The cat name is Bella');
//         break;

//     default:
//         console.log('Error');
        
//         break;
// }

// let car = 'irqeel'

// switch (car) {
//     case 'tabeel':
//         console.log('Buggati');
        
//         break;

//     case 'irqeel':
//         console.log('Mazda MK4');
        
//         break;

//     default:
//         console.log('Error');
        
//         break;
// }


// Basic Array Methods
// Array push()
// Array pop()
// Array length
// Array shift()
// Array at()
// Array join()
// Array unshift()
// Array delete()
// Array concat()
// Array copyWithin()
// Array flat()
// Array slice()
// Array splice()
// Array toSpliced()


//ARRAY PUSH

// let cars = ["suzuki", "toyota","buggati"]
// let supercars = cars.push("buggati", "supra")
// console.log(cars);

//ARRAY POP

// let games = ["tekken", "pubg", "criket"]
// let outdoorgames = games.pop()
// console.log(games.length);
// console.log(outdoorgames);


//ARRAY SHIFT

// let games = ["tekken", "pubg", "criket"]
// games.shift("tabeel")
// console.log(games);

//ARRAY UNSHIFT

// let games = ["tekken", "pubg", "criket"]
// games.unshift("tabeel")
// console.log(games);

//ARRAY LENGTH
// let games = ["tekken", "pubg", "criket"]
// games.shift("tabeel")
// console.log(games.length);

//ARRAY SPLICE 

// let animals = ['dogs', 'cats', 'leapord']
// animals.splice(2,0, 'Lion')
// console.log(animals);


// ARRAY SLICE
// let animals = ['dogs', 'cats', 'leapord','lion','birds', 'snakes', 'monkey', '234']
// let discut= animals.slice(1,6)
// console.log(discut);

//ARRAY INCLUDES
// let animals = ['dogs', 'cats', 'leapord','lion','birds', 'snakes', 'monkey', '234']
// let discut= animals.includes('leapord')
// console.log(discut);


// let tabeel = prompt('please enter your name');
// localStorage.setItem('your name is', tabeel);

// let x = prompt('enter your first value');
// let y = prompt('enter your second value');
// if (x > y ) {
//     console.log("x is greater than y")
// }
// else if (x<y) {
//     console.log("y is greater than x")
// }
// else if (x == y || y == x){
//     console.log("both values are same")
// }
// else {
//     console.log("please write something!")
// }

// let x = prompt("Enter your first value");
// let y = prompt("Enter your second value");
// let z = prompt('Enter your third value');

// if ((x>y)&&(x>z)) {
//     console.log("X is the greater number");
// }
// else if ((y>x) && (y>z)) {
//     console.log("Y is the greater number");
// }
// else if ((z>x) && (z>y)) {
//     console.log("Z is the greater number");
    
// }
// else if ((x==y) && (x==z)) {
//     console.log("All values are same");
// }
