document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const loginEmail = document.getElementById("email").value;
    const loginPassword = document.getElementById("contraseña").value;

    const storedUserData = localStorage.getItem("userData");

    if (storedUserData) {
      const user = JSON.parse(storedUserData);

      if (user.email === loginEmail && user.contraseña === loginPassword) {

        document.getElementById("message").textContent = "Inicio de sesión exitoso!";
      } else {

        document.getElementById("message").textContent = "Correo electrónico o contraseña incorrectos.";
      }
    } else{
      document.getElementById("message").textContent = "No hay datos de usuario registrados.";
    }
  });