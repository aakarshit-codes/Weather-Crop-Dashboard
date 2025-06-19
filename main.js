import { renderTable } from './modules/table.js';
import { renderBarChart } from './modules/barGraph.js';


document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('./data/weatherCrop.json');
  const data = await response.json();

  renderTable(data);
  renderBarChart(data);

});
