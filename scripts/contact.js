// FORMULAIRE de w3school (dans sources)

var currentTab = 0; // L'onglet actuel est défini comme le premier onglet (0)
showTab(currentTab); // Affiche l'onglet actuel

function showTab(n) {
    // Cette fonction affiche l'onglet spécifié du formulaire...
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    //... et fixe les boutons Précédent/Suivant :
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Soumettre";
    } else {
        document.getElementById("nextBtn").innerHTML = "Suivant";
    }
    //... et exécute une fonction qui affiche l'indicateur d'étape correct :
    fixStepIndicator(n)
}

function nextPrev(n) {
    // Cette fonction déterminera quel onglet afficher
    var x = document.getElementsByClassName("tab");
    // Quitte la fonction si un champ de l'onglet actuel est invalide :
    if (n == 1 && !validateForm()) return false;
    // Masque l'onglet actuel :
    x[currentTab].style.display = "none";
    // Augmente ou diminue l'onglet actuel de 1 :
    currentTab = currentTab + n;
    // si vous avez atteint la fin du formulaire...
    if (currentTab >= x.length) {
        // ... le formulaire est soumis :
        document.getElementById("regForm").submit();
        return false;
    }
    // Sinon, affiche l'onglet correct :
    showTab(currentTab);
}

function validateForm() {
    // Cette fonction gère la validation des champs du formulaire
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    // Une boucle qui vérifie chaque champ de saisie de l'onglet actuel :
    for (i = 0; i < y.length; i++) {
        // Si un champ est vide...
        if (y[i].value == "") {
            // ajoute une classe "invalide" au champ :
            y[i].className += " invalid";
            // et défini le statut de validité actuel sur false
            valid = false;
        }
    }
    // Si le statut de validité est true, marque l'étape comme terminée et valide :
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // renvoie le statut de validité
}

function fixStepIndicator(n) {
    // Cette fonction supprime la classe "active" de toutes les étapes...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... et ajoute la classe "active" à l'étape actuelle :
    x[n].className += " active";
}