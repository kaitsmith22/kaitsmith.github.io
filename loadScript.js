var timer;
// Helper function to decrease first set opacity and then decrease it to 0
const fadeout_loader = setInterval(() => {
  var loader = document.getElementById("loading_icon");
  if (loader.style.opacity == "") {
    loader.style.opacity = 1;
  } else if (loader.style.opacity > 0) {
    loader.style.opacity -= 0.1;
  } else {
    loader.style.visibilty = "hidden";
    loader.style.zIndex = "-1000";
    clearInterval(timer);
  }
}, 120);

window.addEventListener("load", function() {
  clearTimeout(timer);
  document.getElementById("loading_icon").style.opacity = 0.8;
  if (document.getElementById("loading_icon").style.opacity != "") {
    fadeout_loader;
  }
  // add project sub-menu on hover
  document
    .getElementById("dropdown_select")
    .addEventListener("mouseover", function() {
      let items = document.getElementsByClassName("dropdown");
      let i;
      for (i = 0; i < items.length; i++) {
        items[i].style.display = "block";
        items[i].style.visibility = "visible";
      }
    });
  document
    .getElementById("total_dropdown")
    .addEventListener("mouseleave", function() {
      let items = document.getElementsByClassName("dropdown");
      let i;
      for (i = 0; i < items.length; i++) {
        items[i].style.display = "none";
      }
    });
    document.getElementById("mobile_drop").addEventListener("click", function(){
      let menu = document.getElementsByClassName("mobile_hidden");
      let i;
      for (i=0; i< menu.length; i++){
        if (menu[i].style.display === "flex"){
          menu[i].style.display = "none";
        }
        else{
          menu[i].style.display = "flex";
        }
      }
    });
});
