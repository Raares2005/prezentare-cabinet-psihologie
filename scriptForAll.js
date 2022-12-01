let btn = document.getElementById('containerLogoBurger');
let bLogo = document.getElementById('containerLogoBurger');
let bContainer = document.getElementById('burgerListContainer');
let backdrop = document.getElementById('backdrop');
let btnServicii = document.getElementById('btnServicii');
let dropdown = document.getElementById('dropdown');
let open = false;
if(btn && backdrop) {
    btn.addEventListener('click', function(){
        if(!bLogo.classList.contains('open')) {
            bLogo.classList.add('open');
            backdrop.style.display = 'block';
            bContainer.classList.add('bContainerOpen');
            open = true;
        } else {
            bLogo.classList.remove('open');
            backdrop.style.display = 'none';
            bContainer.classList.remove('bContainerOpen');
            open = false;
        }
    });
    backdrop.addEventListener('click', function() {
        bLogo.classList.remove('open');
        backdrop.style.display = 'none';
        bContainer.classList.remove('bContainerOpen');
        open = false;
    });
}

if(btnServicii) {
    btnServicii.addEventListener('mouseover', function() {
        if(!dropdown.classList.contains('visible')) dropdown.classList.add('visible');
    });
    dropdown.addEventListener('mouseleave', function(){
        dropdown.classList.remove('visible');
    });
}