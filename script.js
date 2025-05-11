document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-links a');

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});


//Sweet Alert
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // blocca invio momentaneamente
  const form = this;

  Swal.fire({
    title: 'Conferma invio?',
    text: 'Vuoi inviare il messaggio?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Sì, invia',
    cancelButtonText: 'Annulla'
  }).then((result) => {
    if (result.isConfirmed) {
      form.submit(); // invia davvero il modulo a formsubmit.co
      Swal.fire({
        title: 'Messaggio inviato!',
        text: 'Grazie per averci contattato.',
        icon: 'success'
      });
    }
  });
});


// Mostra o nasconde il bottone in base allo scroll
window.onscroll = function() {
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

// Funzione per tornare in cima
document.getElementById("scrollTopBtn").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()



// Funzione per il caricamento della pagina
window.addEventListener('load', function() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.style.display = 'none'; // Mostra il loader all'inizio
  }
});





