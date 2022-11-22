// function Utilisateur() {
//   var choix_user = prompt("chose 1 -> 3");
//   var choix_Final = "";

//   switch (Number(choix_user)) {
//     case 1:
//       choix_Final = "Pierre";
//       return choix_Final;
//     case 2:
//       choix_Final = "ciseaux";
//       return choix_Final;

//     case 3:
//       choix_Final = "Feuille";
//       return choix_Final;
//   }
// }

// var choix_Pc;
// for (var i = 0; i < 3; i++) {
//   choix_Pc = Math.floor(Math.random() * 3) + 1;

//   switch (choix_Pc) {
//     case 1:
//       Choix_Pc_1 = "Pierre";
//       return Choix_Pc_1;
//     case 2:
//       Choix_Pc_2 = "ciseaux";
//       return Choix_Pc_2;
//     case 3:
//       Choix_Pc_3 = "Feuille";
//       return Choix_Pc_3;
//   }
// }

// let Choix_1 = Utilisateur();
// let Choix_2 = Utilisateur();
// let Choix_3 = Utilisateur();

// let Choix_Pc_1; //= Math.floor(Math.random() * 3) + 1;
// let Choix_Pc_2; //= Math.floor(Math.random() * 3) + 1;
// let Choix_Pc_3; //= Math.floor(Math.random() * 3) + 1;

// console.log(Choix_1 + " " + Choix_Pc_1);
// console.log(Choix_2 + " " + Choix_Pc_2);
// console.log(Choix_3 + " " + Choix_Pc_3);

User_ResultaT = 0;
Pc_Resultat = 0;

while (User_ResultaT !== 3 && Pc_Resultat !== 3) {
  prompt("entreer votre choix");
}
