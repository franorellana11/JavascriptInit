// console.log(document.querySelector("#container"));
// console.log(document.querySelector("#texto1"));

const texto1 = document.getElementById("texto1");
const form = document.querySelector("#form");

// console.log(texto1.innerHTML);

// const texto2 = document.getElementById("segundoTitulo");

// console.log(texto2.innerHTML);

// segundoTitulo.innerHTML = "<h2> HOLA FUI MODIFICADO DESDE JS</h2>";

// texto1.innerText = "Sucursales";

// const boton = document.getElementById("boton");

const mostrarEnConsola = (evento) => {
  evento.preventDefault();

  const formData = {
    name: form.nombre,
    deseaSuscribirse: form.suscripcion.checked,
    genero: form.genero.value,
  };
  console.log(formData);
};
// boton.addEventListener("click", mostrarEnConsola);
// boton.click();

// const form = document.querySelector("#form");

// console.log(form.nombre.value);
