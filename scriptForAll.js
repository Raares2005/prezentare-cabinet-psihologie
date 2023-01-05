const btn = document.getElementById("containerLogoBurger");
const backdrop = document.getElementById("backdrop");
const btnServicii = document.getElementById("btnServicii");
const btnServiciiBurger = document.getElementById("btnBurgerDropdownContainer");
const body = document.getElementById("body")

if (btn && backdrop) {
  const bLogo = document.getElementById("containerLogoBurger");
  const bContainer = document.getElementById("burgerListContainer");
  const bContainerUl = document.getElementById("containerBurgerStuff");
  btn.addEventListener("click", function () {
    let widthB = body.offsetWidth;
    if (!(bLogo.classList.contains("open")) && widthB > 500) {
      bLogo.classList.add("open");
      backdrop.style.display = "block";
      bContainer.style.width = "300px";
      bContainerUl.style.display = "flex";
      body.style.overflow = "hidden";
    }else if (!(bLogo.classList.contains("open")) && widthB <= 500) {
      bLogo.classList.add("open");
      backdrop.style.display = "block";
      bContainer.style.width = "200px";
      bContainerUl.style.display = "flex";
      body.style.overflow = "hidden";
    } else {
      bLogo.classList.remove("open");
      backdrop.style.display = "none";
      bContainer.style.width = "0px";
      bContainerUl.style.display = "none";
      body.style.overflow = "visible";
    }
  });
  backdrop.addEventListener("click", function () {
    bLogo.classList.remove("open");
    backdrop.style.display = "none";
    bContainer.style.width = "0px";
    bContainerUl.style.display = "none";
    body.style.overflow = "visible";
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
      linkServiciiBurger.style.maxHeight = "400px";
    }else {
      btnServiciiBurger.classList.remove("pressed");
      linkServiciiBurger.style.maxHeight = "0";
    }
  });
}