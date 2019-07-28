/*global $*/
$(document).ready(function () {
    'use strict';

    const form = $("<form></form>")
        .append('<input type="text" name="name" id="name" placeholder="Whats your name?">')
        .append('<input type="text" name="address" id="address" placeholder="Whats your address?">')
        .append('<input type="button" value = "Submit" id="submit">');

    $('body').append(form);

    const msgBox = document.createElement('div');
    msgBox.id = 'msg';
    $('body').append(msgBox);
    const box = document.createElement("INPUT");
    box.type = "checkbox";
    box.id = "box";

    $('#msg').css({
        'left': '0',
        'right': '0',
        'margin': 'auto',
        'height': '150px',
        'width': '150px',
        'border': '1px solid black',
        'backgroundColor': 'lightGray',
        'visibility': 'hidden'
    });

    $('#submit').click(function () {
        $('#submit').attr('disabled', true);
        $('#msg').css('visibility', 'visible');
        // \n wasnt workning so added in br
        $('#msg').html('Is this correct? <br /> Name:' + $('#name').val() + '<br /> Addres: ' + $('#address').val() + "<br />");
        $("#msg").append(box);
        // $('#box').removeAttr('checked'); not working googled this:
        $('input[type=checkbox]').prop('checked', false);
    });

    $(document).on('change', '#box', function () {
        if (this.checked) {
            $('#submit').attr('disabled', false);
            $('#msg').css('visibility', 'hidden');
        }
    });
});