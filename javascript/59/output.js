/* jshint -W097 ,-W117 */
'use strict';

for (let index = 0; index < 10; index++) {
    app.counter.counter.increment();
}

const counter1 = app.counterFactory.counter();
const counter2 = app.counterFactory.counter();

for (let index = 0; index < 5; index++) {
    counter1.increment();
}

for (let index = 0; index < 15; index++) {
    counter2.increment();
}

console.log('app.counter.counter.count()', app.counter.counter.count());
console.log('counter1.count()', counter1.count());
console.log('counter2.count()', counter2.count());
