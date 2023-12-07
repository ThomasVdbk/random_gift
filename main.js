// Tableau pour stocker les prénoms
let tableauPrenoms = [];




function ajouterPrenom() {
    // Récupérer la valeur du champ de texte avec id "prenom"
    const prenom = document.getElementById('prenom').value;

    // Ajouter le prénom au tableau
    tableauPrenoms.push(prenom);

    // Afficher le tableau dans la console 
    console.log("Tableau de prénoms :", tableauPrenoms);

    // Effacer le champ de texte au click
    document.getElementById('prenom').value = '';


}

function afficherPrenoms() {
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


function tirerAuSort() {
    const indiceAleatoire = Math.floor(Math.random() * tableauPrenoms.length);
    const prenomTire = tableauPrenoms[indiceAleatoire];
    return prenomTire;
}


function melangerTableau() {
    // Copier le tableau pour éviter de modifier l'original
    let prenomsMelanges = [...tableauPrenoms];
    let quantitePrenoms = prenomsMelanges.length;

    if (quantitePrenoms % 2 === 0) {
        // Mélanger le tableau algorithme de Fisher-Yates
        for (let i = quantitePrenoms - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [prenomsMelanges[i], prenomsMelanges[j]] = [prenomsMelanges[j], prenomsMelanges[i]];
        }
        return prenomsMelanges;
    } else {
        console.log("tableau impaire !");
    }
}

function afficherPaire(tableau) {
    const listePrenomsMelange = document.getElementById('listePrenomsMelange');
    for (let k = 0; k < tableau.length; k += 2) {
        const listItem = document.createElement('li');
        listItem.textContent = tableau[k] + " et " + tableau[k + 1];
        listePrenomsMelange.appendChild(listItem);
    }
}



// Récupérer élément du DOM button 
const btnValiderPrenom = document.getElementById('btnValiderPrenom');

// Ecouteur sur le button id="btnValiderPrenom" avec fonction fléchée 
btnValiderPrenom.addEventListener('click', () => {

    // Appel de la fonction ajouterPrenom à chaque clic sur le bouton
    ajouterPrenom();
    afficherPrenoms();
});


const btnTirerAuSort = document.getElementById("btnTirerAuSort");
// Ecouteur sur le button id="btnTirerAuSort" avec fonction fléchée 
btnTirerAuSort.addEventListener('click', () => {
    const tableauMelange = melangerTableau();
    afficherPaire(tableauMelange);
})

