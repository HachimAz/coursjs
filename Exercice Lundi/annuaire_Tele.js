var annuaire = [
  { Nom: "Hach", Prenom: "AZ", TELE: "06540181" },
  { Nom: "CR", Prenom: "RM", TELE: "06540181" },
  { Nom: "KB9", Prenom: "RM", TELE: "06540181" },
];

var answerQ = prompt(
  " Rechercher \n Vous voulez faire quoi  ?"
).toLocaleLowerCase();

if (answerQ === "quitter" || answerQ === "q") {
  window.close();
}
if (answerQ === "rechercher" || answerQ === "r") {
  answer_Search = prompt("Vous chercher qui");

  let type_An = isNaN(Number(answer_Search));

  //   if (typeof answer_Search === "string") {
  if (type_An === true) {
    var i = annuaire.findIndex((a) => answer_Search === a.Nom);
    alert(
      annuaire[i].Nom + "\n" + annuaire[i].Prenom + "\n" + annuaire[i].TELE
    );
  }

  if (type_An === false) {
    console.log("hhhhhhhhhhhh");
    var i = annuaire.findIndex((a) => answer_Search === a.TELE);
    alert(
      annuaire[i].Nom + "\n" + annuaire[i].Prenom + "\n" + annuaire[i].TELE
    );
  }

  //   else if (typeof Number(answer_Search) === "Number") {
  //     var i = annuaire.findIndex((a) => answer_Search === a.TELE);
  //     alert(
  //       annuaire[i].Nom + "\n" + annuaire[i].Prenom + "\n" + annuaire[i].TELE
  //     );
  //   }
}
