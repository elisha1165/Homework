(function(){
'use strict';
function mapFunc(arr){
   const newArr = arr.slice();
   for(let i=0; i < arr.length; i++){
      const n = arr[i] * 2;
       newArr[i] = n;
   }
   return newArr;
}
const arr1 = [1,2,3,4,5];
const arr2 = mapFunc(arr1);

console.log(arr1);
console.log(arr2);
}());


/*
// I wasn't sure if you wanted something like I did above, where mapFunc can only produce one result
// I thought you may want something like below where I pass afunction into mapFund, and that function can do anything
// Only I kept getting an error that command is not a function, and wasn't sure how to fix that

(function(){
    'use strict';
    function double(num){
        return num * 2;
    }

    function mapFunc(arr, command){
       const newArr = arr.slice();
       for(let i=0; i < arr.length; i++){
          const n = command(arr[i]);
           newArr[i] = n;
       }
       return newArr;
    }

    const arr1 = [1,2,3,4,5];
    const arr2 = mapFunc(arr1, double());
    
    console.log(arr1);
    console.log(arr2);
    }());
*/

