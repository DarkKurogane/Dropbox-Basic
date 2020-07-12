window.onload = function() {
    let a = document.getElementById('create');
    a.onclick = function () {
        let b = document.getElementById('changehead');
        if (b.textContent == "Sign in") {
          b.textContent = "Create an account";
          a.textContent = "log in";
        } else {
          b.textContent = "Sign in";
          a.textContent = "create an account";
        }

        const changeElements = document.querySelectorAll('.change');

    changeElements.forEach(function (currentValue) {

        if ( currentValue.classList.contains('static') ) {
            currentValue.classList.remove('static');
            currentValue.classList.add('none');
          } else if ( currentValue.classList.contains('none') ) {
            currentValue.classList.remove('none');
            currentValue.classList.add('static');
          }

    });
    }
}