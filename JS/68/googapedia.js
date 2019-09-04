/* global google */
/* global $ */

let map;
let loc = { lat: 40.109137, lng: -74.217223 };
window.initMap = function () {
    'use strict';

    map = new google.maps.Map(document.getElementById('map'), {
        center: loc,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });
};

(function () {
    'use strict';

    $('#search').click(() => {
        $.getJSON('http://api.geonames.org/wikipediaSearch?q=' + $('#enterPlace').val() + '&maxRows=10&username=elisha1165&type=json')
            .done(response => {
                console.log(response);
            });

    });

    //});

}());