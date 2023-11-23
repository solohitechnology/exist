// LeafletMap.jsx

import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './mymap.css'; // Import your custom styles

const Mymap = () => {
  useEffect(() => {
    // Your Leaflet code goes here
    const map = L.map('map').setView([9.1000, 7.4951], 13); // Set to Gwarimpa, Abuja coordinates

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Custom icon for the marker
    const customIcon = L.icon({
      iconUrl: 'logo.png', // Replace with the path to your custom icon
      iconSize: [32, 32], // Size of the icon
      iconAnchor: [16, 32], // Anchor point of the icon (centered, bottom)
      popupAnchor: [0, -32], // Popup anchor (top)
    });

    // Add marker with custom icon
    L.marker([9.1000, 7.4951], { icon: customIcon }).addTo(map)
      .bindPopup('MAGIK WORLD01 - Gwarimpa, Abuja, Nigeria')
      .openPopup();
  }, []); // Ensure this effect runs only once after the initial render

  return (
    <>
      <div id="map" className="map-container"></div>
    </>
  );
};

export default Mymap;
