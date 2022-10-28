function isAnagramme(mot1, mot2) {
  if (mot1.length !== mot2.length) {
    return false;
  }
  return true;
}

function cheking(mot1, mot2) {
  var check = isAnagramme(mot1, mot2);

  const tab1 = mot1.split("");
  const tab2 = mot2.split("");

  if (check === true) {
    var s1 = tab1.sort().join();
    var s2 = tab2.sort().join();
    return console.log("anagramme");
  } else {
    return console.log(" Not anagramme");
  }
}

// console.log(isAnagramme("hi", "hI"));
cheking("reactif", "creatif");
