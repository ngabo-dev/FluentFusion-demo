import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale);

let chartInstance = null;

export function renderChart(data) {
  const ctx = document.getElementById('myChart').getContext('2d');

  // Destroy previous chart instance if it exists
  if (chartInstance) {
    chartInstance.destroy();
  }

  // Create a new chart instance
  chartInstance = new ChartJS(ctx, {
    type: 'doughnut',
    data: data,
    options: {
      responsive: true,
    },
  });
}