// Add console.log to check to see if our code is working.
console.log("working");
// Create the map object with a center and zoom level. [40.7, -94.5]
let map = L.map('mapid').setView([37.6, -122.5], 11);

// // Coordinates for each point to be used in the line.
// let line = [
//     [37.6213, -122.3790],
//     [30.1975, -97.6664],
//     [43.6777, -79.6248],
//     [40.6413, -73.7781],
//     [32.8998, -97.0403]
// ];

// // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//     color: "blue",
//     dashArray: '3,5',
//     weight: 2
// }).addTo(map);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//         console.log(feature);
//         return L.marker(latlng)
//         .bindPopup("<h2>" + feature.properties.name + "</h2> <hr> <h3>" + feature.properties.city + ", " + feature.properties.country + "</h3>");
//     }
// }).addTo(map);

L.geoJson(sanFranAirport, {
    onEachFeature: function(feature, layer) {
        console.log(layer);
        layer.bindPopup("<h2>Airport Code: " + feature.properties.faa + "</h2> <hr> <h3>Airport name: " + feature.properties.name + "</h3>");
    }
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);