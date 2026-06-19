function checkEvenOdd() {
  let n = document.getElementById("num").value;

  if (n === "") {
    document.getElementById("result").innerText = "Please enter a number!";
  } else {
    if (n % 2 === 0) {
      document.getElementById("result").innerText = n + " is Even";
    } else {
      document.getElementById("result").innerText = n + " is Odd";
    }
  }
}
