console.log("JS File was loaded");

// 35.217665 N, 80,831473 W 

let map = L.map('map',{
    center:[35.2176665, -80.831473],
    zoom: 15
});


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

 L.marker([35.2176665, -80.831473],{ 
         
         title: "Central Piedmont Campus"
 }
          )
     .addTo(map)
    .bindPopup("<h2>Hello from CPCC!</h2><hr>")
    .openPopup();
