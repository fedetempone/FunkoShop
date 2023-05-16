const sign_in_container = document.querySelector('.sign-in-container');
const sign_up_container = document.querySelector('.sign-up-container');
const registrarse = document.querySelector('.inputRegistrarse');
const iniciar_sesion = document.querySelector('.inputIniciarSesion');
const nombre = document.getElementById('name');
const email = document.getElementById('email');
const email_login = document.getElementById('email2');
const password_login = document.getElementById('password2');
const password = document.getElementById('password');
const parrafoNombres = document.querySelector(".alertas-names");
const parrafoEmail = document.querySelector(".alertas-email");  
const parrafoPassword = document.querySelector(".alertas-password"); 
const expresiones = { 
    checkEmail : /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/, 
    checkNombre : /(^[A-ZÁÉÍÓÚ]{1}([a-zñáéíóú]+){2,})(\s[A-ZÁÉÍÓÚ]{1}([a-zñáéíóú]+){2,})?$/,
    checkPassword : /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/
  }

document.addEventListener('click', e => {
    if (e.target.matches('.ok-account')) {
        sign_in_container.style.display = 'block';
        sign_up_container.style.display = "none";
    } else if (e.target.matches('.no-account')){
        sign_up_container.style.display = "block";
        sign_in_container.style.display = "none";
    }
})

registrarse.addEventListener('click', (e) => {
    e.preventDefault();
    parrafoNombres.innerHTML = ""; 
    parrafoEmail.innerHTML = "";
    parrafoPassword.innerHTML = "";
    let alertas = "";
    let entrar = false; 

    
    // Condiciones para validar el formulario

    if (!expresiones.checkNombre.test(nombre.value)){ //si la expresion regular (checknombre) es distinta al valor que ingresa el usuario como Nombre y Apellido Entonces
      alertas = `• Las Iniciales deben llevar Mayúsculas <br>• No puede haber mas de UN espacio <br>• Prohibido ingresar Símbolos y Números `  ; // Alerta equivale a este texto
      entrar = true; // si el usuario se equivoca en el ingreso de datos, la variable entrar pasa a valer true
      parrafoNombres.innerHTML = alertas; //se escribe debajo del input las condiciones para escribir bien los datos
      }
    
    if (!expresiones.checkEmail.test(email.value)){ //si la expresion regular (checkEmail) es distinta al valor que ingresa el usuario como Email Entonces
      alertas = `• El Email no es válido !` ; 
      entrar = true; 
      parrafoEmail.innerHTML = alertas; 
    }

    if (!expresiones.checkPassword.test(password.value)){ //si el mensaje que ingresa el usuario es menor a caracteres entonces...
      alertas = `• Minimo 8 Caracteres, Maximo 16 caracteres <br>• Al menos 1 Mayuscula y 1 Minuscula <br>• Al Menos un Digito <br>• No puede haber espacios en blanco <br>• Al menos un caracter especial `  ; // Alerta equivale a este texto 
      entrar = true; 
      parrafoPassword.innerHTML = alertas; 
    }

    if (!entrar){ //si entrar es distinta a true entonces ejecuta la funcion, ya que si entrar fuese True estaría entrando en los if, y no deberia ejecutarse la opcion de validacion
      validado(); //llamada a la funcion validado
      }
});

function validado(){ //definicion de funcion validado
    alert("USUARIO REGISTRADO MUCHAS GRACIAS");
    sign_up_container.style.display = "none";
    sign_in_container.style.display = 'block';
    // return location.reload(); //carga denuevo la url actual, como un refresh..
  }

iniciar_sesion.addEventListener('click', (e)=>{ 
  e.preventDefault();
  console.log('carga el click');
  console.log(email.value);
  console.log(email_login.value);
  console.log(password.value);
  console.log(password_login.value );
  if (email.value == email_login.value && password.value == password_login.value){
    alert('Usuario Logeado con Exito')
    return window.location.href = "../index.html";
  } else {
    alert('El Email y las contraseñas no coinciden.');
  }
});
  
