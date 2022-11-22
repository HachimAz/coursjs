// // function afficherValeur() {
// //   return "Coucou";
// // }

// // var responseFunct = afficherValeur();
// // console.log(responseFunct);

// // function afficherValeur2(param1, param2 = 12) {
// //   if (param1) {
// //     return param1 + "---" + param2;
// //   }

// //   return console.log("Erreur ici");
// // }

// // var responseFunct2 = afficherValeur2();
// // console.log(responseFunct2);

// // console.log("Version Fléchée");

// // const afficheNum = (param1, param2) => {
// //   return param1 + " --------------" + param2;
// // };

// // const versionF = afficheNum(1, 2);
// // console.log(versionF);

// // const func_Sum = (param1 = 0, param2 = 0, param3 = 0) => {
// //   return param1 + param2 + param3;
// // };

// // var Sum = func_Sum(1,3);

// // console.log(Sum);

// // ------------------ Exercice Drive Epsi -----------------

// // function confirm() {
// //   return true;
// // }

// // const confirmF = () => true;
// // console.log(confirmF());

// // // function ask(question, yes, no) {
// // //   if (confirm(question)) yes();
// // //   else no();
// // // }

// // const ask = (question, yes, no) => {
// //   confirmF() ? yes() : no();
// // };

// // ask(
// //   "Do you agree?",
// //   () => {
// //     console.log("You agreed.");
// //   },
// //   () => {
// //     console.log("You canceled the execution.");
// //   }
// // );

// let resulat_Uti, resulta_Pc;
// let Pierre = 1;
// let Feuille = 2;
// let Ciseau = 3;

// for (var i = 0; i < 3; i++) {
//   var choice_Pc = Math.floor(Math.random() * 3) + 1;
//   var choice_User = prompt("choose an option");

//   switch (Number(choice_User)) {
//     case 1:
//       console.log("Piere utili");
//       if (choice_User === choice_Pc) {
//         resulat_Uti += 1;
//         resulta_Pc += 1;
//         break;
//       }

//     case 2:
//       console.log("Feuille user");
//       break;

//     case 3:
//       console.log("Ciseau user");
//       break;
//   }

//   switch (choice_Pc) {
//     case 1:
//       1;
//       console.log("Pierre Pc");
//       break;

//     case 2:
//       console.log("Feuille Pc");
//       break;

//     case 3:
//       console.log("Ciseau Pc3");
//       break;
//   }
// }

// -----------------------------------------

let choix_PC_1 = Math.floor(Math.random() * 3 + 1);
let choix_PC_3 = Math.floor(Math.random() * 3 + 1);
let choix_PC_2 = Math.floor(Math.random() * 3 + 1);

console.log(choix_PC_1);
console.log(choix_PC_2);
console.log(choix_PC_3);
