import anime from 'animejs/lib/anime.es.js';

let intro = document.getElementById('intro'),
    services = document.getElementById('services'),

    // homepage scripts
    start_event = 'view_event_focus',
    end_event = 'view_event_blur',
    // intro
    intro_in = 'bounceIn',
    intro_out = 'bounceOut',
    // services
    services_in = 'bounceInRight',
    services_out = 'bounceOutLeft';

if (intro) {
    intro.addEventListener(start_event, function(event){
        event.target.classList.add('animate','active',intro_in);
    });

    intro.addEventListener(end_event, function(event){
        event.target.classList.remove('active');
    });
}

if (services) {
    services.addEventListener(start_event, function(event){
        event.target.classList.add('animate','active',services_in);
    });

    services.addEventListener(end_event, function(event){
        event.target.classList.remove('active');
    });
}

// trigger event - an init event
if (window.sections.active_section) {
    window.sections.active_section.dispatchEvent(
        new CustomEvent(start_event, { bubbles: false })
    );
}


// Animations Below - its going to get ugly
let animations = [];

document.getElementById('testing').addEventListener('click', () => {
    // debugger;
    // animations.forEach((item) => {
    //     item.play();
    // });

    island.play();
});

{
    animations.push(anime.timeline({
            duration: 2800,
            easing: 'linear',
            loop: true,
            autoplay: false,
        }).add({
            targets: '#wave-7',
            translateX: '2%',
            opacity: [
                {value: 1},
                {value: 0}
            ],
        }).add({
            targets: '#wave-8',
            translateX: '2%',
            endDelay: 5000,
            opacity: [
                {value: 1},
                {value: 0}
            ],
        }, '-=800'));
}

{
    animations.push(anime.timeline({
            duration: 2800,
            easing: 'linear',
            loop: true,
            autoplay: false,
        }).add({
            targets: '#wave-3',
            translateX: '2%',
            delay: 3000,
            opacity: [
                {value: 1},
                {value: 0}
            ],
        }).add({
            targets: '#wave-4',
            translateX: '2%',
            endDelay: 8000,
            opacity: [
                {value: 1},
                {value: 0}
            ],
        }, '-=800'));
}

{
    animations.push(anime.timeline({
            duration: 2800,
            easing: 'linear',
            loop: true,
            autoplay: false,
        }).add({
            targets: '#wave-5',
            translateX: '-2%',
            delay: 1200,
            opacity: [
                {value: 1},
                {value: 0}
            ],
        }).add({
            targets: '#wave-6',
            translateX: '-2%',
            endDelay: 3000,
            opacity: [
                {value: 1},
                {value: 0}
            ],
        }, '-=800'));
}

{
    animations.push(anime.timeline({
            duration: 2800,
            easing: 'linear',
            loop: true,
            autoplay: false,
        }).add({
            targets: '#wave-1',
            translateX: '-2%',
            delay: 2200,
            opacity: [
                {value: 1},
                {value: 0}
            ],
        }).add({
            targets: '#wave-2',
            translateX: '-2%',
            endDelay: 9000,
            opacity: [
                {value: 1},
                {value: 0}
            ],
        }, '-=800'));
}

{
    animations.push(anime.timeline({
        duration: 400,
        easing: 'linear',
        autoplay: false,
        direction: 'reverse',
        endDelay: 1500,
    }).add({
        targets: '#pin',
        translateX: '3%',
        translateY: '-18%',
        opacity: 0,
        // delay: 1500,
    }, 0).add({
        targets: '#pin-shadow',
        translateX: '10%',
        translateY: '7%',
        opacity: 0,
    }, 0));
}

let island = anime({
    targets: '.svg-hawaii',
    translateX: '0%',
    translateY: '-100%',
    autoplay: false,
    complete: function(anim) {
        animations.forEach((item) => {
            item.play();
        });
    }
});

anime({
    targets: '#leash-hang',
    rotate: [
        5,
        -3,
    ],
    easing: 'easeInOutQuad',
    loop: true,
    direction: 'alternate',
    duration: 1200,
})

anime({
    targets: '#tink-tail',
    loop: true,
    easing: 'linear',
    direction: 'alternate',
    duration: 1400,
    endDelay: 1100,
    rotate: [
        12,
        -2,
        7,
        -2,
        7,
        -2,
        2,
        -2
    ]
})

anime({
    targets: '#tink-head',
    loop: true,
    easing: 'linear',
    direction: 'alternate',
    duration: 450,
    delay: 4200,
    endDelay: 500,
    rotate: 5,
})

let faceResting = document.getElementById('ali-face-resting');
let faceSmile = document.getElementById('ali-face-smile');

let smile = () => {
    faceSmile.style.opacity = 1;
    faceResting.style.opacity = 0;
    setTimeout(resting, 2000);
}

let resting = () => {
    faceSmile.style.opacity = 0;
    faceResting.style.opacity = 1;
    setTimeout(smile, 12000);
}

setTimeout(smile, 6000);