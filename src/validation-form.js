const nombre = document.getElementById("FormControlInput1"); //traemos el elemento input Nombre y Apellido, a través de su ID
const email = document.getElementById("FormControlInput2"); //traemos el elemento input Email, a través de su ID
const form = document.getElementById("form"); //traemos el elemento form, a través de su ID
const parrafoNombres = document.getElementById("alertas-names"); //traemos el elemento el parrafo alertas dentro de nombre, a través de su ID
const parrafoEmail = document.getElementById("alertas-email");  //traemos el elemento el parrafo alertas dentro de email, a través de su ID
const parrafoMensaje = document.getElementById("alertas-msg"); //traemos el elemento el parrafo alertas dentro de textarea, a través de su ID
const mensaje = document.getElementById("FormControlTextarea1"); //traemos el elemento input (cuerpo del mensaje), a través de su ID

const expresiones = { // delcaramos un objeto expresiones con el que validamos el nombre y el email del formulario a traves de expresiones regulares
  checkEmail : /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/, 
  checkNombre : /(^[A-ZÁÉÍÓÚ]{1}([a-zñáéíóú]+){2,})(\s[A-ZÁÉÍÓÚ]{1}([a-zñáéíóú]+){2,})?$/ 
}

form.addEventListener("submit", e=> { //al presionar el boton enviar se dispara la funcion flecha
    e.preventDefault(); //cancela el evento si es cancelable, entonces la acción predeterminada que pertenece al evento no ocurrirá.
    
    // Declaracion de variables que viven solo en esta funcion
    parrafoNombres.innerHTML = ""; 
    parrafoEmail.innerHTML = "";
    parrafoMensaje.innerHTML = "";
    let alertas = "";
    let entrar = false; 

    
    // Condiciones para validar el formulario

    if (!expresiones.checkNombre.test(nombre.value)){ //si la expresion regular (checknombre) es distinta al valor que ingresa el usuario como Nombre y Apellido Entonces
      alertas = `Las Iniciales deben llevar Mayúsculas <br> No puede haber mas de UN espacio <br> Prohibido ingresar Símbolos y Números `  ; // Alerta equivale a este texto
      entrar = true; // si el usuario se equivoca en el ingreso de datos, la variable entrar pasa a valer true
      parrafoNombres.innerHTML = alertas; //se escribe debajo del input las condiciones para escribir bien los datos
      }
    
    if (!expresiones.checkEmail.test(email.value)){ //si la expresion regular (checkEmail) es distinta al valor que ingresa el usuario como Email Entonces
      alertas = `El Email no es válido !` ; 
      entrar = true; 
      parrafoEmail.innerHTML = alertas; 
    }

    if (mensaje.value.length < 10){ //si el mensaje que ingresa el usuario es menor a caracteres entonces...
      alertas = `Mensaje demasiado corto!`; 
      entrar = true; 
      parrafoMensaje.innerHTML = alertas; 
    }

    if (!entrar){ //si entrar es distinta a true entonces ejecuta la funcion, ya que si entrar fuese True estaría entrando en los if, y no deberia ejecutarse la opcion de validacion
      validado(); //llamada a la funcion validado
      }
})

function validado(){ //definicion de funcion validado
  alert("Mensaje Enviado, Gracias por su tiempo !");
  return location.reload(); //carga denuevo la url actual, como un refresh..
}