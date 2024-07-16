console.log("JS File was loaded");


// 35.6764 , 139.6500 - japan

let map = L.map('map',{
    center:[35.652832, 139.839478],
    zoom: 12
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',
            {
                maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

                    
L.circle([35.6586,  139.7454], {
      fillColor:'teal',
      color: "black",
          radius: 1000

        
} ).bindPopup(`<iframe width="280" height="160" src="https://www.youtube.com/embed/x-htlH8Jnx0?si=kNwPTMV9ny354htU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`)
    .addTo(map);
