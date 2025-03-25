import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// Import leaflet CSS in a way that's compatible with the build system
import 'leaflet/dist/leaflet.css';

// Fix for Leaflet marker icons
const MapLocation = () => {
  useEffect(() => {
    // Fix Leaflet's default icon issue
    const L = require('leaflet');
    
    delete L.Icon.Default.prototype._getIconUrl;
    
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    });
  }, []);

  // Example coordinates (replace with your actual location)
  const position: [number, number] = [40.7128, -74.0060]; // New York City
  
  return (
    <div className="h-96 rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <div className="font-medium">Construction Company</div>
            <div className="text-sm">123 Construction Ave, Building City</div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapLocation;