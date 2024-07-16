console.log("JS File was loaded");

// 35.217665 N, 80.831473 W 
// 35.6764 N, 139.6500 - japan

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
    .bindPopup(`<h2>Hello from CPCC!</h2><hr><iframe width="280" height="160" src="https://www.youtube.com/embed/SIOicrto1yw?si=ydhtED6ltmISfb0R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`)
    .openPopup();
