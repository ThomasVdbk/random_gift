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
        if (compteurParticipants === 1) {
            supprimerClassInvisible();
        }
    } catch (error) {
        console.error("Main / Une erreur s'est produite dans l'écouteur d'événement btnValiderPrenom")
    }
});

let nbClickBtnTirerAuSort = 0;

// Récupérer élément du DOM button btnTirerAuSort
const btnTirerAuSort = document.getElementById("btnTirerAuSort");

// Ecouteur sur le button id="btnTirerAuSort" avec fonction fléchée
btnTirerAuSort.addEventListener('click', (event) => {
    try {
        // Affiche le resultat du tirage en supprimant la class .invisible du conteneurThree au premier click 
        nbClickBtnTirerAuSort++;
        if (nbClickBtnTirerAuSort > 0 && compteurParticipants > 0) {
            supprimerClassInvisible();
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


// Récupérer élément du DOM button btnReinitialiserTirage
const btnReinitialiserTirage = document.getElementById("btnReinitialiserTirage");

// Ecouteur sur le button id="btnReinitialiserTirage" avec fonction fléchée
btnReinitialiserTirage.addEventListener('click', () => {
    try {
        // Reset tableau
        tableauPrenoms = [];
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


// Rendre invisible le conteneurTwo et conteneurThree avec la classe invisible, déja en display none CSS

// Try Catch sur les fonctions
// Gerer tableau vide (ne pas afficher "Nouveau tirage de participant")
// Gerer tableau impaire pour tirage Paire
// button Ajouter par defaut quand on tape sur bouton clavier Entree
// Afficher image explicite cadeau paire si input radio selected et autre image pour chaine
// Exporter la liste du tirage

// Creer options saisie one one ou zone de texte recuperer et scinder par un moyen

