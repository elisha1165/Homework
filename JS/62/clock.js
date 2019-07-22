(function () {
    'use strict';

    function clock() {
        const clockDiv = document.createElement('div');
        clockDiv.style.backgroundColor = 'black';
        clockDiv.style.color = 'white';
        clockDiv.style.display = 'inline-block';
        clockDiv.style.fontSize = '36px';
        document.body.appendChild(clockDiv);

        /*const hour = document.createElement('span');
        const min = document.createElement('span');
        const sec = document.createElement('span');*/

        const getTime = function getTime() {
            let d = new Date();
            clockDiv.innerHTML = d.toLocaleTimeString();
        };

        setInterval(getTime, 1000);
    }
    clock();


    //Did you want the getClock function on its own page?
    window.getClock = function () {
        return clock();
    };

}());