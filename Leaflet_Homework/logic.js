// Create the tile layer that will be the background of our map
// var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
//   attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
//   maxZoom: 18,
//   id: "mapbox.steets",
//   accessToken: 'pk.eyJ1IjoibC1nYXIiLCJhIjoiY2pzcm9sM3JuMGM3ZjQ2azQzaXZ0MWtkOSJ9.kimjtp-UzOLLlskEC-Cm-g'
// });


var qurl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson'
var qurl2 ='PB2002_plates.json'

var myMap = L.map("map-id", {
    center: [45.52, -122.67],
    zoom: 13
  });
  
  // Adding a tile layer (the background map image) to our map
  // We use the addTo method to add objects to our map
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: 'pk.eyJ1IjoibC1nYXIiLCJhIjoiY2pzcm9sM3JuMGM3ZjQ2azQzaXZ0MWtkOSJ9.kimjtp-UzOLLlskEC-Cm-g'
  }).addTo(myMap);
  

d3.json(qurl, data => {
    data.features;
    console.log(data.features)
});
