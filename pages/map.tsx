import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

const Map = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiemluZWJ6aW5lYiIsImEiOiJjbGU2eTh0OGwwMDlkM3drYmp4dXByMGtsIn0.rGX7g0pCHgusl6pzafYAYw';

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-9.2311,32.3123],
      zoom: 12
    });

    new mapboxgl.Marker()
      .setLngLat([-9.2311, 32.3123])
      .addTo(map);
  }, []);

  return (
    <div className="map-container" ref={mapContainer} />
    
  );
};

export default Map;
