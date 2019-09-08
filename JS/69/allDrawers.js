/* global google*/

window.initMap = function () {
    'use strict';

    let loc = { lat: 40.109137, lng: -74.217223 };

    const map = new google.maps.Map(document.getElementById('map'), {
        center: loc,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    const drawingManager = new google.maps.drawing.DrawingManager();
    drawingManager.setMap(map);

    google.maps.event.addListener(drawingManager, 'overlaycomplete', event => {
        this.console.log(event);
        switch (event.type) {
            case "marker":
                let trackMarkers = JSON.parse(localStorage.getItem("trackMarkers") || "[]");
                let mark = {
                   
                };
                trackMarkers.push(mark);
                localStorage.setItem("trackMarkers", JSON.stringify(trackMarkers));
                break;
            case "rectangle":
                let trackRectangles = JSON.parse(localStorage.getItem("trackRectangles") || "[]");
                let rect = {
                    
                };
                trackRectangles.push(rect);
                localStorage.setItem("trackRectangles", JSON.stringify(trackRectangles));
                break;
            case "polyline":
                let trackPolyLines = JSON.parse(localStorage.getItem("trackPolyLines") || "[]");
                let poly = {
                    
                };
                trackPolyLines.push(poly);
                localStorage.setItem("trackPolyLines", JSON.stringify(trackPolyLines));
                break;
            case "circle":
                let trackCircles = JSON.parse(localStorage.getItem("trackCircles") || "[]");
                let circle = {
                    
                };
                trackCircles.push(circle);
                localStorage.setItem("trackCircles", JSON.stringify(trackCircles));
                break;
                case "polygon":
                let trackpolygons = JSON.parse(localStorage.getItem("trackpolygons") || "[]");
                let polygon = {
                    
                };
                trackCircles.push(polygon);
                localStorage.setItem("trackpolygons", JSON.stringify(trackpolygons));
                break;
        }
    });
};