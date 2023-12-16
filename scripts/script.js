// Tableau pour stocker les prénoms
let tableauPrenoms = [];

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
            return false;
        } return true;
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
            // Afficher le tableau dans la console 
            console.log("Tableau de prénoms :", tableauPrenoms);
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
        titleListItem.textContent = "Liste des participants ajoutés : ";
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
    } catch (error) {
        console.error("Script / Une erreur s'est produite dans la function afficherPaire");
    }
}


function afficherChaine(tableau) {
    try {
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
    } catch (error) {
        console.error("Script / Une erreur s'est produite dans la function afficherChaine");
    }
}


function afficherConteneurInvisible() {
    const conteneurInvisible = document.querySelector('.invisible');
    if (conteneurInvisible.innerHTML.trim() !== '' && tableauPrenoms.length === 1) {
        // Si la div est remplie, supprime la classe "invisible"
        conteneurInvisible.classList.remove('invisible');
    } else if (conteneurInvisible !== null && nbClickBtnTirerAuSort >= 1) {
        conteneurInvisible.classList.remove('invisible');
    } else {
        Promise.resolve();
    }
}




