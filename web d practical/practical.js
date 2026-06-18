function generatePattern() {
  let n = parseInt(document.getElementById("num").value);
  let result = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      result += j;
    }
    result += "<br>";
  }

  document.getElementById("output").innerHTML = result;
}