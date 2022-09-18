particlesJS("particles-js", {
    "particles": {
        "number": {"value": 80, "density": {"enable": true, "value_area": 800}},
        "color": {"value": "#ffffff"},
        "shape": {
            "type": "circle",
            "stroke": {"width": 0, "color": "#000000"},
            "polygon": {"nb_sides": 5},
            "image": {"src": "img/github.svg", "width": 100, "height": 100}
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {"enable": false, "speed": 1, "opacity_min": 0.1, "sync": false}
        },
        "size": {"value": 3, "random": true, "anim": {"enable": false, "speed": 40, "size_min": 0.1, "sync": false}},
        "line_linked": {"enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1},
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {"enable": false, "rotateX": 600, "rotateY": 1200}
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {"enable": true, "mode": "repulse"},
            "onclick": {"enable": true, "mode": "push"},
            "resize": true
        },
        "modes": {
            "grab": {"distance": 400, "line_linked": {"opacity": 1}},
            "bubble": {"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3},
            "repulse": {"distance": 200, "duration": 0.4},
            "push": {"particles_nb": 4},
            "remove": {"particles_nb": 2}
        }
    },
    "retina_detect": true
});


$(document).ready(function() {
    $("div.dropdown button").click((event) => {
        if($(event.target).next().css('display') == 'flex'){
            $(event.target).next().css('display', 'none');
            $(event.target).children().removeClass('rotate');
        } else if($(event.target).next().css('display') == 'none'){
            $(event.target).next().css('display', 'flex');
            $(event.target).children().addClass('rotate');
        }
    });

    $('.hamburger').click(() => {
        if($('nav').css('display') == 'none'){
            $('nav').css('display', 'flex').css('animation-name', 'navAnim').addClass('animInfo').css('animation-duration', '.5s');
            $('.hamburger :nth-child(1)').css('animation-name', 'bar1Anim').addClass('animInfo');
            $('.hamburger :nth-child(2)').css('animation-name', 'bar2Anim').addClass('animInfo');
            $('.hamburger :nth-child(3)').css('animation-name', 'bar3Anim').addClass('animInfo');
        } else if($('nav').css('display') == 'flex'){
            $('nav').css('display', 'none').css('animation-name', 'navAnimReverse').css('animation-duration', '.5s');
            $('.hamburger :nth-child(1)').css('animation-name', 'bar1AnimReverse');
            $('.hamburger :nth-child(2)').css('animation-name', 'bar2AnimReverse');
            $('.hamburger :nth-child(3)').css('animation-name', 'bar3AnimReverse');
        }
    });

    if ($(window).width() > 800 ) {
        $('nav').removeClass('animInfo').css('animation-name', 'unset').css('opacity', '1');
    }
});
