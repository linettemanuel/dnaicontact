var body = document.getElementsByTagName("body");
var parent = document.getElementById("parent");
var child = document.querySelectorAll("#child-div");
var last = document.querySelector(".child-last");
var first = document.querySelector(".first-child");
var container = document.querySelector(".main-container");
var video = document.querySelector(".video");

window.onload = () => {
  addClassToChildren(body,"fadeIn");
  changeOpacity(body[0]);
}

parent.onscroll = () => {
  child.forEach ( (item, index) => {

    if ((item.getBoundingClientRect().top < 700) && (item.getBoundingClientRect().top > 0) && (index != 0)){
      var childrenList = item.children;
      item.classList.add("appearUp");
      addClassToChildren(childrenList, "appearUp");
      changeOpacity(item);
    }
  })
}



function addClassToChildren(e, choosenclass) {
  for (var i = 0; i < e.length; i++) {
    e[i].classList.add(choosenclass);
    var newChildren = e[i].children;
    addClassToChildren(newChildren, choosenclass);
  }
}

function changeOpacity(e) {
  e.style.opacity = 1;
  removeAnimation(e,("appearUp", "fadeIn"));
}

function removeAnimation(e, choosenclass) {
  e.classList.remove(choosenclass);
}


/*
parent.onscroll = () => {
  child.forEach( item => {
    if(item.getBoundingClientRect().top < 50){
      item.style.visibility = "hidden";
    }
    else if (item.getBoundingClientRect().top > 50 && item.getBoundingClientRect().top < screen.height * 0.65) {
      item.style.visibility = "visible";
    }
    else {
      item.style.visibility = "hidden";
    }
  })
}



parent.onscroll = () => {
  var position = item.getBoundingClientRect();
  if(position.top < 50){
    item.style.visibility = "hidden";
  }
  else if (position.top > 50 && position.top < screen.height * 0.65) {
    item.style.visibility = "visible";
  }
  else {
    item.style.visibility = "hidden";
  }
}
*/
