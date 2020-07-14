const dayOfWeek = (function () {
    'use strict';

    const arr = [
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday'
    ];

    return {
        getDayName: num => arr[num - 1],
        getDayNumber: name => arr.indexOf(name.toLowerCase()) + 1
    };

}());

const intrestCalculator = (function () {
    'use strict';

    let intrestRate = -1;
    let numOfYears = -1;

    return {
        calculateIntrest: principle => {
            return (principle * intrestRate * numOfYears).toFixed(2);
        },
        setRate: rate => intrestRate = rate,
        setYears: years => numOfYears = years
    };
}());
