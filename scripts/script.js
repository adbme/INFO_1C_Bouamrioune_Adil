// header
function toggleNav() {
    var navLinks = document.getElementById('nav-links');
    var aside = document.getElementById('asside')
    var logo = document.getElementById('logo');

    if (navLinks.style.display === 'block') {
        aside.style.marginTop = '0'
        navLinks.style.display = 'none'
        // logo.style.height = "50px"




    } else {
        navLinks.style.display = 'block';
        aside.style.marginTop = '80px'
        // logo.style.height = "100px"

    }
}


window.addEventListener("resize", function () {
    var screenWidth = window.innerWidth;
    var navLinks = document.getElementById("nav-links");
    if (screenWidth > 768) {
        navLinks.style.display = "flex"

    } else {
        navLinks.style.display = "none";
    }
});

// contact

function mail() {
    window.location.href = "contact/contactmail.html";
}

function call() {
    window.location.href = "contact/contactappel.html";
}

// tarifs
function rdv2() {
    window.location.href = "web/contact.html";
}

function rdv() {
    window.location.href = "contact.html";
}

// close pub

function fermer() {
    var asside = document.getElementById('asside')

    asside.style.display = "none";

}


// apropos

function contact() {
    window.location.href = "../web/contact.html";
}


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



// CONTACT MAIL FORM

// FORM

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
    // This function will display the specified tab of the form...
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    //... and fix the Previous/Next buttons:
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Suivant";
    }
    //... and run a function that will display the correct step indicator:
    fixStepIndicator(n)
}

function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form...
    if (currentTab >= x.length) {
        // ... the form gets submitted:
        document.getElementById("regForm").submit();
        return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
}

function validateForm() {
    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        // if (y[i].value == "") {
        //     // add an "invalid" class to the field:
        //     y[i].className += " invalid";
        //     // and set the current valid status to false
        //     valid = false;
        // }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // return the valid status
}

function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class on the current step:
    x[n].className += " active";
}





