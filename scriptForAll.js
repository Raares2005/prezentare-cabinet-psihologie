let btn = document.getElementById('containerBurger');
let open = false;
if(btn){
    btn.addEventListener('click', function(){
        if(!open){
            document.getElementById('burgerLine').classList.add('open');
            open = true;
        } else {
            document.getElementById('burgerLine').classList.remove('open');
            open = false;
        }
    });
}