const img = document.getElementById('js-img');
const topBtn = document.getElementById('js-top');
const downBtn = document.getElementById('js-down');

document
  .addEventListener('click', function(ev){
    if (ev.target == topBtn ){
    img.classList.add("table__img--open");}
    if (ev.target == downBtn ){
        img.classList.remove("table__img--open");}
  });