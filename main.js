// Récupérer élément du DOM button btnValiderPrenom
const btnValiderPrenom = document.getElementById('btnValiderPrenom');

// Ecouteur sur le button id="btnValiderPrenom" avec fonction fléchée 
btnValiderPrenom.addEventListener('click', () => {
    // Appel de la fonction ajouterPrenom à chaque clic sur le bouton
    ajouterPrenom();
    afficherPrenomsAjoute();
});


// Récupérer élément du DOM button btnTirerAuSort
const btnTirerAuSort = document.getElementById("btnTirerAuSort");

// Ecouteur sur le button id="btnTirerAuSort" avec fonction fléchée 
btnTirerAuSort.addEventListener('click', () => {
    const optionTiragePaire = document.getElementById("tiragePaire");
    const optionTirageChaine = document.getElementById("tirageChaine");

    const tableauMelange = melangerTableau();
    if (optionTiragePaire.checked) {
        afficherPaire(tableauMelange);
    } else if (optionTirageChaine.checked) {
        // En attente appel fonction tirageChaine
        afficherChaine(tableauMelange);
    }
})


// Récupérer élément du DOM button btnReinitialiserTirage
const btnReinitialiserTirage = document.getElementById("btnReinitialiserTirage");

// Ecouteur sur le button id="btnReinitialiserTirage" avec fonction fléchée 
btnReinitialiserTirage.addEventListener('click', () => {
    // Reset tableau
    tableauPrenoms = [];
    // Supprime affichage des prénoms ajoutés
    const listePrenoms = document.getElementById('listePrenoms');
    listePrenoms.innerHTML = '';
    // Supprime affichage des tirages
    const listePrenomsMelange = document.getElementById('listePrenomsMelange');
    listePrenomsMelange.innerHTML = '';
}
)


// Creer button nouveau tirage et clear l'ancien
// Gerer les champs vide de saisies et autre
// Try Catch sur les fonctions
// Gerer tableau vide (ne pas afficher "Nouveau tirage de participant")
// Gerer tableau impaire pour tirage Paire
// button Ajouter par defaut quand on tape sur bouton clavier Entree
// Afficher image explicite cadeau paire si input radio selected et autre image pour chaine
// Exporter la liste du tirage

// Creer options saisie one one ou zone de texte recuperer et scinder par un moyen

