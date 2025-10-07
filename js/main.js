function loadDashboard(file) {
  document.getElementById('dashboard-view').innerHTML =
    `<iframe src="${file}" style="width:100%;height:900px;border:none;"></iframe>`;
}