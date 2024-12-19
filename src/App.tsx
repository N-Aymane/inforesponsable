import { useState, useEffect } from 'react';
import { Wind } from 'lucide-react';
import Map from './components/Map';
import HealthAlert from './components/HealthAlert';
import AirQualityChart from './components/AirQualityChart';
import { generateMockData } from './utils/mockData';
import { getHealthAdvice } from './utils/airQualityUtils';
import { AirQualityData } from './types';

function App() {
  const [data, setData] = useState<AirQualityData[]>([]);
  const averageAQI = data.length 
    ? Math.round(data.reduce((acc, curr) => acc + curr.aqi, 0) / data.length)
    : 0;
  const healthAdvice = getHealthAdvice(averageAQI);

  useEffect(() => {
    // Initial data load
    setData(generateMockData());

    // Update data every 5 minutes
    const interval = setInterval(() => {
      setData(generateMockData());
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Wind className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-2xl font-bold text-gray-900">Air Quality Monitor</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-6">
          <HealthAlert advice={healthAdvice} />
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Real-time Air Quality Map</h2>
            <Map data={data} />
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Pollution Levels by Location</h2>
            <AirQualityChart data={data} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;