import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function ChartCard({ id }: { id: number }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = (canvasRef.current as HTMLCanvasElement).getContext('2d');
    const chart = new Chart(ctx!, {
      type: 'line',
      data: {
        labels: Array.from({ length: 10 }, (_, i) => i.toString()),
        datasets: [
          {
            label: 'Live Data',
            data: Array.from({ length: 10 }, () => Math.random() * 100),
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.3,
          },
        ],
      },
    });

    const interval = setInterval(() => {
      chart.data.datasets[0].data.push(Math.random() * 100);
      chart.data.labels!.push(chart.data.labels!.length.toString());
      if (chart.data.datasets[0].data.length > 10) {
        chart.data.datasets[0].data.shift();
        chart.data.labels!.shift();
      }
      chart.update();
    }, 1000);

    return () => {
      clearInterval(interval);
      chart.destroy();
    };
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default ChartCard;