export interface AirQualityData {
  id: string;
  location: {
    lat: number;
    lng: number;
    name: string;
  };
  measurements: {
    pm25: number;
    pm10: number;
    no2: number;
    o3: number;
  };
  timestamp: string;
  aqi: number;
}

export interface HealthAdvice {
  level: 'good' | 'moderate' | 'unhealthy' | 'very-unhealthy' | 'hazardous';
  generalAdvice: string;
  sensitiveGroupsAdvice: string;
}