import { AlertTriangle } from 'lucide-react';
import { HealthAdvice } from '../types';

interface HealthAlertProps {
  advice: HealthAdvice;
}

export default function HealthAlert({ advice }: HealthAlertProps) {
  const bgColors = {
    'good': 'bg-green-100 border-green-500',
    'moderate': 'bg-yellow-100 border-yellow-500',
    'unhealthy': 'bg-orange-100 border-orange-500',
    'very-unhealthy': 'bg-red-100 border-red-500',
    'hazardous': 'bg-purple-100 border-purple-500'
  };

  return (
    <div className={`rounded-lg p-4 border-l-4 ${bgColors[advice.level]} mb-4`}>
      <div className="flex items-center">
        <AlertTriangle className="h-5 w-5 mr-2" />
        <h3 className="font-semibold">Health Advisory</h3>
      </div>
      <div className="mt-2">
        <p className="mb-2">{advice.generalAdvice}</p>
        <p className="font-medium">Sensitive Groups:</p>
        <p>{advice.sensitiveGroupsAdvice}</p>
      </div>
    </div>
  );
}