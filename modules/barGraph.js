export function renderBarChart(data) {
  // Aggregate rainfall by region
  const regionRainfallMap = data.reduce((acc, item) => {
    acc[item.region] = (acc[item.region] || 0) + item.rainfall_mm;
    return acc;
  }, {});

  // Convert to array and sort
  const sortedRegions = Object.entries(regionRainfallMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 7);

  const labels = sortedRegions.map(([region]) => region);
  const values = sortedRegions.map(([_, rainfall]) => rainfall);

  // Chart config
  new Chart(document.getElementById('barChart'), {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'Total Rainfall (mm)',
        data: values,
        backgroundColor: '#f97316', // Orange
        borderColor: '#111111',     // Black border
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          ticks: { color: '#111' },
          grid: { color: '#e5e5e5' }
        },
        x: {
          ticks: { color: '#111' },
          grid: { display: false }
        }
      },
      plugins: {
        legend: {
          labels: { color: '#111' }
        }
      }
    }
  });
}
