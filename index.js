// alert("hello");

let x = 120;
console.log(x);
x = 20;
console.log(x);
x = 30;
console.log(x);
console.log(x);

// let x = 20;
// console.log(x);
// syntax error

const y = 160;
console.log(y);
// y = 20;
// console.log(y);
// y = 30;
// console.log(y);
// console.log(y);

// type error

var z = 140;
console.log(z);
z = 20;
console.log(z);
z = 30;
console.log(z);
console.log(z);
var z = 150;
console.log(z);

let p = "alex";
let q = "zander";
console.log("My name is" + " " + p  + " " + q );
console.log(`my name is ${p} ${q}` );

let s = 20;
console.log(s);
console.log(typeof s);

let r = "john";
console.log(r);
console.log(typeof r);

// string conversion

let a = 45;
console.log(a);
console.log(typeof String(a)); //string

let b = "45";
console.log(b);
console.log(typeof Number(b)); //number

let c = 45;
c.toString();
// c = c.toString(); // string
console.log(c);
console.log(typeof c); //number


// let w = "my name is alice";

// let heading = document.getElementById("myHeading");
// console.log(heading);
//  document.getElementById("myHeading").innerText = w;
// heading.innerText = w;
// heading.style.backgroundColor = "red";

// if else

// let icecream = Number(prompt("Type a number"));

// if (icecream === 10){
//      console.log("Ice-cream is Blue Lagoon");
// } else if (icecream === 30) {
//     console.log("Ice-cream is Blue Cone");
// } else {
//     console.log("Ice-cream is Random");
// }

// switch 

// switch (icecream){
//     case 10: 
//     console.log("Ice-cream is Blue Lagoon");
//     break;

//     case 30:
//     console.log("Ice-cream is Blue Cone");
//     break;

//     default:
//     console.log("Ice-cream is Random");
//     break;
// }

// for loop

for (let i = 0; i < 10; i++){
    console.log("hi");
}

// while loop

let i = 20;
// while (i < 10) {
//     console.log(i);
//     i++;
// }

do {
    console.log("hello");
    i++;
} while (i < 10)

// array methods

//  find one single value

const arr = [2, 4, 6, 8, 10];

const result = arr.find((value, index) => {
        if (value > 4) {
            return value;
        }
    
    });

console.log(result);

// arr.find((value, index) => {
//     if (value > 4) {
//         console.log(value);
//     }

// });

// filter

const result2 = arr.filter((value, index) => {
         if (value > 4) {
            console.log(value);
         }
})
console.log(result2);

// every

const result3 = arr.every((value, index) => {
         return value > 6;
})
console.log(result3);

const result4 = arr.some((value, index) => {
      return value < 6
})
console.log(result4);

//  map

const result5 = arr.map((value, index) => {
      return value + 20;
})

console.log(result5);
console.log(arr);