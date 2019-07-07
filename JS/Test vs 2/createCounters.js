// I could not get this last problem workable. 
//I spent about the amount of time on the test that we were given in class so I felt I ahould stop














/*var myApp = myApp || {};
myApp.Utils = (function (Utils) {
    'use strict';

   var counter = 0;
    var howMany = 0;
   
        return {
            createCounter: function () {  howMany++; return counter; },
            access: {
                addOne: function (count) { return count++; },
               // get: function () { return counter; }
            }
        };
}(myApp.Utils || {}));

const counter1 = myApp.Utils.createCounter();
console.log(counter1);
myApp.Utils.access.addOne(counter1);
console.log(counter1);
myApp.Utils.access.addOne(counter1);
console.log(counter1);
myApp.Utils.access.addOne(counter1);
console.log(counter1);
console.log(myApp.Utils.counter);*/



var myApp = myApp || {};
myApp.Utils = (function (Utils) {
    'use strict';
    counter: {
        var counter = 0;
        const addOne = function(){counter++;};
    }
    
    return {
        createCounter: function() {let counter =0; return  counter;},
       // addOne: function (counter) {  counter++; },
        get: function (counter) { return counter; }
    };
}(myApp.Utils || {}));

let counter1 = myApp.Utils.createCounter();
console.log(counter1);
 myApp.Utils.counter.addOne();
console.log(counter1);