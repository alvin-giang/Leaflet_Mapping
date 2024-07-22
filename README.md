# Leaflet

## Module_15_Challenge

### Introduction

The United States Geological Survey (USGS) plays a crucial role in providing scientific data about natural hazards, the health of ecosystems and the environment, and the impacts of climate and land-use change. Their scientists are dedicated to developing innovative methods and tools to deliver timely, relevant, and actionable information about the Earth and its processes.

In support of USGS's mission, I have developed a comprehensive set of visualization tools for their earthquake data. These tools enhance public education and facilitate interaction with government organizations. By illustrating critical issues facing our planet, this project aims to raise awareness and potentially secure increased funding for future research.

### Earthquake Visualisation
I visualized an earthquake dataset provided by the USGS. The process involved several key steps:

Dataset Acquisition:

1. Source Selection: I selected the "All Earthquakes from the Past 7 Days" dataset from the USGS GeoJSON Feed.
2. Data Retrieval: Using D3.js, I made an API call to fetch the earthquake data in JSON format from the USGS GeoJSON Feed.

Data Visualization:

1. Map Creation: Leveraging Leaflet, I created an interactive map to plot all the earthquakes from the dataset.
2. Marker Customization: Each earthquake is represented by a marker positioned according to its longitude and latitude. The size of the markers corresponds to the earthquake's magnitude, while the color represents the depth.
3. Interactive Popups: Clicking on a marker displays a popup with detailed information about the earthquake, enhancing the user experience.
4. Legend Implementation: A legend was added to the map, providing context for the marker sizes and colors, making the data easily interpretable.

### Deployment 
The project has been deployed and can be viewed at https://alvin-giang.github.io/Leaflet_Mapping/