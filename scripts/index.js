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

// fermer pub

function fermer() {
    var asside = document.getElementById('asside')

    asside.style.display = "none";

}


// apropos

function contact() {
    window.location.href = "../web/contact.html";
}


