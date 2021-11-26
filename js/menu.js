/* Menu Sticky */

let bar = document.getElementById('bar--js');
let barh = document.getElementById('bar--js').offsetHeight;
let title = document.getElementById('bar__titleid');
let menul = document.querySelector('.bar__menu ul');
let mena = [...document.querySelectorAll('.bar__menu ul a')]; 

window.addEventListener ('scroll', function(){
  if (window.pageYOffset > barh) {
    bar.classList.add('bar--fixed');
    title.classList.replace('bar__title', 'bar__title--fixed');

    for(let i = 0; i < mena.length; i++){
    mena[i].style.color = "#ffff";
    }

  } else {
    bar.classList.remove('bar--fixed');
    title.classList.replace('bar__title--fixed', 'bar__title');

    for(let i = 0; i < mena.length; i++){
    mena[i].style.color = "#00a5c1";
    }
  }
});

/* Menu Desplegable */

let button = document.getElementById('bmenu');
let mainNav= document.getElementById('menu');

button.addEventListener('click', function(){
mainNav.classList.toggle('bar__menu--show');
button.classList.toggle('active');
});

mainNav.addEventListener('click', function(){
button.classList.toggle('active');
mainNav.classList.remove('bar__menu--show');
});

console.log(window.pageYOffset);