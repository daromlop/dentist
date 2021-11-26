/* Equipo Hover */

const equimgs = [...document.querySelectorAll('.equimg')];
const iconbacks =  [...document.querySelectorAll('.iconback')];

 for (let i = 0; i < equimgs.length; i++) {
        equimgs[i].onmouseover = function() {
            [].forEach.call(iconbacks, function(iconback) {
                iconback.classList.remove('iconback--active');
            });
            iconbacks[i].classList.add('iconback--active');
        };
    };

