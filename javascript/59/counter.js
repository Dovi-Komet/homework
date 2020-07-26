window.app = window.app || {};

window.app.counter = {

    counter: (function () {
        'use strict';
        let count = 0;

        return {
            count: function () {
                return count;
            },
            increment: function () {
                count++;
            }
        };

    })()

};
