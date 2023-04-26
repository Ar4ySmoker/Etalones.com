"use strict";
filterSelection("all");

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("portfolio__side");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    // console.log(x.length);
    mxmRemoveClass(x[i], "show");
    // console.log(x[i].className.indexOf(c));
    if (x[i].className.indexOf(c) > -1) mxmAddClass(x[i], "show");
  }
}

function mxmAddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function mxmRemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  // console.log(arr1);
  element.className = arr1.join(" ");
  // console.log(arr1.join(" "));
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("btnListFilter");

if(btnContainer != null) {

  var btns = btnContainer.getElementsByClassName("btn");


  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(event){
      event.preventDefault();
      var current = btnContainer.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
}