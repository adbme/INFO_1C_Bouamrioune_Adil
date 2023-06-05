
// MESSAGE D'ERREURS EN FONCTION DE L'APPAREIL

// Détecter si l'utilisateur accède à partir d'un appareil mobile
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Vérifier si le numéro de téléphone est cliquable sur l'appareil de l'utilisateur
function isPhoneNumberClickable() {
    var anchor = document.createElement("a");
    anchor.href = "tel:+41768059778";
    return anchor.protocol === "tel:";
}

// Vérifier si le message d'alerte doit être affiché
if (!isMobileDevice() || !isPhoneNumberClickable()) {
    var mobileAlert = document.getElementById("mobile-alert");
    if (mobileAlert) {
        mobileAlert.style.display = "block";
    }
}