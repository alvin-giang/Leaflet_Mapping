// Create a map object.
let myMap = L.map("map", {
    center: [20.0, 0.0],
    zoom: 2.5
});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Define the URL to the GeoJSON data
let URL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Function to determine marker color based on depth
function markerColor(depth) {
    if (depth > 90) return "#320A5A";
    else if (depth > 70) return "#732673";
    else if (depth > 50) return "#BD3843";
    else if (depth > 30) return "#DA4545";
    else if (depth > 10) return "#D4EE00";
    else return "#00FF00";
  }
  
// Fetch the GeoJSON data using D3
d3.json(URL).then(function (data) {
    // Console log the data retrieved
    console.log(data);
    // Create a GeoJSON layer with earthquake data
    L.geoJson(data, {
        // Use pointToLayer to create circle markers
        pointToLayer: function(feature, latlng) {
          return L.circleMarker(latlng, {
            radius: feature.properties.mag * 4,
            fillColor: markerColor(feature.geometry.coordinates[2]),
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.5
          });
        },
    // Use onEachFeature to add popups
        onEachFeature: function(feature, layer) {
            layer.bindPopup(`<h3>Location: ${feature.properties.place}</h3><hr><p>Time: ${new Date(feature.properties.time)}</p><p>Magnitude: ${feature.properties.mag}</p><p>Depth: ${feature.geometry.coordinates[2]}</p>`);
        }
    }).addTo(myMap);
    // Create a legend
    let legend = L.control({ position: "bottomright" });

    legend.onAdd = function() {
        let div = L.DomUtil.create("div", "info legend"),
            depths = [-10, 10, 30, 50, 70, 90],
            labels = [];

        div.innerHTML += "<h3>Depth (km)</h3>";

        // loop through our density intervals and generate a label with a colored square for each interval
        for (let i = 0; i < depths.length; i++) {
            div.innerHTML +=
                '<i style="background:' + markerColor(depth[i] + 1) + '"></i> ' + depths[i] + (depths[i + 1] ? '&ndash;' + depths[i + 1] + '<br>' : '+');
        }

        return div;
    };

    legend.addTo(myMap);
});