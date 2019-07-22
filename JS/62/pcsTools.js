window.pcs = window.pcs || {};

window.pcs = function (id) {
    'use strict';

    function get(id) {
        return document.getElementById(id);
    }

    const elem = get(id);

    function changeColor(length, speed = 2000) {
        //this is a basic way but would leave the text red if thats when length finished
        /*const interval = setInterval(function(){
             if(get(id).style.color !== 'red'){
                 get(id).style.color = 'red';
             }else{
                 get(id).style.color = 'black';
             }
         }, speed);
        setTimeout(()=> clearInterval(interval), length);
     }*/
        const color = get(id).style.color;
        const interval = setInterval(function () {
            if (get(id).style.color !== 'red') {
                get(id).style.color = 'red';
            } else {
                get(id).style.color = color;
            }
        }, speed);
        setTimeout(function () {
            clearInterval(interval);
            get(id).style.color = color;
        }, length);
    }

    /*var storedValue;
    function data(name, value/* = 'nthing') {
        // storedValue = storedValue || value;
        if (value) {
            storedValue = value;

        }
        if (!value) {
            console.log(storedValue);
            return storedValue;
        }
    }*/ 
    
    function data(element, key, value){
        function add(){
            element.data = value;
        }
        function get(){
            return element.data;
        }
        if(value){
            add();
        }
        if(!value){
            get();
        }
    }


   


    return {
        changeColor: function (length, speed) {
            changeColor(length, speed);
        },
        //changeColor: changeColor
        data: function (key, value) {
            data(elem, key, value);
        },
        
    };

};