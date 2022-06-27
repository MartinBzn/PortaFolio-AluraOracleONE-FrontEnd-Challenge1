function aparecer() {
    var aparecidos = document.querySelectorAll(".aparecer");
  
    for (var i = 0; i < aparecidos.length; i++) {
      var windowAltura = window.innerHeight;
      var elementoTop = aparecidos[i].getBoundingClientRect().top;
      var elementoVisible = 150;
  
      if (elementoTop < windowAltura - elementoVisible) {
        aparecidos[i].classList.add("activo");
      } else {
        aparecidos[i].classList.remove("activo");
      }
    }
  }
  
  window.addEventListener("scroll", aparecer);
  