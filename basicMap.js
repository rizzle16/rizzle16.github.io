console.log("JS File was loaded");

// 35.217665 N, 80,831473 W ->

let map = L.map('map',{
    center:[ 35.217665, -80,831473],
    zoom: 12
});


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

 L.marker([ 35.217665, -80,831473]).addTo(map)
    .bindPopup('Location:<br> Centeral Piedmount Campus')
    .openPopup();
