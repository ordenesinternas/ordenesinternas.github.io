function searchTable() {

  // Obtener el input y el filtro  
  var input = document.getElementById("searchInput");
  var filter = input.value.toLowerCase();
  
  // Obtener todas las filas de la tabla
  var rows = document.querySelectorAll("table tbody tr");

  // Recorrer las filas y ocultar las que no coinciden con el filtro
  rows.forEach(function(row) {

    // Obtener el texto de la fila 
    var text = row.textContent.toLowerCase();
    
    // Verificar si coincide con el filtro
    if (text.indexOf(filter) === -1) {
      // No coincide, ocultar fila
      row.style.display = "none"; 
    } else {
      // Coincide, mostrar fila
      row.style.display = "";
    }

  });

}