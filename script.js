document.addEventListener("DOMContentLoaded", function () {
  // Función para desplazarse a la sección
  function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }

  // Función para abrir WhatsApp
  function openWhatsApp(number) {
    window.open('https://wa.me/' + number, '_blank');
  }

  // Eventos click para los íconos de redes sociales
  document.querySelector('.whatsapp').addEventListener('click', () => {
    openWhatsApp('+51945880566');
  });

  document.querySelector('.whatsapp-yelitza').addEventListener('click', () => {
    openWhatsApp('+51930245372');
  });

  document.querySelector('.facebook').addEventListener('click', () => {
    window.open('https://www.facebook.com/profile.php?id=100090524322334', '_blank');
  });

  document.querySelector('.instagram').addEventListener('click', () => {
    window.open('https://www.instagram.com/cynthia_yata/', '_blank');
  });

  document.querySelector('.tiktok').addEventListener('click', () => {
    window.open('https://www.tiktok.com/@consul_conoceteycrece', '_blank');
  });
});



  



