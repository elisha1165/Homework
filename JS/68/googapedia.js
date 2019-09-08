/* global google */
/* global $ */

let map;
let loc = { lat: 40.109137, lng: -74.217223 };
window.initMap = function () {
    'use strict';

    map = new google.maps.Map(document.getElementById('map'), {
        center: loc,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.HYBRID
    });
};

(function () {
    'use strict';

    $('#search').click(() => {
        $.getJSON('http://api.geonames.org/wikipediaSearch?q=' + $('#enterPlace').val() + '&maxRows=10&username=elisha1165&type=json')
            .done(response => {
                console.log(response);
                console.log(response.geonames[0].title);
                response.geonames.forEach(element => {
                    loc = {lat: element.lat, lng: element.lng};
                    const marker = new google.maps.Marker({
                        position: loc,
                        map: map,
                        title: element.title,
                
                        icon: {
                            url: element.thumbnailImg,
                              scaledSize: new google.maps.Size(50, 50)
                        }
                    });
                    
                });
            });

    });

    //});

}());