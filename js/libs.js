//progreso actual
var currProgress = 0;
//esta la tarea completa
var done = false;
//cantidad total de progreso
var total = 100;

/**
 * funcion para actualizar el progreso
 *
 * @version 1.0
 */
function startProgress() {
	//recuperamos el elemento de progreso
	var prBar = document.getElementById("prog");
	//get the start button
	var startButt = document.getElementById("startBtn");
	//recuperamos el valor del texto
	var val = document.getElementById("numValue");
	//deshabilitamos el botón
	startButt.disabled = true;
	//actualiza la barra de progreso
	prBar.value = currProgress;
	//actualizamos el indicador visual con el texto
	val.innerHTML = Math.round((currProgress/total)*100)+"%";
	//incrementamos el valor del progreso cada vez que la función se ejecuta
	currProgress++;
	//comprobamos si hemos terminado
	if(currProgress>100) done = true;
	// sino hemos terminado, volvemos a llamar a la función después de un tiempo
	if(!done) {
	 	setTimeout("startProgress()", 100);
		//tarea terminada, habilitar el botón y resetear variables
	} else {
	  document.getElementById("startBtn").disabled = false;
	  done = false;
	  currProgress = 0;
	}
}
