window.app = window.app || {};

window.app.counterFactory = {
    countersMade: 0,
    counter: (function () {
        'use strict';
        let count = 0;
        this.countersMade++;

        return {
            count: function () {
                return count;
            },
            increment: function () {
                count++;
            },
            countersMade: function () {
                return countersMade;
            }
        };

    })

};
