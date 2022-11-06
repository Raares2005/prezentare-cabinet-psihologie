let btn = document.getElementById('containerLogoBurger');
let bLogo = document.getElementById('containerLogoBurger');
let bContainer = document.getElementById('burgerListContainer');
let backdrop = document.getElementById('backdrop');
let open = false;
if(btn && backdrop) {
    btn.addEventListener('click', function(){
        if(!open) {
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