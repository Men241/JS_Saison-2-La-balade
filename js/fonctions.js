
//// EPISODE 9 : A table !

// alert("Ecrire une fonction qui prend un nombre en paramètre et affiche sa table de multiplication en console.");
//
// // Initialisation de la variable
//
//
//
// // Déclaration  de la fonction multiplication
//
// function multiplication(b){
//
//     let nbr = parseInt(prompt("Veuillez écrire un nombre : "));
//
//     for (a = 1 ; a <= 10 ; a ++ ) {
//         let b = nbr * a;
//         document.write(' ' + a + ' x ' + nbr + ' = ' + b  + '<br/>')
//     }
// }
//
// // Appel de la fonction
//
// multiplication();


//////////////////////////////////////////////////////////////////////////////////////////////////////////



//// EPISODE 1 :

//     function mail(){
//
//         let email = prompt("Veuillez rentrer votre email");
//         // condition
//         if(/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(email)){
//             alert("Adresse e-mail valide!");
//         } else{
//             alert("Erreur : Adresse e-mail non valide!");
//         }
//     }
// // Appel de la fonction
//
//     mail();


///////////////////////////////////////////////////////////////////////////////////////////////////////////


// Episode 2 :

// Initialisation de la fonction

//     function password() {
//         let motdePasse = prompt("Veuillez rentrer votre mot de passe");
//
//         // Conditions.
//
//         if(/^[a-z0-9A-Z]{8,}$/.test(motdePasse)){
//         alert("Mot de passe valide!");
//         } else{
//         alert("Erreur : Mot de passe non valide!");
//         }
//     }
//
// // Appel de la fonction
//
//     password();


////////////////////////////////////////////////////////////////////////////////////////////////////////////



// EPISODE 4 :

// Initialisation de la fonction.

    function birthDay() {

        //Initialisation de la variable
        let birthDay = prompt(" Quel est votre date de naissance?");

        // Condition
        if (/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/.test(birthDay)) {
            alert(birthDay);
        } else {
            alert("Mauvais format, réécrivez le ainsi : Exemple : 13/05/2020.");
        }

    }

    birthDay();


//////////////////////////////////////////////////////////////////////////////////////////////////

// EPISODE 7 :

