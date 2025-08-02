import React, { useState } from 'react';
import ChartCard from './ChartCard';

function Dashboard() {
  const [charts, setCharts] = useState<number[]>([]);

  const addChart = () => {
    setCharts([...charts, charts.length + 1]);
  };

  return (
    <div>
      <button
        onClick={addChart}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        ➕ Add Chart
      </button>
      <div className="grid grid-cols-2 gap-4">
        {charts.map((id) => (
          <ChartCard key={id} id={id} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;