/* global google */

window.initMap = function () {
    'use strict';

    const loc = { lat: 40.109137, lng: -74.217223 };

    const map = new google.maps.Map(document.getElementById('map'), {
        center: loc,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    const marker = new google.maps.Marker({
        position: loc,
        map: map,
        title: 'PCS',

        icon: {
            url: 'https://geo2.ggpht.com/cbk?panoid=vkN5gWK9qPeiXDYSTQWvJg&output=thumbnail&cb_client=search.LOCAL_UNIVERSAL.gps&thumb=2&w=227&h=160&yaw=143.33922&pitch=0&thumbfov=100',
            scaledSize: new google.maps.Size(50, 50)
        }
    });

    const infoWindow = new google.maps.InfoWindow();

    marker.addListener('click', () => {
        infoWindow.setContent(`
            PCS offers Bnei Torah a path to parnassah
            <br>
            <a target="_blank" href="https://pcsnynj.org/">More About PCS</a>
        `);
        infoWindow.open(map, marker);
    });
};