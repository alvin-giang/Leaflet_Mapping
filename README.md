# Leaflet Mapping

This repository contains a project that visualizes global earthquake data using Leaflet.js. The map displays earthquake locations, depths, and magnitudes using data fetched from the USGS (United States Geological Survey) GeoJSON feed.

### Project Overview

This project utilizes Leaflet.js to create an interactive map that visualizes earthquake data from the past week, obtained from the USGS GeoJSON feed. The map markers are color-coded based on the depth of the earthquake and vary in size according to magnitude. It also includes popups with detailed information for each earthquake and a dynamic legend explaining the depth color scale.

### Features

* **Interactive Map**: Displays earthquake data as circle markers that vary in size and color.
* **Depth-based Coloring**: Earthquake markers are color-coded based on depth, making it easy to identify deeper earthquakes.
* **Magnitude-based** Size: The size of each marker is proportional to the earthquake's magnitude.
* **Popups**: Each marker displays a popup with detailed information, including location, time, magnitude, and depth.
* **Dynamic Legend**: A legend explaining the color scale based on depth, positioned at the bottom right of the map.

### Technologies Used

* **Leaflet.js**: JavaScript library for interactive maps.
* **D3.js**: For fetching and handling GeoJSON data.
* **USGS Earthquake GeoJSON Feed**: Earthquake data source.
* **HTML/CSS/JavaScript**: For map rendering and styling.

### Installation

1. Clone the reposity:
```python
git clone https://github.com/alvin-giang/Leaflet_Mapping.git
```
2. Navigate to the project folder:
```python
cd Leaflet_Mapping
```
3. Open the `index.html` file in your preferred browser to view the map.

### Reposity Structure

* **static/js**: Contains logic file
* **static/css**: Contains styling code
* **LICENSE**: Contains MIT License
* **README**: Contains overview of the project

### Usage

Upon opening the `index.html` file in your browser, the map will load the latest earthquake data from the USGS GeoJSON feed. You can interact with the map by zooming, panning, and clicking on markers to view details about individual earthquakes.

* Markers are color-coded by depth, ranging from green (shallow) to dark purple (deep).
* The size of each marker corresponds to the earthquake's magnitude.
* A popup displays information for each earthquake, including:
    * Location
    * Time of occurrence
    * Magnitude
    * Depth in kilometers

### License

This project is licensed under the MIT License. See the `LICENSE.txt` file for details.

### Deployment

The project has been deployed and can be viewed at https://alvin-giang.github.io/Leaflet_Mapping/
