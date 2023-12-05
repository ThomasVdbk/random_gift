// Tableau pour stocker les prénoms
const tableauPrenoms = [];

function ajouterPrenom() {
    // Récupérer la valeur du champ de texte avec id "prenom"
    const prenom = document.getElementById('prenom').value;

    // Ajouter le prénom au tableau
    tableauPrenoms.push(prenom);

    // Afficher le tableau dans la console 
    console.log("Tableau de prénoms :", tableauPrenoms);

    // Effacer le champ de texte au click
    document.getElementById('prenom').value = '';

    afficherPrenoms();
}

function afficherPrenoms() {
    const listePrenoms = document.getElementById('listePrenoms');
    // Effacer la liste existante
    listePrenoms.innerHTML = '';

    // Ajouter chaque prénom à la liste
    tableauPrenoms.forEach((prenom) => {
        const listItem = document.createElement('li');
        listItem.textContent = prenom;
        listePrenoms.appendChild(listItem);
    });
}