document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();
    const Nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const Contraseña = document.getElementById("contraseña").value;
    const Apellido = document.getElementById("apellido").value;

    const userData = {
      nombre: Nombre,
      email: email,
      contraseña: Contraseña,
      apellido: Apellido
    };

    localStorage.setItem("userData", JSON.stringify(userData));

    alert("Datos guardados");
  });