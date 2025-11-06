"use client";

import { memo } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Filler
} from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Filler);

interface Props {
  title: string;
  series: number[];
  labels: string[];
  color?: string;
  subtitle?: string;
}

function ChartCardImpl({ title, series, labels, color = '#00E5FF', subtitle }: Props) {
  const data = {
    labels,
    datasets: [
      {
        label: title,
        data: series,
        borderColor: color,
        backgroundColor: (ctx: any) => {
          const { ctx: c } = ctx.chart;
          const grad = c.createLinearGradient(0, 0, 0, 300);
          grad.addColorStop(0, color + '66');
          grad.addColorStop(1, color + '00');
          return grad;
        },
        tension: 0.35,
        pointRadius: 0,
        fill: true
      }
    ]
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false }, tooltip: { intersect: false, mode: 'index' as const } },
    scales: {
      x: { display: false, grid: { display: false } },
      y: { display: false, grid: { display: false } }
    }
  };

  return (
    <div className="card p-5">
      <div className="flex items-baseline justify-between mb-3">
        <h3 className="font-semibold">{title}</h3>
        {subtitle && <span className="text-xs subtext">{subtitle}</span>}
      </div>
      <div className="h-40">
        <Line data={data} options={options} aria-label={`${title} line chart`} />
      </div>
    </div>
  );
}

export default memo(ChartCardImpl);
