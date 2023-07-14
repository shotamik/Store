function myFunction() {
  document.getElementById("myGadgets").classList.toggle("show");
}


 

window.onclick = function(event) {
    if (!event.target.matches('.choose-btn')) {
      var gadgets = document.getElementsByClassName("gadgets-content");
      var i;
      for (i = 0; i < gadgets.length; i++) {
        var openDropdown = gadgets[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}

function myFun() {
  document.getElementById("myHelp").classList.toggle("showHelp");
}

window.onclick = function(event) {
  if (!event.target.matches('.help-btn')) {
    var help = document.getElementsByClassName("help");
    var i;
    for (i = 0; i < help.length; i++) {
      var openDropdown = help[i];
      if (openDropdown.classList.contains('showHelp')) {
        openDropdown.classList.remove('showHelp');
      }
    }
  }
}

function Valutte() {
  document.getElementById("myValutte").classList.toggle("showValutte");
}

window.onclick = function(event) {
  if (!event.target.matches('.valutte-btn')) {
    var valutte = document.getElementsByClassName("valutte");
    var i;
    for (i = 0; i < valutte.length; i++) {
      var openDropdown = valutte[i];
      if (openDropdown.classList.contains('showValutte')) {
        openDropdown.classList.remove('showValutte');
      }
    }
  }
}

function shipping() {
  document.getElementById("myShip").classList.toggle("showShip");
}

window.onclick = function(event) {
  if (!event.target.matches('.shipping-btn')) {
    var shipping = document.getElementsByClassName("shipping");
    var i;
    for (i = 0; i < shipping.length; i++) {
      var openDropdown = shipping[i];
      if (openDropdown.classList.contains('showShip')) {
        openDropdown.classList.remove('showShip');
      }
    }
  }
}

function categories() {
  document.getElementById("myCategories").classList.toggle("showCategories");
}

window.onclick = function(event) {
  if (!event.target.matches('.allbtn')) {
    var categories = document.getElementsByClassName("categoriess");
    var i;
    for (i = 0; i < categories.length; i++) {
      var openDropdown = categories[i];
      if (openDropdown.classList.contains('showCategories')) {
        openDropdown.classList.remove('showCategories');
      }
    }
  }
}

var countDownDate = new Date("Aug 5, 2023 15:37:25").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    


  document.getElementById("days").innerHTML = days;
  document.getElementById("Hour").innerHTML = hours;
  document.getElementById("Min").innerHTML = minutes;
  document.getElementById("Sec").innerHTML = seconds;

    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);