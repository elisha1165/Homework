(function () {
    'use strict';
    const button1 = document.getElementById('button');
    var myItnerval;
    button1.addEventListener('click', function () {

        if (document.getElementById('button').innerHTML === 'Start') {
            document.getElementById('button').innerHTML = 'Stop';

            myItnerval = setInterval(changeColor, 400);
            console.log('changing');
        }
        else {
            clearInterval(myItnerval);
            document.getElementById('button').innerHTML = 'Start';

        }
    });

    function getColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        console.log(color);
        return color;
    }

    function changeColor() {
        document.body.style.backgroundColor = getColor();
    }


}());