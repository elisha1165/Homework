(function(){
'use strict';
const org = [2,4,6];


const mapp = function(command, array){
    const l = array.length;
    for(let i = 0; i < l; i++){
        command(array[i]);  
        console.log(array[i]); 
     }
     return array;
};

const double = function(num){
    num = num*2;
};
console.log(org);
const changed = mapp(double(),org);
console.log(org);
console.log(changed);
}());