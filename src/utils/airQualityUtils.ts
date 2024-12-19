import { HealthAdvice } from '../types';

export const getAirQualityLevel = (aqi: number): HealthAdvice['level'] => {
  if (aqi <= 50) return 'good';
  if (aqi <= 100) return 'moderate';
  if (aqi <= 150) return 'unhealthy';
  if (aqi <= 200) return 'very-unhealthy';
  return 'hazardous';
};

export const getHealthAdvice = (aqi: number): HealthAdvice => {
  const level = getAirQualityLevel(aqi);
  
  const adviceMap: Record<HealthAdvice['level'], HealthAdvice> = {
    'good': {
      level: 'good',
      generalAdvice: 'Air quality is satisfactory. Enjoy outdoor activities!',
      sensitiveGroupsAdvice: 'Perfect conditions for outdoor activities.'
    },
    'moderate': {
      level: 'moderate',
      generalAdvice: 'Air quality is acceptable. Consider reducing prolonged outdoor exertion.',
      sensitiveGroupsAdvice: 'Sensitive individuals should consider limiting prolonged outdoor exposure.'
    },
    'unhealthy': {
      level: 'unhealthy',
      generalAdvice: 'Everyone may begin to experience health effects. Limit outdoor activities.',
      sensitiveGroupsAdvice: 'Avoid prolonged outdoor exposure. Stay indoors if possible.'
    },
    'very-unhealthy': {
      level: 'very-unhealthy',
      generalAdvice: 'Health warnings of emergency conditions. Avoid outdoor activities.',
      sensitiveGroupsAdvice: 'Stay indoors and keep activity levels low.'
    },
    'hazardous': {
      level: 'hazardous',
      generalAdvice: 'Health alert: everyone may experience serious health effects.',
      sensitiveGroupsAdvice: 'Remain indoors and keep activity levels low. Seek medical help if experiencing discomfort.'
    }
  };

  return adviceMap[level];
};