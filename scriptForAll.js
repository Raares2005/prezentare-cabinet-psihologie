const btn = document.getElementById("containerLogoBurger");
const bLogo = document.getElementById("containerLogoBurger");
const bContainer = document.getElementById("burgerListContainer");
const backdrop = document.getElementById("backdrop");
const btnServicii = document.getElementById("btnServicii");

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

if (btnServicii) {
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
  //  function invisible() {
  //   dropdown.style.display = "none";
  //  }
}
