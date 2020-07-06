window.onload = function () {

  var a = document.getElementById('accordion1');
  a.onclick = function () {
    var b = document.getElementById('panel');
    var c = document.getElementById('accordion1');
    if (b.style.display == 'none') {
      b.style.display = 'block';
      b.classList.add ('borderly');
      c.classList.add('borderless');

    } else {
      b.style.display = 'none';
      c.classList.add('borderly');
    }
  }

  var acc2 = document.getElementById('accordion2');
  acc2.onclick = function () {
    var b = document.getElementById('panel2');
    var c = document.getElementById('accordion2');
    if (b.style.display == 'none') {
      b.style.display = 'block';
      b.classList.add ("borderly");
      c.classList.add("borderless");

    } else {
      b.style.display = 'none';
      c.classList.add("borderly");
    }
  }

  var acc3 = document.getElementById('accordion3');
  acc3.onclick = function () {
    var b = document.getElementById('panel3');
    var c = document.getElementById('accordion3');
    if (b.style.display == 'none') {
      b.style.display = 'block';
      b.classList.add ("borderly");
      c.classList.add("borderless");

    } else {
      b.style.display = 'none';
      c.classList.add("borderly");
    }
  }

  var acc4 = document.getElementById('accordion4');
  acc4.onclick = function () {
    var b = document.getElementById('panel4');
    var c = document.getElementById('accordion4');
    if (b.style.display == 'none') {
      b.style.display = 'block';
      b.classList.add ("borderly");
      c.classList.add("borderless");

    } else {
      b.style.display = 'none';
      c.classList.add("borderly");
    }
  }

  var acc5 = document.getElementById('accordion5');
  acc5.onclick = function () {
    var b = document.getElementById('panel5');
    var c = document.getElementById('accordion5');
    if (b.style.display == 'none') {
      b.style.display = 'block';
      b.classList.add ("borderly");
      c.classList.add("borderless");

    } else {
      b.style.display = 'none';
      c.classList.add("borderly");
    }
  }

  var acc6 = document.getElementById('accordion6');
  acc6.onclick = function () {
    var b = document.getElementById('panel6');
    var c = document.getElementById('accordion6');
    if (b.style.display == 'none') {
      b.style.display = 'block';
      b.classList.add ("borderly");
      c.classList.add("borderless");

    } else {
      b.style.display = 'none';
      c.classList.add("borderly");
    }
  }
}
