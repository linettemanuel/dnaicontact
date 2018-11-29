var body = document.getElementsByTagName("body");
var parent = document.getElementById("parent");
var child = document.querySelectorAll("#child-div");
var last = document.querySelector(".child-last");
var first = document.querySelector(".first-child");
var container = document.querySelector(".main-container");
var video = document.querySelector(".video");
var icons = document.querySelectorAll(".icon");


window.onload = () => {
  addClassToChildren(body,"fadeIn");
  changeOpacity(body[0]);
  icons.forEach ((icon, index) => {
    setTimeout(() => {
      icon.style.color = "#59ce23";
      icon.style.transform = "scale(1.3)";
      icon.style.transition = "0.5s ease";
      removeStyling(icon);
    }, 2000 * (index + 1));

  });
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

function removeStyling(e) {
  setTimeout (() => {
    e.style.color = "#fff";
    e.style.transform = "scale(1)";
  }, 1000)

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
