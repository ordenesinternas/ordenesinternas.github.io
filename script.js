const searchInput = document.getElementById('search');
const rows = document.querySelectorAll('tbody tr');

searchInput.addEventListener('keyup', function() {

  const searchTerm = this.value.toLowerCase();

  rows.forEach(row => {
    const td = row.querySelector('td');
    const text = td.textContent.toLowerCase();
    row.style.display = text.indexOf(searchTerm) !== -1 ? '' : 'none';
  });

});