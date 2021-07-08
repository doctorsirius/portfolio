// Detect language and redirect 

var lang = window.navigator.language;
var langShort = lang.substr(0, 2);

switch (langShort) {
  case "en":
    // window.location.href = '';
    break;

  default:
  // window.location.href = '';
}


// Theme switcher

function switchTheme() {
  var switcher = document.getElementById("theme-checkbox");
  if (switcher.checked) {
    document.getElementById("page").classList.add('alt-theme');
  } else {
    document.getElementById("page").classList.remove('alt-theme');
  }
}

// Set active class for language selector

var langSelector = document.getElementById("lang-selector");
var lang = langSelector.getElementsByClassName("lang");
for (var i = 0; i < lang.length; i++) {
  lang[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
