if (window.matchMedia("(max-width: 1150px)").matches) {
  var slideIndex = 1;
  showDivs(slideIndex);

  function plusDivs(n) {
    showDivs((slideIndex += n));
  }

  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slide");
    if (n > x.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
  }
}

var slideone = document.getElementById("slideone");
slideone.addEventListener("click", function() {
  slideone.classList.toggle("is-clicked");
  arrowleft.classList.toggle("is-clicked");
});

var arrowleft = document.getElementById("arrowleft");
arrowleft.addEventListener("click", function() {
  slideone.classList.toggle("is-clicked");
  arrowleft.classList.toggle("is-clicked");
});
