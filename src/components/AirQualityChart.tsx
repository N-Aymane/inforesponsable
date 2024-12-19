import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AirQualityData } from '../types';

interface AirQualityChartProps {
  data: AirQualityData[];
}

export default function AirQualityChart({ data }: AirQualityChartProps) {
  const chartData = data.map(d => ({
    name: d.location.name,
    AQI: Math.round(d.aqi),
    PM25: Math.round(d.measurements.pm25),
    PM10: Math.round(d.measurements.pm10),
    NO2: Math.round(d.measurements.no2),
    O3: Math.round(d.measurements.o3)
  }));

  return (
    <div className="h-[400px] w-full bg-white p-4 rounded-lg shadow-lg">
      <ResponsiveContainer>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="AQI" stroke="#8884d8" />
          <Line type="monotone" dataKey="PM25" stroke="#82ca9d" />
          <Line type="monotone" dataKey="PM10" stroke="#ffc658" />
          <Line type="monotone" dataKey="NO2" stroke="#ff7300" />
          <Line type="monotone" dataKey="O3" stroke="#00C49F" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}