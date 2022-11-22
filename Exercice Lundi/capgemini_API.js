// (async () => {
//   const contenu = await fetch(
//     "https://data.nantesmetropole.fr/explore/dataset/244400404_info-trafic-tan-temps-reel/api/"
//   );
//   const contenuJson = await contenu.json();

//   console.log(contenu);
// })();

// ------------------------------------------------------------

(async () => {
  const contenu = await fetch("https://dummyjson.com/carts", {});
  let rep = await contenu.json();

  rep.foreach((a) => consolse.log(carts.id[i]));

  //   console.log(rep);

  return rep;
})();
