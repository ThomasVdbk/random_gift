// Tableau pour stocker les prénoms
const tableauPrenoms = [];

// Récupérer élément du DOM button 
const btnValiderPrenom = document.getElementById('btnValiderPrenom');

// Ecouteur sur le button id="btnValiderPrenom" avec fonction fléchée 
btnValiderPrenom.addEventListener('click', () => {

    // Appel de la fonction ajouterPrenom à chaque clic sur le bouton
    ajouterPrenom();
    afficherPrenoms();
});


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
    const titleListItem = document.createElement('h3')
    titleListItem.textContent = "Liste des participants ajoutés : "
    listePrenoms.appendChild(titleListItem);

    // Ajouter chaque prénom à la liste
    tableauPrenoms.forEach((prenom) => {
        const listItem = document.createElement('li');
        listItem.textContent = prenom;
        listePrenoms.appendChild(listItem);
    });
}