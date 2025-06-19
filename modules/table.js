export function renderTable(data) {
  // Sort by rainfall descending
  const topRegions = [...data]
    .sort((a, b) => b.rainfall_mm - a.rainfall_mm)
    .slice(0, 7);

  // Build table HTML
  const tableHTML = `
    <div class="overflow-x-auto">
      <table class="min-w-full border border-gray-200 text-sm text-left">
        <thead class="bg-orange-100 text-black">
          <tr>
            <th class="px-4 py-2">Region</th>
            <th class="px-4 py-2">Month</th>
            <th class="px-4 py-2">Crop</th>
            <th class="px-4 py-2">Rainfall (mm)</th>
            <th class="px-4 py-2">Yield (tonnes)</th>
          </tr>
        </thead>
        <tbody class="bg-white text-gray-700">
          ${topRegions.map(row => `
            <tr class="border-t border-gray-200">
              <td class="px-4 py-2">${row.region}</td>
              <td class="px-4 py-2">${row.month}</td>
              <td class="px-4 py-2">${row.crop}</td>
              <td class="px-4 py-2">${row.rainfall_mm}</td>
              <td class="px-4 py-2">${row.crop_yield_tonnes}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;

  // Inject table into DOM
  document.getElementById('table-container').innerHTML = tableHTML;
}
