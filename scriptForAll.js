const btn = document.getElementById("containerLogoBurger");
const backdrop = document.getElementById("backdrop");
const btnServicii = document.getElementById("btnServicii");
const btnServiciiBurger = document.getElementById("btnBurgerDropdownContainer");

if (btn && backdrop) {
  const bLogo = document.getElementById("containerLogoBurger");
  const bContainer = document.getElementById("burgerListContainer");
  btn.addEventListener("click", function () {
    if (!bLogo.classList.contains("open")) {
      bLogo.classList.add("open");
      backdrop.style.display = "block";
      bContainer.classList.add("bContainerOpen");
    } else {
      bLogo.classList.remove("open");
      backdrop.style.display = "none";
      bContainer.classList.remove("bContainerOpen");
    }
  });
  backdrop.addEventListener("click", function () {
    bLogo.classList.remove("open");
    backdrop.style.display = "none";
    bContainer.classList.remove("bContainerOpen");
  });
}

if(btnServicii) {
  let hoverTimeout;
  const dropdown = document.getElementById("dropdown");
  btnServicii.addEventListener("mouseover", function() {
    dropdown.style.display = "block";
    clearTimeout(hoverTimeout);
  });
  btnServicii.addEventListener("mouseleave", function(){
    hoverTimeout = setTimeout(() => {
      dropdown.style.display = "none";
    }, 1000);
  });
  dropdown.addEventListener("mouseover", function() {
    clearTimeout(hoverTimeout);
  });
  dropdown.addEventListener("mouseleave", function () {
    dropdown.style.display = "none";
  });
}


if(btnServiciiBurger) {
  const linkServiciiBurger = document.getElementById("serviciiLinksBurger");
  btnServiciiBurger.addEventListener("click", function() {
    if(!btnServiciiBurger.classList.contains("pressed")) {
      btnServiciiBurger.classList.add("pressed");
      linkServiciiBurger.classList.add("pressed");
      con
    }else {
      btnServiciiBurger.classList.remove("pressed");
      linkServiciiBurger.classList.remove("pressed");
    }
  });
}