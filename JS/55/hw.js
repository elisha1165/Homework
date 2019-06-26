const daysUtil = (function () {
    'use strict';
    const days = ["Sunday", 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    function getDay(index) {
        return days[index - 1];
    }

    return {
        getDay: getDay,
        getDayIndex: function (day) {
            for (let i = 0; i < days.length; i++) {
                if (days[i] === day) {
                    return i + 1;
                }
            }
            return 'Week only has 7 Days';
        }
    };
}());

console.log('The Second Day of the Week is: ', daysUtil.getDay(2));
console.log('The Fifth Day of the Week is: ', daysUtil.getDay(5));



///////////////////////////////////
//Guess I didn't really get IIFE

const calculateInterest = (function () {
    'use strict';
    

    function setRate(rate) {
        return amount * rate;
    }

    return {
        
        setYears: function (years) {
            
        }
    };
}());