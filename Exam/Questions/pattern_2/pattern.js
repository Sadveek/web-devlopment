function printPyramid() {
  let result = "";

  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= (2 * i - 1); j++) {
      result += "*";
    }
    result += "\n";
  }
  document.getElementById("output").textContent = result;
}

printPyramid();