import { useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

const Map = () => {
    
  const [map, setMap] = useState(null);
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiemluZWJ6aW5lYiIsImEiOiJjbGU2eTh0OGwwMDlkM3drYmp4dXByMGtsIn0.rGX7g0pCHgusl6pzafYAYw';

    const initializeMap = () => {
      const mapInstance = new mapboxgl.Map({
        container: 'map-container',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-9.2311,32.3123],
        zoom: 12,
      });

      setMap(mapInstance);
    };

    if (!map) {
      initializeMap();
    }
  }, [map]);
  // ajouter scoter inforamtion 
  const scoters=[
    {
        id:1,
        name:"scoter1",
        location:{
            lat:32.3123,
            lng:-9.2311
        }
    },
    {
        id:2,
        name:"scoter2",
        location:{
            lat:32.3123,
            lng:-9.2311
        }
    },
    {
        id:3,
        name:"scoter3",
        location:{
            lat:32.3123,
            lng:-9.2311
        }
    },
]
// afficher marck
  return <><div id="map-container" style={{ width: '100%', height: '100vh' }} />
  </>;
};

export default Map;
