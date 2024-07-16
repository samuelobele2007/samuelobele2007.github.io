console.log("basicMap.js loaded.");

// CPCC coordinates: 35.2176665 N, 80.831473 W -> 35.2176665, -80.831473

let map = L.map("map" , {
  center: [35.2176665, -80.831473],
  zoom: 16
});


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([ 35.2176665, -80.831473],{
  title: "hello from CPCC!"})
  .bindPopup(`
  <center>
  <h2>Hello from CPCC</h2>
  <hr>
  <a href="https://www.cpcc.edu">Click Here to Visit CPCC's website</a><br>
  <iframe width="280" height="160" src="https://www.youtube.com/embed/9UWwLKjaPDQ?si=xW2HUrTSFkbatFQ2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </center>
  `)
  .addTo(map);
