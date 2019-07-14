(function () {
    'use strict';
    function get(id) {
        return document.getElementById(id);
    }
    const button1 = get('button');
    const table = get('myTable');
    // originally I had it capture all the colors in an array, and when user hit stop it created a row with the time and the array
    // i just couldnt figure hot how to loop through the array with innerHTML
    //let colors = [];
    let myItnerval;


    button1.addEventListener('click', function () {
        if (get('button').innerHTML === 'Start') {
            get('button').innerHTML = 'Stop';
            myItnerval = setInterval(changeColor, 500);
            const row = table.insertRow();
            const time = row.insertCell();
            const date = new Date();
            time.innerHTML = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
            row.onclick = () => {
                get('button').innerHTML = 'Stop';
                const colorArr = []; 
                let j = 0;
                let t = 0;
                    for (let i = 1; i < row.cells.length; i++) {
                        colorArr[j++] = row.cells[i].innerHTML;
                    }
                    function theseColors(){
                        if(t > row.cells.length){
                            t = 0;
                        }
                        const color = colorArr[t++];
                        document.body.style.backgroundColor = color; 
                    }
                    myItnerval = setInterval(theseColors, 500);
            };
    /*row.addEventListener('click', function () {
        get('button').innerHTML = 'Stop';
        while (get('button').innerHTML === 'Stop') {
            for (var i = 1; i < row.cells.length; i++) {
                document.body.style.backgroundColor = row.cells[i].innerHTML;
            }
        }
    });*/
}
        else {
    clearInterval(myItnerval);
    get('button').innerHTML = 'Start';
}
    });

function getColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor() {
    const color = getColor();
    document.body.style.backgroundColor = color;
    //colors.push(document.body.style.backgroundColor);
    const lastRow = table.rows[table.rows.length - 1];
    const addColors = lastRow.insertCell();
    addColors.innerHTML = color;
}

}());