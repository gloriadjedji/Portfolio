const boutonMenu = document.querySelector(".bouton-menu");
const listeMenu = document.querySelector("nav ul");
boutonMenu.addEventListener('click', function () {
  listeMenu.classList.toggle('menu-ouvert');
});

// Ferme le menu automatiquement après avoir cliqué sur un lien
// (utile en mobile, sinon le menu reste ouvert après le clic)
const liensMenu = document.querySelectorAll('nav ul a');

liensMenu.forEach(function (lien) {
  lien.addEventListener('click', function () {
    listeMenu.classList.remove('menu-ouvert');
  });
});

// -----------------------------------------------------------
// VALIDATION DU FORMULAIRE DE CONTACT
// -----------------------------------------------------------

const formulaire = document.getElementById('Formulaire-contact');
const champNom = document.getElementById('nom');
const champEmail = document.getElementById('email');
const champMessage = document.getElementById('message');
const zoneRetour = document.getElementById('formulaire-retour');

formulaire.addEventListener('submit', function (evenement) {

  // Empêche le comportement par défaut du formulaire
  // (qui rechargerait la page)
  evenement.preventDefault();
  const nom = champNom.value.trim();
  const email = champEmail.value.trim();
  const message = champMessage.value.trim();
   // Vérification : champs vides
  if (nom === '' || email === '' || message === '') {
    alert('Merci de remplir tous les champs avant d\'envoyer.', 'erreur');
    return;
  }
  // Si tout est correct : affichage du message de confirmation
  alert('Message envoyé ! Je vous répondrai rapidement.', 'succes');
  // Réinitialise le formulaire pour un éventuel nouvel envoi
  formulaire.reset();
});
// Vérifie qu'une adresse email a un format valide (texte@texte.texte)
function emailEstValide(valeur) {
  const motif = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return motif.test(valeur);
}

// Affiche un message dans la zone de retour, avec une couleur selon le type
function alert(texte, type) {
  zoneRetour.textContent = texte;
  zoneRetour.style.color = (type === 'erreur') ? '#b00020' : '#1a7a1a';
}
