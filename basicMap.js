console.log("basicMap.js loaded.");

// CPCC coordinates: 35.2176665 N, 80.831473 W -> 35.2176665, -80.831473




let markers = [];
markers.push(
L.marker([ 35.2176665, -80.831473],{
  title: "hello from CPCC!"})
  .bindPopup(`
  <center>
  <h2>Hello from CPCC</h2>
  <hr>
  <a href="https://www.cpcc.edu">Click Here to Visit CPCC's website</a><br>
  <iframe width="280" height="160" src="https://www.youtube.com/embed/9UWwLKjaPDQ?si=xW2HUrTSFkbatFQ2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  <hr>
  <p>[URL: https://www.youtube.com/watch?v=9UWwLKjaPDQ]</p>
  </center>
  `)
)

let CPCC= L. layerGroup(markers);
let street = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
})

var topo = L.tileLayer('https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryTopo/MapServer/tile/{z}/{y}/{x}', {
	maxZoom: 20,
	attribution: 'Tiles courtesy of the <a href="https://usgs.gov/">U.S. Geological Survey</a>'
});

let baseMMaps = {
  Street: street,
  Topographic: topo
}
  
let overlayMaps = {
    CPCC: CPCC
  }

  let map = L.map("map", {
  center: [35.2176665, -80.831473],
  zoom: 16,
    layers: [street, CPCC]
});

L.control.layers(baseMaps, overlayMaps,{
  collapsed: false
}).addTo(map);
