/* jshint -W097 */
'use strict';

function changeEvery(arr, func) {
    let newArr = [];

    for (let index = 0; index < arr.length; index++) {
        newArr[index] = func(arr[index]);
    }

    return newArr;
}

const arr = [1, 5, 7];
const double = num => num * 2;
console.log(
    'arr: ', arr, 'changeEvery(arr, double): ', changeEvery(arr, double)
);
