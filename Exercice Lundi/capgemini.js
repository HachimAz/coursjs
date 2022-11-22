// // const usserLoggedIn = false;

// // if (usserLoggedIn){
// //     console.log("logged IN");
// // }else {
// //     console.log("Logged Out");
// // }

// var douleur = new Boolean(false);
// var reponse, fievre, toux, fievre_toux;

// reponse = prompt("Vous avez la douleur ? oui OU non");

// if (reponse.toLowerCase() === "oui") {
//   let typeDouleur = prompt(
//     "Quel type de douleur ? /n Abdomen - Gorge - Aucune"
//   );

//   typeDouleur.toLowerCase() === "abdomen" ? alert("Appendicite") : null;

//   if (typeDouleur.toLowerCase() === "gorge") {
//     fievre = prompt("Avez vous la fievre ?");

//     if (fievre.toLowerCase() === "oui") {
//       alert("vous avez un Rhume");
//     } else {
//       alert("vous avez mal au gorge");
//     }
//   }

//   if (typeDouleur.toLowerCase() === "aucune") {
//     toux = prompt("Toux ");
//     if (toux.toLowerCase() === "oui") {
//       fievre_toux = prompt("Avez vous la fievre");
//       if (fievre_toux.toLowerCase() === "oui") {
//         alert("vous avez la Rhume");
//       } else {
//         alert("Refroidissement");
//       }
//     } else {
//       alert("vous avez Rien");
//     }
//   }
// }

// // else {
// //   alert("Bonne Santé");
// // }

// //--------------------------BOUCLE FOR-----------------------------------------

// for (let i = 0; i < 200; i++) {
//   if (i % 5 == 0 && i % 3 == 0) {
//     console.log("coucouHello");
//   } else if (i % 3 == 0) {
//     console.log("coucou");
//   } else if (i % 5 == 0) {
//     console.log("Hello");
//   } else {
//     console.log(i);
//   }
// }

// //--------------------------BOUCLE While-----------------------------------------

// let i = 0;

// while (i < 200) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("coucouHollo");
//   } else if (i % 3 == 0) {
//     console.log("coucou");
//   } else if (i % 5 == 0) {
//     console.log("Hello");
//   } else {
//     console.log(i);
//   }

//   i++;

//   if (i == 199) {
//     break;
//   }
// }

// //--------------------------BOUCLE SwitchCase-----------------------------------------

// let i = 1;
// let md;

// while (i < 200) {
//   switch (true) {
//     case i % 3 == 0 && i % 5 == 0:
//       console.log("coucouHello");
//       i++;
//       break;

//     case i % 3 == 0:
//       console.log("coucou");
//       i++;
//       break;

//     case i % 5 == 0:
//       console.log("Hello");
//       i++;
//       break;

//     default:
//       console.log(i);
//       i++;
//   }
// }

//------------------------Null et Undifined ----------------------
// let maVariableNull = null;
// let maVariable = 0;
// let maVariableUdifiened;

// console.log(typeof maVariableNull);

// if (maVariableNull === null) {
//   console.log("Je suis Null");
// }

// if (maVariableUdifiened === undefined) {
//   console.log("Je suis undefined");
// }

// // if (!mavariable) {}  là il verifie n'est pas null et undefined et 0 et " " à la fois

// if (!maVariableNull) {
//   console.log("je rentre dans la condition de ma variableNull");
// }

// if (!maVariable || maVariable === 0) {
//   console.log("je rentre dans la condition de ma variable");
// }

// --------------------- Tableau --------------------------

const passagers = ["Didier", "Daniel", "Sophie", "Denise"];
// --- for of

console.log("---------For of----------");
for (let passager of passagers) {
  console.log(passager);
}

// ---- for in

console.log("--------for in-----------");
for (let i in passagers) {
  console.log(passagers[i]);
}

// //-----For each et map()
// // for each ne retourne rien mais retourne

// // 
const [premier, second, lesautres] = passagers;
console.log("Premier " + premier);
console.log("Second " + second);
console.log("les autres " + lesautres);
