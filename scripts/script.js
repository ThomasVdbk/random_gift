// Tableau pour stocker les prénoms
let tableauPrenoms = [];


function validerPrenom(prenom) {
    let prenomRegExp = new RegExp("^[a-zA-Z0-9_]{1}");
    if (!prenomRegExp.test(prenom)) {
        throw new Error("Le prénom n'est pas valide.");
    }
}

function ajouterPrenom() {
    // Récupérer la valeur du champ de texte avec id "prenom" et ajouter le prénom au tableau
    const prenom = document.getElementById('prenom').value;
    validerPrenom(prenom);
    tableauPrenoms.push(prenom);
    // Afficher le tableau dans la console 
    console.log("Tableau de prénoms :", tableauPrenoms);
    // Effacer le champ de texte au click
    document.getElementById('prenom').value = '';
}


function afficherPrenomsAjoute() {
    const listePrenoms = document.getElementById('listePrenoms');
    // Effacer la liste existante
    listePrenoms.innerHTML = '';
    // Ajouter titre dès le premier prénom saisi
    const titleListItem = document.createElement('h3');
    titleListItem.textContent = "Liste des participants ajoutés : ";
    listePrenoms.appendChild(titleListItem);
    // Ajouter chaque prénom à la liste
    tableauPrenoms.forEach((prenom) => {
        const listItem = document.createElement('li');
        listItem.textContent = prenom;
        listePrenoms.appendChild(listItem);
    });
}


const melangerTableau = function () {
    let prenomsMelanges = [...tableauPrenoms];
    let quantitePrenoms = prenomsMelanges.length;
    // Mélanger le tableau algorithme de Fisher-Yates
    for (let i = quantitePrenoms - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [prenomsMelanges[i], prenomsMelanges[j]] = [prenomsMelanges[j], prenomsMelanges[i]];
    }
    return prenomsMelanges;
};


function afficherPaire(tableau) {
    const listePrenomsMelange = document.getElementById('listePrenomsMelange');
    const titleListItem = document.createElement('h3');
    titleListItem.textContent = "Nouveau tirage de participants en paire";
    listePrenomsMelange.appendChild(titleListItem);
    const olListItem = document.createElement('ol');
    listePrenomsMelange.appendChild(olListItem);
    for (let k = 0; k < tableau.length; k += 2) {
        const listItem = document.createElement('li');
        listItem.textContent = tableau[k] + " et " + tableau[k + 1];
        olListItem.appendChild(listItem);
    }
}


function afficherChaine(tableau) {
    const titleListItem = document.createElement('h3');
    titleListItem.textContent = "Nouveau tirage de participants en chaine";
    listePrenomsMelange.appendChild(titleListItem);
    const olListItem = document.createElement('ol');
    listePrenomsMelange.appendChild(olListItem);
    // Si tableau est impaire alors copier le premier prénom a la fin du tableau
    if (tableau.length % 2 !== 0) {
        tableau.push(tableau[0]);
    }
    for (let k = 0; k < tableau.length - 1; k++) {
        const listItem = document.createElement('li');
        listItem.textContent = tableau[k] + " et " + tableau[k + 1];
        olListItem.appendChild(listItem);
    }
}







