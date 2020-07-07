window.onload = function () {
  var a = document.getElementById('create');
  a.onclick = function () {
    var b = document.getElementById('changehead');
    if (b.textContent == "Sign in") {
      b.textContent = "Create an account";
      a.textContent = "log in";
    } else {
      b.textContent = "Sign in";
      a.textContent = "create an account";
    }
  }
}
