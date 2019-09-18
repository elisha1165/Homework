/* global $*/
(function () {
    'use strict';


    const dragBtn = $("#dragIt");
    const postBtn = $("#positionIt");
    const postP = $("#postP");
    const dragP = $("#dragP");

    // let dragging;
    // let offset;



    //Will show ONLY the body parts of the selected correspanding button
    $('.piecebtn').each(function () {
        $(this).click(function () {
            $('.piece').hide();
            $(".moved").show();
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


    // $(document)
    //     .on('mousedown', '.piece', e => {
    //         console.log('down', e);
    //         dragging = $(e.target);
    //         offset = { y: e.offsetY, x: e.offsetX };
    //     }).mousemove(e => {
    //         if (dragging) {
    //             console.log('move', e);
    //             dragging.css({ top: e.pageY - offset.y, left: e.pageX - offset.x });
    //             e.preventDefault();
    //         }
    //     }).mouseup(e => {
    //         console.log('up', e);
    //         dragging = null;
    //     });

    // const keep = function (e, ui) {
    //     console.log("moved");
    //     ui.addClass("moved");
    // };

    $(".piece").draggable({
        stack: ".piece",
        //stop: keep( ui)//,
        stop: function () { $(this).addClass('moved'); }
        //containment: "parent"
    });

    function saveState() {
        const state = [];
        $(".piece").each((index, elem) => {
            const part = $(elem);
            state.push({
                part: part.attr('src'),
                top: part.css('top'),
                left: part.css('left'),
                zIndex: part.css('z-index')
            });
        });
        localStorage.parts = JSON.stringify(state);
    }

    $("#click").click(() => {
        saveState();
    });

    if (localStorage.parts) {
        const parts = JSON.parse(localStorage.parts);
        parts.forEach(part => {
            $(`img[src="${part.part}"]`).css({ top: part.top, left: part.left, zIndex: part.zIndex });
            //part.addClass('moved');
            //part.classList.add("moved");
            console.log(part);
            //maxZindex = Math.max(part.zIndex, maxZindex);
        });
        $(".moved").show();
    }
}());