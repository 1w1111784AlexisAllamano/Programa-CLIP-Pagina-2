window.onload = function () {
	let elemento = document.getElementById("btn_adivinanza");
	elemento.onmouseover = function (e) {

		elemento.innerHTML = "¿Te crees un experto? ¡Demostralo y ganá!";
	};
	elemento.onmouseout = function (e) {

		elemento.innerHTML = "!!!";
	};
}

let btn_verPregunta = document.getElementById('ver-pregunta');
let h1Pregunta = document.getElementById('h1Pregunta');
let txt_rta = document.getElementById('txt_rta');
let btn_reintentar = document.getElementById('Reintentar');
let btn_enviarRespuesta = document.getElementById('enviarRespuesta');
let h1Intentos = document.getElementById('intentos');
let pregunta = document.getElementById('pregunta');

var totalTime = 10;
var intentos = 5;
var boolean = false;

btn_verPregunta.addEventListener("click", updateClock);
btn_reintentar.addEventListener("click", updateClock);
btn_enviarRespuesta.addEventListener("click", verificarRespuesta);

function updateClock() {

	txt_rta.removeAttribute('disabled', "");
	btn_verPregunta.setAttribute('disabled', "");
	btn_reintentar.removeAttribute('hidden', '');


	h1Pregunta.removeAttribute('hidden', '')

	document.getElementById('tiempo').innerHTML = totalTime + ' Seg';

	if (totalTime == 0) {

		document.getElementById('tiempo').innerHTML = '-- Seg';
		totalTime = 5;
		txt_rta.setAttribute('disabled', "");
		txt_rta.value = "";
		btn_enviarRespuesta.setAttribute('disabled', "");
		intentos--;
		h1Intentos.innerHTML = (intentos - 1) + " intentos"

		verificarIntentos();


	} else {
		totalTime -= 1;
		if (totalTime == 4) {
			btn_enviarRespuesta.removeAttribute('disabled', "");
		}
		if(boolean == false){
			setTimeout("updateClock()", 1000);
		}
		
	}


}

function verificarRespuesta() {
	if (txt_rta.value === "Bugatti Veyron") {
		
		var Div = document.createElement("div");
		var currentDiv = document.getElementById("previoAlertas");
		Div.setAttribute('class', 'alert alert-success');
		var contenido = document.createTextNode("¡Excelente! El Bugatti Veyron en el año 2005 alcanzó los 407 km/h y se convirtió en el primer hiperdeportivo de la historia. Sin embargo, el primer vehículo de competición en lograr tal record fue el Porsche 917 en 1960. Para conseguir tu descuento, envía un correo con el código LVDESC.");
		Div.appendChild(contenido);
		pregunta.insertBefore(Div, currentDiv);
		btn_enviarRespuesta.setAttribute('disabled', "");
		btn_reintentar.setAttribute('disabled', '');
		totalTime = '--';
		boolean = true;
	}
	else {
		btn_enviarRespuesta.setAttribute('disabled', "");
	}
}

function verificarIntentos() {
	var Div = document.createElement("div");
	var currentDiv = document.getElementById("previoAlertas");

	switch (intentos) {
		case 1: {
			Div.setAttribute('class', 'alert alert-danger');
			var contenido = document.createTextNode("Perdiste. La respuesta era: Bugatti Veyron. Pero no te preocupes, cada semana cambiamos la pregunta para que puedas ganar");
			Div.appendChild(contenido);
		} break;

		case 2: {
			Div.setAttribute('class', 'alert alert-warning');
			var contenido = document.createTextNode("Otra pista: Es de una escudería Italiana");
			Div.appendChild(contenido);
		} break;

		case 3: {
			Div.setAttribute('class', 'alert alert-warning');
			var contenido = document.createTextNode("Primera pista: Es un coche europeo");
			Div.appendChild(contenido);
		} break;

		case 4: {
			Div.setAttribute('class', 'alert alert-primary');
			var contenido = document.createTextNode("Parece que fallaste, volvé a intentarlo.");
			Div.appendChild(contenido);
		} break;

		default: ; break;
	}

	pregunta.insertBefore(Div, currentDiv);
}

