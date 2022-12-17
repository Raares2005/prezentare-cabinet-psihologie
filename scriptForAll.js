const btn = document.getElementById("containerLogoBurger");
const bLogo = document.getElementById("containerLogoBurger");
const bContainer = document.getElementById("burgerListContainer");
const backdrop = document.getElementById("backdrop");
const btnServicii = document.getElementById("btnServicii");
const dropdown = document.getElementById("dropdown");
const dropDownLinks = document.getElementsByClassName("dropDownLinks");

let open = false;
if (btn && backdrop) {
  btn.addEventListener("click", function () {
    if (!bLogo.classList.contains("open")) {
      bLogo.classList.add("open");
      backdrop.style.display = "block";
      bContainer.classList.add("bContainerOpen");
      open = true;
    } else {
      bLogo.classList.remove("open");
      backdrop.style.display = "none";
      bContainer.classList.remove("bContainerOpen");
      open = false;
    }
  });
  backdrop.addEventListener("click", function () {
    bLogo.classList.remove("open");
    backdrop.style.display = "none";
    bContainer.classList.remove("bContainerOpen");
    open = false;
  });
}

if(btnServicii) {
  dropdown.addEventListener("mouseover", function() {
    for(let i = 0; i < dropDownLinks.length; i++) {
      link = dropDownLinks[i].addEventListener("mouseleave", function(){
        link.classList.remove("show");
      });
    }
  });
}
