console.log("JS File was loaded");


// 35.6764 , 139.6500 - japan

let map = L.map('map',{
    center:[35.652832, 139.839478],
    zoom: 15
});


<leaflet-map latitude="35.652832" longitude="139.839478" zoom="5" max-zoom="6">

    <leaflet-tilelayer 
        url="https://stendhalgame.org/map/3/{z}-{x}-{y}.png"
        min-zoom="2" max-zoom="6" noWrap>

            Map source: <a href="https://stendhalgame.org">Stendhal MMORPG</a>

    </leaflet-tilelayer>

</leaflet-map>
