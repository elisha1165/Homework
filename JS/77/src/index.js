



import $ from 'jquery';



$('div').click(function () {
    'use strict';
    $('body').css('background-color', this.innerText);
});
