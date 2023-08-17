let images = [
    "../img/1.webp",
    "../img/2.webp",
    "../img/3.webp",
    "../img/4.webp",
  ];
  let contador = 0;
  
  function rotarImagenes() {
    contador++;
    const imagen = document.getElementById("imagen");
    imagen.style.opacity = 0;
    setTimeout(() => {
      imagen.src = images[contador % images.length];
      imagen.style.opacity = 1; 
    }, 0); 
  }
  
  window.onload = function () {
    rotarImagenes();
    setInterval(rotarImagenes, 3000);
  };
  