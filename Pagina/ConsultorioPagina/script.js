// Agrega funciones JavaScript aquí según sea necesario

function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Actualiza los selectores de clase para coincidir con los nombres de clase en HTML
const imagenWhatsapp = document.querySelector('.whatsapp');
const imagenWhatsappYelitza = document.querySelector('.whatsapp-yelitza');
const imagenFacebook = document.querySelector('.facebook');
const imagenInstagram = document.querySelector('.instagram');
const imagenTikTok = document.querySelector('.tiktok');

// Evento click para el icono de Whatsapp (abre la aplicación directamente)
imagenWhatsapp.addEventListener('click', () => {
  window.open('https://api.whatsapp.com/send?phone=51945880566&app=true', '_blank');
});

// Evento click para el icono de Whatsapp de Yelitza (otro enlace)
imagenWhatsappYelitza.addEventListener('click', () => {
  window.open('https://wa.me/+51930245372', '_blank');
});

// Eventos click para los otros iconos de redes sociales
imagenFacebook.addEventListener('click', () => {
  window.open('https://www.facebook.com/profile.php?id=100090524322334', '_blank');
});

imagenInstagram.addEventListener('click', () => {
  window.open('https://www.instagram.com/cynthia_yata/', '_blank');
});

imagenTikTok.addEventListener('click', () => {
  window.open('https://www.tiktok.com/@consul_conoceteycrece', '_blank');
});

  



