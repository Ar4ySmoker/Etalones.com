"use strict";
filterItem("all", "item-portfolio__side");




function filterItem(c, classParent) {
  var x, i;
  x = document.getElementsByClassName(classParent);
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    // console.log(x.length);
    mxmItemRemoveClass(x[i], "show");
    // console.log(x[i].className.indexOf(c));
    if (x[i].className.indexOf(c) > -1) mxmItemAddClass(x[i], "show");
  }
}

function mxmItemAddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function mxmItemRemoveClass(element, name) {
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