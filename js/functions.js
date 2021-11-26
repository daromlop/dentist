/* Slider */

(function(){
    const sliders = [...document.querySelectorAll('.slider__container')]; 
    const dots = [...document.querySelectorAll('.dots')]; 
    const arrowNext = document.querySelector('#next');
    const arrowBefore = document.querySelector('#prev');
    let value;



    arrowNext.addEventListener('click', ()=>changePosition(1),);
    arrowBefore.addEventListener('click', ()=>changePosition(-1));

       for (let i = 0; i < dots.length; i++) {
        dots[i].onclick = function() {
            [].forEach.call(dots, function(dot) {
                dot.classList.remove('dots--active');
            });
            [].forEach.call(sliders, function(slide) {
                slide.classList.remove('slider__container--show');
            });
            this.classList.add('dots--active');
            sliders[i].classList.add('slider__container--show');
        };
    };

    function changePosition(change) {
        const CurrentElement = Number(document.querySelector('.slider__container--show').dataset.id); 
        value = CurrentElement;
        value += change;

        if (value === 0 || value == sliders.length + 1) {
            value = value === 0 ? sliders.length : 1;
        };

        sliders[CurrentElement - 1].classList.toggle('slider__container--show');
        sliders[value - 1].classList.toggle('slider__container--show');
        dots[CurrentElement - 1].classList.toggle('dots--active');
        dots[value - 1].classList.toggle('dots--active');
    }

    setInterval(function() {
        changePosition(1);
    }, 5000);

})();

/* Servicios */

let botonpla = document.getElementById('servicios').getElementsByClassName('button');

Array.prototype.forEach.call(botonpla, function(e) {
e.addEventListener('click', function(){
  if(e.innerHTML === "VER MÁS") {
    e.parentElement.querySelector('.servicios__lados').style.transform = "rotateY(180deg)";
    e.innerHTML = "VOLVER";
  } else {
    e.parentElement.querySelector('.servicios__lados').style.transform = "rotateY(0deg)";
    e.innerHTML = "VER MÁS";
  }
});
});


