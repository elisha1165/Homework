/*var incr = (function(){
    'use strict';
    var counter = 0;
    return function (){return counter++;};

})();
console.log(incr());
console.log(incr.counter);
console.log(incr());
console.log(incr.counter);
console.log(incr());
console.log(incr.counter);
console.log(incr());
console.log(incr.counter);
*/

var myApp = myApp || {};
myApp.Utils = (function (Utils) {
    'use strict';

    var counter = 0;
    return {
        addOne: function () { return counter++; },
        get: function () { return counter; }
    };
}(myApp.Utils || {}));

myApp.Utils.addOne();
console.log(myApp.Utils.get());
myApp.Utils.addOne();
console.log(myApp.Utils.get());
myApp.Utils.addOne();
console.log(myApp.Utils.get());


