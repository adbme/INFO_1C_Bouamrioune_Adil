// BLOG 

// Fonction pour ajouter un commentaire
function addComment(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const commentInput = document.getElementById('comment');
    const commentList = document.getElementById('commentList');
    const counter = document.getElementById('counter');
    const ratingInputs = document.getElementsByName('rating');
    let ratingValue = 0;

    // Récupérer la valeur de la notation
    for (let i = 0; i < ratingInputs.length; i++) {
        if (ratingInputs[i].checked) {
            ratingValue = parseInt(ratingInputs[i].value);
            break;
        }
    }

    const name = nameInput.value;
    const comment = commentInput.value;

    if (name && comment && ratingValue > 0) {
        const listItem = document.createElement('li');
        listItem.className = "commentaire"
        const stars = getStarsHTML(ratingValue);
        listItem.innerHTML = `<strong>${name}:</strong> ${comment}<br>${stars}`;
        commentList.appendChild(listItem);

        nameInput.value = '';
        commentInput.value = '';

        sendEmail(name, comment, ratingValue);

        // Mettre à jour le compteur
        const currentCount = parseInt(counter.innerText.split(':')[1].trim());
        counter.innerText = `Personnes ayant évalué: ${currentCount + 1}`;
    }
}

// Fonction pour générer le HTML des étoiles
function getStarsHTML(ratingValue) {
    let starsHTML = '';
    for (let i = 0; i < ratingValue; i++) {
        starsHTML += '&#9733;';
    }
    return starsHTML;
}

// Fonction pour envoyer un e-mail
function sendEmail(name, comment, ratingValue) {
    const subject = 'Nouveau commentaire sur le blog de massage';
    const body = `Nom: ${name}\nCommentaire: ${comment}\nNotation: ${ratingValue} étoiles`;
    const mailtoLink = `mailto:adil.bouamrioune@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
}

// Écouteur d'événement pour soumettre le formulaire de commentaire
const commentForm = document.getElementById('commentForm');
commentForm.addEventListener('submit', addComment);