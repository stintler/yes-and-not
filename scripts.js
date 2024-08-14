function yesAndNot() {
  const expectedYes = "yes";
  const expectedNot = "not";

  let firstStep = true;
  let secondStep = true;

  while (firstStep) {
    let yes = prompt("Напишите yes", "");
    if (yes != expectedYes) {
      alert("ТЫ ДАЛБАЕБ!");
      continue;
    }

    firstStep = false;
  }

  while (secondStep) {
    let not = prompt("Напишите not", "");
    if (not != expectedNot) {
      alert("ТЫ ЕБЛАН ТУПОЙ!");
      continue;
    }
    secondStep = false;
  }

  alert("тест на дауна пройдён");
}

yesAndNot();
