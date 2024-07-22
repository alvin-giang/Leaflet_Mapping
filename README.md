# Leaflet

## Module_15_Challenge

### Introduction

The United States Geological Survey (USGS) is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

To aid USGS in their mission, I have developed a new set of tools that visualize their earthquake data, allowing for better public education and interaction with government organizations. This project helps to illustrate the critical issues facing our planet and potentially secure more funding for future research.

### Earthquake Visualisation
I visualized an earthquake dataset provided by the USGS. The steps included:

Dataset Acquisition:

I obtained earthquake data from the USGS GeoJSON Feed. I selected a dataset (e.g., "All Earthquakes from the Past 7 Days") to work with. API Call:

Using D3.js, I made an API call to fetch the earthquake data in JSON format from the USGS GeoJSON Feed. Data Visualization:

Using Leaflet, I created a map plotting all earthquakes from the dataset based on their longitude and latitude. The data markers reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Popups provide additional information about the earthquake when its associated marker is clicked. A legend was created to provide context for the map data.

### Deployment 
The project has been deployed and can be viewed at 