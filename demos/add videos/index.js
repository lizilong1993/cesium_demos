import * as Cesium from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";



// Initialize the Cesium Viewer in the HTML element with the "cesiumContainer" ID.
const viewer = new Cesium.Viewer('cesiumContainer', {
    terrainProvider: Cesium.createWorldTerrain()
  });  

viewer.camera.flyTo({
    destination : Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
    orientation : {
      heading : Cesium.Math.toRadians(0.0),
      pitch : Cesium.Math.toRadians(-15.0),
    }
  });