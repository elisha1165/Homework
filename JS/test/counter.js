window.myApp = window.myApp || {};
window.myApp.Utils = (function (Utils) {
    'use strict';
    /*var counter = 0;
    return function(){counter +=1; return counter;};*/
   
    Utils.addOne = function (num) {
        counter =  counter || 0;
        return num += 1;
    };


}(window.myApp.utils || {}));


/*const two = window.myApp.Utils.addOne(1);
console.log(two);*/
console.log(window.myApp.Utils.addOne(2));
console.log(window.myApp.Utils.addOne(window.myApp.Utils.addOne.counter));
console.log(window.myApp.Utils.counter);


