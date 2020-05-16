//// EPISODE 1 : Donne-moi ton adresse e-mail.

// alert(""Ecrire un programme qui demande à l’utilisateur son adresse e-mail et renvoie" +
//     " un message en cas d’erreur si l’adresse e-mail n’est pas correctement saisie.\n");
//
// let email = prompt("Veuillez rentrer votre email");
//
// if(/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(email)){
//     alert("Adresse e-mail valide!");
// }else{
//     alert("Erreur : Adresse e-mail non valide!");
// }

//////////////////////////////////////////////


//// EPISODE 2 : Choisis un mot de passe

// alert("Ecrire un programme qui demande à l'utilisateur de renseigner un mot de passe et " +
//     "vérifie si ce mot de passe obéit aux critères suivants :\n" +
//     "8 caractères minimum\n" +
//     "contient une majuscule\n" +
//     "contient au moins un chiffre\n");
//
// // Déclarons une variable.
//
// let motdePasse = prompt("Veuillez rentrer votre email");
//
// // Conditions.
//
// if(/^[a-z0-9A-Z]{3,}$/.test(motdePasse)){
//     alert("Mot de passe valide!");
// }else{
//     alert("Erreur : Mot de passe non valide!");
// }


///////////////////////////////////////


//// EPISODE 3 : Au pluriel.

// alert("Ecrire un programme qui demande à l'utilisateur son nom " +
//     "et le nombre d’enfants qu’il a et affiche un résumé.\n" +
//     "Exemples : \n" +
//     "Marc, vous avez 1 enfant.\n" +
//     "Luc, vous avez 3 enfants.\n" +
//     "Jean, vous n’avez pas d’enfant.\n")
//
//
// // Déclarons une variable.
//
// let nom = prompt("Quel est votre nom?");
// let enfant = prompt("Combien d\'enfant avez-vous?");
//
// alert(nom + ", vous avez " + enfant + " enfants.");


//////////////////////////////////////////


//// EPISODE 4 : Dit moi, quand es-tu né?

// alert("Ecrire un programme demande la date de naissance d’un utilisateur " +
//     "et vérifie si la date saisie est au format JJ/MM/AAAA. Exemple : 13/05/2020.")
//
// let birthDay = prompt(" Quel est votre date de naissance?");
//
// if(/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/.test(birthDay)){
//     alert(birthDay);
// }
// else{
//     alert("Mauvais format, réécrivez le ainsi : Exemple : 13/05/2020.");
// }


//// EPISODE 5 : Fiche de renseignement.

// alert("Ecrire un programme qui :\n" +
//     "demande à l'utilisateur de saisir son nom, prénom ainsi que son sexe ;\n" +
//     "stocke ces informations dans un objet;\n" +
//     "ajoute une clé titre à cet objet ayant comme valeur M ou Mme en fonction du sexe de l’utilisateur;\n" +
//     "Affiche l’objet en console.\n");
//
// let user = {
//     nom: prompt("Saisissez votre nom :"),
//     prenom : prompt("Saisissez votre prénom :"),
//     sexe : prompt("Homme ou femme ?")
// };
//
// user.titre = ["M","Mme"];
//
// console.log(user);

//// EPISODE 6 : Fiche de renseignement.

// alert("Episode 6 : Quel jour sommes-nous ?\n" +
//     "Ecrire un programme qui demande à l’utilisateur de saisir le numéro d’un jour et renvoie le jour correspondant. \n" +
//     "Exemple : \n" +
//     "Entrée : 3\n" +
//     "Sortie : Mercredi\n" +
//     "\tNB : Les jours doivent être stockés au préalable dans un tableau.");
//
// // Initialisation tableau
//
// let day = ["Lundi", "Mardi", "Mercredi","Jeudi", "Vendredi", "Samedi", "Dimanche"];
// let choix = day[prompt("Rentrer un nombre")];
//
// // affichage
//
// alert(choix);

//// EPISODE 7 : Admis ou recalé.

alert("Ecrire un programme qui demande à l’utilisateur de saisir toutes ses notes en Mathématiques " +
      "et affiche sa moyenne. " +
      "NB : Les notes varient de 0 à 20 et seront stockées dans un tableau.");

// Initialisation des variables

let math = {
    note1: parseInt(prompt("Entrez votre premiere note :")),
    note2: parseInt(prompt("Entrez votre deuxieme note :")),
    note3: parseInt(prompt("Entrez votre troisieme note :")),
    note4: parseInt(prompt("Entrez votre quatrieme note :")),
};

let note = [math.note1, math.note2, math.note3, math.note4];

let noteT = math.note1 + math.note2 + math.note3 + math.note4;

let moyen = noteT/note.length;

// Visualisation de la moyenne

alert(moyen);