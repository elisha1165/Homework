/* global $, google */

window.initMap = function () {
    'use strict';

    const ask = $('#ask');
    let loc = { lat: 40.109137, lng: -74.217223 };

    const map = new google.maps.Map(document.getElementById('map'), {
        center: loc,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    const drawingManager = new google.maps.drawing.DrawingManager();
    drawingManager.setMap(map);

    google.maps.event.addListener(drawingManager, 'overlaycomplete', event => {
        console.log(event);
        if (event.type === 'marker') {
            let markers = JSON.parse(localStorage.getItem("markers") || "[]");
            let mark = {
                pos: event.overlay.position
            };
            markers.push(mark);
            localStorage.setItem("markers", JSON.stringify(markers));
        }
    });

    const hideQ = function () {
        ask.css("zIndex", "-1");
    };

    if (localStorage.markers) {
        $("#ask").css("zIndex", "10");
        $("#no").click(() => {
            hideQ();
        });
        $("#yes").click(function () {
            hideQ();
            const setMarkers = JSON.parse(localStorage.markers);
            const bounds = new google.maps.LatLngBounds();
            for (let i = 0; i < setMarkers.length; i++) {
                loc = { lat: setMarkers[i].pos.lat, lng: setMarkers[i].pos.lng };
                bounds.extend(loc);
                const marker = new google.maps.Marker({
                    position: loc,
                    map: map,
                });
                google.maps.event.addListener(marker, 'click', function () {
                    map.setZoom(18);
                    map.setCenter(marker.getPosition());
                });
            }
            map.fitBounds(bounds);
        });
    } else {
        hideQ();
    }


};