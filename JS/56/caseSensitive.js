var myApp =  {
    Utils: {
         caseInsensitive: function (str1, str2){
                   'use strict';  
            if(str1.toUpperCase() === str2.toUpperCase()){
                return true;
            }
            return false;
        }
    }
};

console.log(myApp.Utils.caseInsensitive('green', 'GReen'));
console.log(myApp.Utils.caseInsensitive('one', 'two'));
