let btn = document.getElementById('containerLogoBurger');
let backdrop = document.getElementById('backdrop');
let open = false;
if(btn && backdrop) {
    btn.addEventListener('click', function(){
        if(!open) {
            document.getElementById('containerLogoBurger').classList.add('open');
            backdrop.style.display = 'block';
            open = true;
        } else {
            document.getElementById('containerLogoBurger').classList.remove('open');
            backdrop.style.display = 'none';
            open = false;
        }
    });
    backdrop.addEventListener('click', function() {
        document.getElementById('containerLogoBurger').classList.remove('open');
        backdrop.style.display = 'none';
        open = false;
    });
}