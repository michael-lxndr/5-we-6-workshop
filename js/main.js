
// console.log("Hola, Ingeniería Web");

// buscar los elementos del DOM

const title = document.querySelector("#titulo");
const welcomeback = document.querySelector("#bienvenido");
const button = document.querySelector("#boton");
let i = 0;
// escuchar el evento click del botón
button.addEventListener("click", () => {
	// cambiar el contenido del título
	if (i % 2 == 0) {
		welcomeback.textContent = "Bienvenido a JS!";
	}
	else {
		welcomeback.textContent = "Bienvenido";
	}
	i++;
});



// formulario donde el usuario pueda poner su nombre y el boton decir enviar y se lanza un mensaje q diga bienvenido

const form = document.querySelector("form");
const msg = document.querySelector("#mensaje");

form.addEventListener("submit", (event) => {
	event.preventDefault(); // evitar que se recargue la página
	const nombre = (document.querySelector("#nombre").value).trim();

	if (nombre == "") {
		msg.textContent = "Por favor, ingrese su nombre.";
	}
	else {
		msg.textContent = `Bienvenido, ${nombre}!`;
	}
});



// Personaliza tu tarjeta

const tarjeta = document.querySelector("#tarjeta");
const botonesColor = document.querySelectorAll("[data-color]");
const botonRestablecer = document.querySelector("#restablecer");
const colorOriginal = getComputedStyle(tarjeta).backgroundColor;

botonesColor.forEach((boton) => {
	boton.addEventListener("click", () => {
		tarjeta.style.backgroundColor = boton.dataset.color;
	});
});

botonRestablecer.addEventListener("click", () => {
	tarjeta.style.backgroundColor = colorOriginal;
});
