
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      const position = section.getBoundingClientRect().top;
      if (position < window.innerHeight) {
        section.classList.add('fadeIn');
      }
    });
  });
  


  // Sélectionne tous les liens de la navbar
  // Sélectionne tous les liens de la navbar
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  // Ajoute un écouteur d'événement sur chaque lien
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Empêche le comportement par défaut (rechargement de la page)
      e.preventDefault();

      // Récupère l'ID de la section cible
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      // Calculer la hauteur de la navbar
      const navbarHeight = document.querySelector('.navbar').offsetHeight;

      // Défile vers la section cible avec un défilement fluide, en ajustant pour la navbar
      window.scrollTo({
        top: targetElement.offsetTop - navbarHeight, // Soustraction de la hauteur de la navbar
        behavior: 'smooth'
      });
    });
  });
    