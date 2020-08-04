window.onload = function () {

  // Never, ever ever ever :D call your variables with a, b, c or some silly names.
  // First because in a month or two you will forgot what the fuck you written :D 
  // You will have to put in a lot more effort to figure out what is a,b,c,d,e,f,g,h and so on
  
  // If you have lot of repetition in your code that is a sign that you can do some automating
  // After all the point of programming is to speed up things so it works in all casess.

  // You have all these functions, and they have exactly same logic inside anonymous function that you added on click. 
  // The only difference they have is their ID's
  

  // I would edit HTML and add js-accordion-button classes next to borderly. 
  // That is some convention I've found, and it points out in your HTML/CSS what part is JavaScript using,
  // which can be usefull when you first see someone's code.
  

  var accordionButtons = document.getElementsByClassName('js-accordion-button');
  
  let init = function() {
    // this if checks if there are accordion buttons on page. 
    // If there are none, code beneath won't be executed
    // If there is no this check, on other page where you don't
    // have accordions, errors in your javascript console could 
    // appear which will break executing the rest of the scripts.

    if (accordionButtons.length > 0) { 
      for (let i = 0; i < accordionButtons.length; i++) {
        accordionButtons[i].addEventListener('click', function() {
          let accordionContent = this.nextElementSibling;
          accordionContent.classList.toggle('js-accordion-active');
  
          // this inside event listener should be element that you did action
          // in this situation it's click event, but it can be hover event, tap or something else 
          // console.log(this); <- should log element that is clicked on
          // Approach I find really useful is adding and removing classes.
          // You can easily toggle classes.
          // In your css there is js-accordion-content class that has display: none;
          // After it .js-accordion-active class has display: block;
        });
      }
    }
    // rest of the website code should go here
  }

  init(); // this part starts all javascript
  

  // var a = document.getElementById('accordion1');
  // a.onclick = function () {
  //   var b = document.getElementById('panel');
  //   var c = document.getElementById('accordion1');
  //   if (b.style.display == 'none') {
  //     b.style.display = 'block';
  //     b.classList.add ('borderly');
  //     c.classList.add('borderless');

  //   } else {
  //     b.style.display = 'none';
  //     c.classList.add('borderly');
  //   }
  // }

  // var acc2 = document.getElementById('accordion2');
  // acc2.onclick = function () {
  //   var b = document.getElementById('panel2');
  //   var c = document.getElementById('accordion2');
  //   if (b.style.display == 'none') {
  //     b.style.display = 'block';
  //     b.classList.add ("borderly");
  //     c.classList.add("borderless");

  //   } else {
  //     b.style.display = 'none';
  //     c.classList.add("borderly");
  //   }
  // }

  // var acc3 = document.getElementById('accordion3');
  // acc3.onclick = function () {
  //   var b = document.getElementById('panel3');
  //   var c = document.getElementById('accordion3');
  //   if (b.style.display == 'none') {
  //     b.style.display = 'block';
  //     b.classList.add ("borderly");
  //     c.classList.add("borderless");

  //   } else {
  //     b.style.display = 'none';
  //     c.classList.add("borderly");
  //   }
  // }

  // var acc4 = document.getElementById('accordion4');
  // acc4.onclick = function () {
  //   var b = document.getElementById('panel4');
  //   var c = document.getElementById('accordion4');
  //   if (b.style.display == 'none') {
  //     b.style.display = 'block';
  //     b.classList.add ("borderly");
  //     c.classList.add("borderless");

  //   } else {
  //     b.style.display = 'none';
  //     c.classList.add("borderly");
  //   }
  // }

  // var acc5 = document.getElementById('accordion5');
  // acc5.onclick = function () {
  //   var b = document.getElementById('panel5');
  //   var c = document.getElementById('accordion5');
  //   if (b.style.display == 'none') {
  //     b.style.display = 'block';
  //     b.classList.add ("borderly");
  //     c.classList.add("borderless");

  //   } else {
  //     b.style.display = 'none';
  //     c.classList.add("borderly");
  //   }
  // }

  // var acc6 = document.getElementById('accordion6');
  // acc6.onclick = function () {
  //   var b = document.getElementById('panel6');
  //   var c = document.getElementById('accordion6');
  //   if (b.style.display == 'none') {
  //     b.style.display = 'block';
  //     b.classList.add ("borderly");
  //     c.classList.add("borderless");

  //   } else {
  //     b.style.display = 'none';
  //     c.classList.add("borderly");
  //   }
  // }
}
