(function () {
    'use strict';
    const updateBack = document.getElementById('updateBack');
    const updateText = document.getElementById('updateText');
    updateBack.addEventListener('click', function () {
        document.body.style.backgroundColor = document.getElementById('back').value;
    });

    updateText.addEventListener('click', function () {
        document.body.style.color = document.getElementById('text').value;
    });

    //If you wanted one button to update both it would have looked like this
    /*const update = document.getElementById('update');
    update.addEventListener('click', function () {
        document.body.style.backgroundColor = document.getElementById('back').value;
         document.body.style.color = document.getElementById('text').value;
    });*/
}());