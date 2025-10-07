function loadDashboard(file) {
  fetch(file)
    .then(response => {
      if (!response.ok) {
        throw new Error('Dashboard not found');
      }
      return response.text();
    })
    .then(html => {
      document.getElementById('dashboard-view').innerHTML = html;
    })
    .catch(error => {
      document.getElementById('dashboard-view').innerHTML = `<p style="color:red;">Error loading dashboard: ${error.message}</p>`;
    });
}