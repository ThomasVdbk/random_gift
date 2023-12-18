//--------------------ACTION AU CLICK SUR btnValiderPrenom----------------------------
// Récupérer élément du DOM button btnValiderPrenom
const btnValiderPrenom = document.getElementById('btnValiderPrenom');

// Ecouteur sur le button id="btnValiderPrenom" avec fonction fléchée
btnValiderPrenom.addEventListener('click', (event) => {
    try {
        event.preventDefault();
        // Appel de la fonction ajouterPrenom à chaque clic sur le bouton
        ajouterPrenom();
        afficherPrenomsAjoute();
        // Affiche les prenoms ajoutés en supprimant la class .invisible du conteneurTwo au premier participant
        const conteneurDevenirVisible = '.conteneurTwo';
        if (compteurParticipants === 1) {
            supprimerClassInvisible(conteneurDevenirVisible);
        }
    } catch (error) {
        console.error("Main / Une erreur s'est produite dans l'écouteur d'événement btnValiderPrenom")
    }
});


//--------------------ACTION AU CLICK SUR btnTirerAuSort----------------------------
// Récupérer élément du DOM button btnTirerAuSort
const btnTirerAuSort = document.getElementById("btnTirerAuSort");

// Ecouteur sur le button id="btnTirerAuSort" avec fonction fléchée
btnTirerAuSort.addEventListener('click', (event) => {
    try {
        // Affiche le resultat du tirage en supprimant la class .invisible du conteneurThree au premier click 
        const conteneurDevenirVisible = '.conteneurThree';
        if (compteurParticipants > 0) {
            supprimerClassInvisible(conteneurDevenirVisible);
        }
        const optionTiragePaire = document.getElementById("tiragePaire");
        const optionTirageChaine = document.getElementById("tirageChaine");
        const tableauMelange = melangerTableau();

        if (optionTiragePaire.checked) {
            afficherPaire(tableauMelange);
        } else if (optionTirageChaine.checked) {
            afficherChaine(tableauMelange);
        }
    } catch (error) {
        console.error("Main / Une erreur s'est produite dans l'écouteur d'événement btnTirerAuSort")
    }
})


//--------------------ACTION AU CLICK SUR btnReinitialiserTirage----------------------------
// Récupérer élément du DOM button btnReinitialiserTirage
const btnReinitialiserTirage = document.getElementById("btnReinitialiserTirage");

// Ecouteur sur le button id="btnReinitialiserTirage" avec fonction fléchée
btnReinitialiserTirage.addEventListener('click', () => {
    try {
        // Reset tableau
        tableauPrenoms = [];
        // Mettre compteurParticipants a zero
        compteurParticipants = 0;
        // Supprimer affichage des prénoms ajoutés
        const listePrenoms = document.getElementById('listePrenoms');
        listePrenoms.innerHTML = '';
        // Supprimer affichage des tirages
        const listePrenomsMelange = document.getElementById('listePrenomsMelange');
        listePrenomsMelange.innerHTML = '';
        // Supprimer champ de saisie input prenom
        const inputPrenom = document.getElementById('prenom');
        inputPrenom.value = "";
        // Rendre invisible les conteneurs de participants et résultat tirage
        let conteneur = '.conteneurTwo';
        ajouterClassInvisible(conteneur);
        conteneur = '.conteneurThree';
        ajouterClassInvisible(conteneur);
    } catch (error) {
        console.error("Main / Une erreur s'est produite dans l'écouteur d'événement btnReinitialiserTirage")
    }
}
)