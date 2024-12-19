import { MapContainer, TileLayer, Circle, Popup } from 'react-leaflet';
import { AirQualityData } from '../types';
import { getAirQualityLevel } from '../utils/airQualityUtils';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  data: AirQualityData[];
}

const getCircleColor = (aqi: number): string => {
  const level = getAirQualityLevel(aqi);
  const colors = {
    'good': '#00E400',
    'moderate': '#FFFF00',
    'unhealthy': '#FF7E00',
    'very-unhealthy': '#FF0000',
    'hazardous': '#8F3F97'
  };
  return colors[level];
};

export default function Map({ data }: MapProps) {
  return (
    <MapContainer
      center={[48.8566, 2.3522]} // Paris center
      zoom={13}
      className="w-full h-[500px] rounded-lg shadow-lg"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {data.map((point) => (
        <Circle
          key={point.id}
          center={[point.location.lat, point.location.lng]}
          radius={500}
          pathOptions={{
            color: getCircleColor(point.aqi),
            fillColor: getCircleColor(point.aqi),
            fillOpacity: 0.7
          }}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-bold">{point.location.name}</h3>
              <p>AQI: {Math.round(point.aqi)}</p>
              <p>PM2.5: {Math.round(point.measurements.pm25)} µg/m³</p>
              <p>PM10: {Math.round(point.measurements.pm10)} µg/m³</p>
              <p>NO₂: {Math.round(point.measurements.no2)} ppb</p>
              <p>O₃: {Math.round(point.measurements.o3)} ppb</p>
            </div>
          </Popup>
        </Circle>
      ))}
    </MapContainer>
  );
}