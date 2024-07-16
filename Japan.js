console.log("JS File was loaded");


// 35.6764 , 139.6500 - japan

let map = L.map('map',{
    center:[35.652832, 139.839478],
    zoom: 15
});


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

 L.marker([[35.652832, 139.839478],{ 
         
         title: "Japan"
 }
          )
     .addTo(map)
    .bindPopup("Hello")
    .openPopup();
