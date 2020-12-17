function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}

function setCookie(cname, cvalue, exminutes) {
  var d = new Date();
  d.setTime(d.getTime() + (exminutes * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function deleteCookie(cname) {
  document.cookie = cname + "=; max-age=0;path=/";
}

function main() {
  let username = getCookie("username");
  document.getElementById("botonAplicarEstilo").addEventListener("click", guardarEstilo);
  aplicarEstilo();
  if (username) {
      saludarUsuario(username);
  } else {
      mostrarFormulario();
  }
}

function almacenarUsuario() {
  let usuario = document.getElementById("usuario").value;
  setCookie("username", usuario, 5);
  saludarUsuario(usuario);
}

function cerrarSesion() {
  document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  mostrarFormulario();
}

function mostrarFormulario() {
  let formulario = "<label for=\"usuario\">Introduzca su nombre de usuario</label> ";
  formulario += "<input type=\"text\" name=\"usuario\" id=\"usuario\"><br>";
  formulario += "<input type=\"button\" value=\"Iniciar sesión\" id=\"iniciarSesion\"></input>";
  document.getElementById("formularioIniciarSesion").innerHTML = formulario;
  document.getElementById("iniciarSesion").addEventListener("click", almacenarUsuario);
}

function saludarUsuario(usuario) {
  let botonCerrarSesion = "<input type=\"button\" value=\"Cerrar sesión\" id=\"cerrarSesion\">";
  document.getElementById("formularioIniciarSesion").innerHTML = "Bienvenido " + usuario + "<br>" + botonCerrarSesion;
  document.getElementById("cerrarSesion").addEventListener("click", cerrarSesion);
}

function guardarEstilo() {
  let colorFondo = document.getElementById("colorFondo").value;
  let colorParrafo = document.getElementById("colorParrafo").value;
  let tamañoLetra = document.getElementById("tamañoLetra").value;
  setCookie("colorFondo", colorFondo, 5);
  setCookie("colorParrafo", colorParrafo, 5);
  setCookie("tamañoLetra", tamañoLetra, 5);
  aplicarEstilo();
}

function aplicarEstilo() {
  let colorFondo = getCookie("colorFondo");
  if (colorFondo) {
      document.body.style.backgroundColor = colorFondo;
      document.getElementById("colorFondo").value = colorFondo;
  }
  let colorParrafo = getCookie("colorParrafo");
  if (colorParrafo) {
      document.body.style.color = colorParrafo;
      document.getElementById("colorParrafo").value = colorParrafo;
  }
  let tamañoLetra = getCookie("tamañoLetra");
  if (tamañoLetra) {
      document.body.style.fontSize = tamañoLetra + "rem";
      document.getElementById("tamañoLetra").value = tamañoLetra;
  }
}