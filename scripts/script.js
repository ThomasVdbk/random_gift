// Tableau pour stocker les prénoms
let tableauPrenoms = [];
// Variable pour stocker le compteur de participant
let compteurParticipants = 0;


// Fonction appelée à chaque clic sur le bouton
function incrementerCompteur() {
    compteurParticipants++;
    // Met à jour le texte affichant le compteur
}


// Affiche message erreur dans div class="erreur" durant 4secondes
function afficherMessageErreur(message) {
    try {
        let spanErreurMessage = document.getElementById("erreurMessage");
        if (!spanErreurMessage) {
            let popup = document.querySelector(".erreur");
            spanErreurMessage = document.createElement("span");
            spanErreurMessage.id = "erreurMessage";
            popup.append(spanErreurMessage);
        }
        spanErreurMessage.innerText = message;
        setTimeout(() => {
            spanErreurMessage.parentNode.removeChild(spanErreurMessage);
        }, 4000);
    } catch (error) {
        console.error("Script / Une erreur s'est produite dans la function afficherMessageErreur");
    }
}


function validerPrenom(prenom) {
    try {
        let prenomRegExp = new RegExp("^[a-zA-Z0-9_]{1}");
        if (!prenomRegExp.test(prenom)) {
            throw afficherMessageErreur(`Le prénom : " ${prenom} ", n'est pas valide.`);
        }
        // true utilisé dans ajouterPrenom() condition pour push dans tableauPrenoms
        return true
    } catch (error) {
        console.error("Script / Une erreur s'est produite dans la function validerPrenom");
    }
}

function ajouterPrenom() {
    try {
        // Récupérer la valeur du champ de texte avec id "prenom" et ajouter le prénom au tableau
        const prenom = document.getElementById('prenom').value;
        if (validerPrenom(prenom)) {
            tableauPrenoms.push(prenom);
            incrementerCompteur();
            // Afficher le tableau dans la console 
            console.log(`Tableau de prénoms : ${compteurParticipants}`, tableauPrenoms);
            // Effacer le champ de texte au click
            document.getElementById('prenom').value = '';
        }
    } catch (error) {
        console.error("Script / Une erreur s'est produite dans la function ajouterPrenom");
    }
}


function afficherPrenomsAjoute() {
    try {
        const listePrenoms = document.getElementById('listePrenoms');
        // Effacer la liste existante
        listePrenoms.innerHTML = '';
        // Ajouter titre dès le premier prénom saisi
        const titleListItem = document.createElement('h3');
        titleListItem.textContent = `Nombre de participants ajoutés =  ${compteurParticipants}`;
        listePrenoms.appendChild(titleListItem);
        // Ajouter chaque prénom à la liste
        tableauPrenoms.forEach((prenom) => {
            const listItem = document.createElement('li');
            listItem.textContent = prenom;
            listePrenoms.appendChild(listItem);
        });
    } catch (error) {
        console.error("Script / Une erreur s'est produite dans la function afficherPrenomsAjoute");
    }
}


function melangerTableau() {
    try {
        let prenomsMelanges = [...tableauPrenoms];
        let quantitePrenoms = prenomsMelanges.length;
        // Mélanger le tableau algorithme de Fisher-Yates
        for (let i = quantitePrenoms - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [prenomsMelanges[i], prenomsMelanges[j]] = [prenomsMelanges[j], prenomsMelanges[i]];
        }
        return prenomsMelanges;
    } catch (error) {
        console.error("Script / Une erreur s'est produite dans la function melangerTableau");
    }
};

function afficherPaire(tableau) {
    try {
        const listePrenomsMelange = document.getElementById('listePrenomsMelange');
        listePrenomsMelange.innerHTML = '';
        const titleListItem = document.createElement('h3');
        titleListItem.textContent = "Nouveau tirage de participants en Paire";
        listePrenomsMelange.appendChild(titleListItem);
        const olListItem = document.createElement('ol');
        listePrenomsMelange.appendChild(olListItem);
        for (let k = 0; k < tableau.length; k += 2) {
            const listItem = document.createElement('li');
            listItem.textContent = tableau[k] + " et " + tableau[k + 1];
            olListItem.appendChild(listItem);
        }
    } catch (error) {
        console.error("Script / Une erreur s'est produite dans la function afficherPaire");
    }
}


function afficherChaine(tableau) {
    try {
        const listePrenomsMelange = document.getElementById('listePrenomsMelange');
        listePrenomsMelange.innerHTML = '';
        const titleListItem = document.createElement('h3');
        titleListItem.textContent = "Nouveau tirage de participants en Chaine";
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
    } catch (error) {
        console.error("Script / Une erreur s'est produite dans la function afficherChaine");
    }
}


function supprimerClassInvisible() {
    try {
        const conteneurInvisible = document.querySelector('.invisible');
        if (conteneurInvisible.innerHTML.trim() !== '') {
            // Si la div est remplie, supprime la classe "invisible"
            conteneurInvisible.classList.remove('invisible');
        }
    } catch (error) {
        console.error("Script / Une erreur s'est produite dans la function supprimerClassInvisible");
    }
}

function ajouterClassInvisible(conteneur) {
    try {
        const conteneurDevenirInvisible = document.querySelector(conteneur);
        console.log(conteneurDevenirInvisible)
        if (!conteneurDevenirInvisible.classList.contains('invisible')) {
            conteneurDevenirInvisible.classList.add('invisible')
        }
    } catch (error) {
        console.error("Script / Une erreur s'est produite dans la function ajouterClassInvisible");
    }
}




