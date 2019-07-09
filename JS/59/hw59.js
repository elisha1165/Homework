(function () {
    'use strict';
    const blckrd = document.getElementById('blackRed');
    blckrd.addEventListener('click', function () {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "red";
    });

    const grnyll = document.getElementById('greenYellow');
    grnyll.addEventListener('click', function () {
        document.body.style.backgroundColor = "green";
        document.body.style.color = "yellow";
    });

    const whtblck = document.getElementById('whiteBlack');
    whtblck.addEventListener('click', function () {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    });
}());