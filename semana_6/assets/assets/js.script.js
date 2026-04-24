document.getElementById("agregar").addEventListener("click", function() {

    let nombre = document.getElementById("nombre").value;
     let nota = document.getElementById("nota").value;
 
  // Validación
  if (nombre === "" || nota === "") {
    alert("Debe completar todos los campos");
    return;
  }
 
  let fila = document.createElement("tr");
 
  let c1 = document.createElement("td");
  c1.textContent = nombre;
 
  let c2 = document.createElement("td");
  c2.textContent = nota;
 
  let c3 = document.createElement("td");
 
  // Lógica de estado
  if (nota >= 4.0) {
    c3.textContent = "Aprobado";
    c3.style.color = "green";
  } else {
    c3.textContent = "Reprobado";
    c3.style.color = "red";
  }
 
  fila.appendChild(c1);
  fila.appendChild(c2);
  fila.appendChild(c3);
 
  document.getElementById("tabla").appendChild(fila);
 
  // Limpiar inputs
  document.getElementById("nombre").value = "";
  document.getElementById("nota").value = "";
});