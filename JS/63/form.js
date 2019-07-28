/*global $*/
$(document).ready(function () {
    'use strict';

    const form = $("<form></form>");
    form.append('<input type="text" name="name" id="name" placeholder="Whats your name?">')
        .append('<input type="text" name="address" id="address" placeholder="Whats your address?">')
        .append('<input type="button" value = "Submit" id="submit">');

    $('body').append(form);

    // not sure if you wanted to keep all submission, or show until clicked and then dissapear, but I got more practice
    const table = $("<table></table>");
    $('body').append(table);
    table.append(`<tr>
                            <td>Name</td>
                            <td>Address</td>
                            <td>Check If Correct, Submit will be disabled until all are Checked</td>
                         </tr>`);

    const addRow = function () {
        const name = $('#name').val();
        const address = $('#address').val();
        const box = document.createElement("INPUT");
        box.type = "checkbox";
        box.id = "box";

        //$('#box').
        table.append(`<tr></tr>`)
            .append(`<td>${name}</td>
                    <td>${address}</td>
                     `)
            .append(box);
    };

    $('#submit').click(function () {
        $('#submit').attr('disabled', true);
        //alert('Is this correct?\n' + 'Name: ' + $('#name').val() + '\nAddres: ' + $('#address').val());
        addRow();
    });

    $(document).on('change', '#box', function () {
        if (this.checked) {
            $('#submit').attr('disabled', false);
        }
        // in case he unclicks it
        if (!this.checked) {
            $('#submit').attr('disabled', true);
        }
    });
});

