console.log("JS File was loaded");

// 35.217665 N, 80,831473 W ->
var map = L.map('map').setView([35.217665, -80,831473], 13);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
