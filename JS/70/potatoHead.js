/* global $*/
(function () {
    'use strict';


    const dragBtn = $("#dragIt");
    const postBtn = $("#positionIt");
    const postP = $("#postP");
    const dragP = $("#dragP");

    //Will show ONLY the body parts of the selected correspanding button
    $('.piecebtn').each(function () {
        $(this).click(function () {
            $('.piece').hide();
            $(`.${$(this).text()}`).show();
        });
    });

    //will make body parts draggable & show correct text, and turn button blue
    dragBtn.click(function () {
        $(this).css("color", "blue");
        postBtn.css("color", "black");
        dragP.show();
        postP.hide();
    });

    //will make body parts positionable & show correct text, and turn button blue
    postBtn.click(function () {
        $(this).css("color", "blue");
        dragBtn.css("color", "black");
        postP.show();
        dragP.hide();
    });

    
}());