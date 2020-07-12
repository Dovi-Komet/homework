'use strict';

function isEvery(arr, funct) {
    for (let index = 0; index < arr.length; index++) {
        if (!funct(arr[index])) {
            return false;
        }
    }
    return true;
}

function isSome(arr, funct) {
    for (let index = 0; index < arr.length; index++) {
        if (funct(arr[index])) {
            return true;
        }
    }
    return false;
}

function onlyIf(arr, test, action) {
    for (let index = 0; index < arr.length; index++) {
        if (test(arr[index])) {
            action(arr[index]);
        }
    }
}

const letters1 = ['a', 'B', 'c'];
const letters2 = ['a', 'b', 'c'];
const letters3 = ['A', 'B', 'C'];

const test1 = testing => testing === testing.toUpperCase();
const test2 = testing => testing === testing.toLowerCase();

//is every uppercase
console.log(isEvery(letters1, test1)); //false
console.log(isEvery(letters2, test1)); //false
console.log(isEvery(letters3, test1)); //true

//is every lowercase
console.log(isEvery(letters1, test2)); //false
console.log(isEvery(letters2, test2)); //true
console.log(isEvery(letters3, test2)); //false

//is every uppercase builtin
console.log(letters1.every(test1));    //false
console.log(letters2.every(test1));    //false
console.log(letters3.every(test1));    //true

//is every lowercase builtin
console.log(letters1.every(test2));    //false
console.log(letters2.every(test2));    //true
console.log(letters3.every(test2));    //false

console.log('---------------------------');

//is some uppercase
console.log(isSome(letters1, test1));   //true
console.log(isSome(letters2, test1));   //false
console.log(isSome(letters3, test1));   //true

//is some lowercase
console.log(isSome(letters1, test2));   //true
console.log(isSome(letters2, test2));   //true
console.log(isSome(letters3, test2));   //false

//is some uppercase builtin
console.log(letters1.some(test1));      //true
console.log(letters2.some(test1));      //false
console.log(letters3.some(test1));      //true

//is some lowercase builtin
console.log(letters1.some(test2));      //true
console.log(letters2.some(test2));      //true
console.log(letters3.some(test2));      //false
