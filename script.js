$(document).ready(function () {
  // Desplazamiento suave al hacer clic en el botón
  $('a[href^="#"]').on('click', function (event) {
      event.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });

  // Cierre del menu al hacer clic en un enlace
  $('.navbar-nav a').on('click', function () {
      $('.navbar-collapse').collapse('hide');
  });
})


$(document).ready(function() {
    var navbar = $(".navbar");

    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) { 
            navbar.addClass("fixed-top");
        } else {
            navbar.removeClass("fixed-top");
        }
    });
});


function hideNavbar() {
    document.querySelector('.navbar').style.display = 'none';
}

function showNavbar() {
    document.querySelector('.navbar').style.display = 'block';
}

function showTooltip() {
    document.getElementById('whatsappTooltip').style.display = 'block';
}

function hideTooltip() {
    document.getElementById('whatsappTooltip').style.display = 'none';
}


document.addEventListener("DOMContentLoaded", function () {
    // Cambia el color al pasar el mouse sobre la tarjeta de categoría
    const categoryCards = document.querySelectorAll(".category-card");
    categoryCards.forEach(card => {
        card.addEventListener("mouseenter", function () {
            this.style.backgroundColor = "#efef66"; // Cambia el color al pasar el mouse
        });

        card.addEventListener("mouseleave", function () {
            this.style.backgroundColor = "#fff"; // Restaura el color original al salir del mouse
        });
    });

    // Añade la funcionalidad del botón "Ver más"
    const moreButtons = document.querySelectorAll(".more-button");
    moreButtons.forEach(button => {
        button.addEventListener("click", function () {
            const description = this.previousElementSibling;
            description.classList.toggle("expanded");
            this.textContent = description.classList.contains("expanded") ? "Ver menos" : "Ver más";
        });
    });
});


    $(document).ready(function(){
        $('.slick-slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
        });
    });

$(document).ready(function(){
    $('.slick-slider design-slick-slider').slick({
      slidesToShow: 5,  // Número de íconos mostrados a la vez
      slidesToScroll: 2,  // Número de íconos a desplazar
      autoplay: true,  // Activar el modo automático
      autoplaySpeed: 1000,  // Velocidad de cambio en milisegundos (ajusta según prefieras)
    });
  });


  function scrollToTop() {
    // Desplaza suavemente hacia arriba
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  

