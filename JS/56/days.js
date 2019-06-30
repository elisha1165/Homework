var myApp = {
    Utils: {  
         getDayName: function(index) {
             'use strict';
             const days = ["Sunday", 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            return days[index - 1];
        }
    }
};
console.log(myApp.Utils.getDayName(2));

var myApp = {
    Utils: {
        getDayNumber: function(day){
    'use strict'; 
    const days = ["Sunday", 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    for (let i = 0; i < days.length; i++) {
        if (days[i] === day) {
            return i + 1;
        }
    }
    return 'Week only has 7 Days';
}
}
    };





console.log(myApp.Utils.getDayNumber('Sunday'));
















































































































































