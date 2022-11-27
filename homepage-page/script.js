// function next(t) {
//     let elm = t.parentElement.parentElement.children[0];
//     let item = elm.getElementsByClassName("slide");
//     elm.append(item[0]);
// }

// function prev(t) {
//     let elm = t.parentElement.parentElement.children[0];
//     let item = elm.getElementsByClassName("slide");
//     elm.prepend(item[item.length -1]);
// }

const cItems = document.getElementsByClassName('slide');
let bNext = document.getElementById('next');
let bPrev = document.getElementById('prev');
let activeMidElement = 0;
console.log(cItems.length)
bNext.addEventListener('click', function(){
    console.log('123');
    activeMidElement++;
    cItems[3].innerHTML.classList.add('visible');
});