function yesAndNot() {
  const expectedYes = "yes";
  const expectedNot = "not";

  let firstStep = true;
  let secondStep = true;

  while (firstStep) {
    yes = prompt("Напишите yes", "");
    if (yes != expectedYes) {
      alert("ТЫ ДАЛБАЕБ!");
      continue;
    }

    firstStep = false;
  }

  while (secondStep) {
    not = prompt("Напишите not", "");
    if (not != expectedNot) {
      alert("ТЫ ЕБЛАН ТУПОЙ!");
      continue;
    }
    secondStep = false;
  }

  alert("тест на дауна пройдён");
}

yesAndNot();
