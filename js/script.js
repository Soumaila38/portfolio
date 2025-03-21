/* 
  script.js
  Contient la logique JavaScript pour le portfolio
*/

/**
 * Fonction appelée lorsqu'on clique sur "Voir mes projets"
 * Permet de faire défiler la page jusqu'à la section Projets
 */
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  /**
   * Gère l'événement de soumission du formulaire de contact
   * Affiche simplement un message dans la console ou un alert
   */
  function handleFormSubmit(event) {
    event.preventDefault(); // Empêche le rechargement de la page
  
    // Récupération des valeurs du formulaire
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
  
    // Vérification de base (pour l'exemple)
    if (!firstName || !lastName || !subject || !message) {
      alert("Veuillez remplir tous les champs du formulaire.");
      return false;
    }
  
    // Affichage dans la console (ou utilisation d'une API pour envoyer un email)
    console.log("Formulaire soumis par :", firstName, lastName);
    console.log("Sujet :", subject);
    console.log("Message :", message);
  
    // Affiche un message de confirmation à l'utilisateur
    alert("Merci pour votre message, " + firstName + " ! Nous vous répondrons rapidement.");
  
    // Réinitialisation du formulaire
    event.target.reset();
    return false;
  }
  
  /**
   * Fonction pour animer les barres de progression 
   * quand l'utilisateur fait défiler la page vers la section des compétences
   */
  window.addEventListener('scroll', () => {
    const skillsSection = document.querySelector('.skills-section');
    const progressBars = document.querySelectorAll('.progress');
  
    // Distance entre le haut de la page et la section compétences
    const skillsSectionTop = skillsSection.offsetTop;
    // Hauteur de la fenêtre
    const windowHeight = window.innerHeight;
    // Position actuelle du défilement
    const scrollPosition = window.scrollY;
  
    // Si la section est visible, on déclenche l'animation
    if (scrollPosition + windowHeight >= skillsSectionTop) {
      progressBars.forEach((bar) => {
        // On récupère la largeur à appliquer (depuis l'attribut style initial)
        const targetWidth = bar.style.width;
        // On réinitialise à 0 pour redéclencher l'animation
        bar.style.width = '0';
        // Petite astuce : forcer un reflow pour que l'animation reparte de zéro
        bar.getBoundingClientRect();
        // Puis on ré-applique la largeur finale
        bar.style.width = targetWidth;
      });
    }
  });
  