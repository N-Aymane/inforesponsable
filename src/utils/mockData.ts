import { AirQualityData } from '../types';

// Simulated data for Paris
export const generateMockData = (): AirQualityData[] => {
  const locations = [
    { name: 'Champs-Élysées', lat: 48.8738, lng: 2.2950 },
    { name: 'Montmartre', lat: 48.8867, lng: 2.3431 },
    { name: 'Bastille', lat: 48.8532, lng: 2.3698 },
    { name: 'Luxembourg Gardens', lat: 48.8462, lng: 2.3371 },
    { name: 'Eiffel Tower', lat: 48.8584, lng: 2.2945 }
  ];

  return locations.map((location) => ({
    id: Math.random().toString(36).substr(2, 9),
    location,
    measurements: {
      pm25: Math.random() * 50,
      pm10: Math.random() * 100,
      no2: Math.random() * 200,
      o3: Math.random() * 150
    },
    timestamp: new Date().toISOString(),
    aqi: Math.floor(Math.random() * 300)
  }));
};