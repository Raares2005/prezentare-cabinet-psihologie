function next(t) {
    let elm = t.parentElement.parentElement.children[0];
    let item = elm.getElementsByClassName("slide");
    elm.append(item[0]);
}

function prev(t) {
    let elm = t.parentElement.parentElement.children[0];
    let item = elm.getElementsByClassName("slide");
    elm.prepend(item[item.length -1]);
}