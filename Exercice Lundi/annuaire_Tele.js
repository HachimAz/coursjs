// On évite les var...
const annuaire = [
  { Nom: "Hach", Prenom: "AZ", TELE: "06540181" },
  { Nom: "CR", Prenom: "RM", TELE: "06540181" },
  { Nom: "KB9", Prenom: "RM", TELE: "06540181" },
];

// Il serait utile de présenter les options à l'utilisateur
const answerQ = prompt(
    " Rechercher \n Vous voulez faire quoi  ?"
).toLocaleLowerCase();

if (answerQ === "quitter" || answerQ === "q") {
  window.close();
}

if (answerQ === "rechercher" || answerQ === "r") {
  // Sauf erreur, cette variable n'est pas déclarée...
  answer_Search = prompt("Vous chercher qui");

  // Nom de la variable pas clair, et traitement pas clair non plus.
  // Pour nommer les variables, on choisit un type d'écriture et on s'y tient :
  // Camel case (ex: someVariable)
  // Snake case (ex: some_variable)
  // Pascal case (ex: SomeVariable)
  let type_An = isNaN(Number(answer_Search));

  //   if (typeof answer_Search === "string") {
  if (type_An === true) {
    // On évite les var, avec potentiellement un problème sur la ligne 34.
    var i = annuaire.findIndex((a) => answer_Search === a.Nom);
    alert(
        annuaire[i].Nom + "\n" + annuaire[i].Prenom + "\n" + annuaire[i].TELE
    );
  }

  if (type_An === false) {
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
