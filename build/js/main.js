anime({ targets: '#width1, #width2, #crane path, #crane polygon', strokeDashoffset: [anime.setDashoffset, 0], duration: 10, direction: 'reverse', opacity: 1 });
anime({ targets: '#yellowpath, #buildLine1, #buildLine2, #line1, #line3, #orangeLine', strokeDasharray: [anime.setDashoffset, 0], duration: 10, direction: 'reverse' });
anime({ targets: '#buildDot1 ellipse, #buildDot2 ellipse, #dot3 ellipse, #dot1 ellipse, #orangeDot_1_ ellipse', rx: 0, ry: 0, duration: 10 });
anime({ targets: '#step2circle, #step3circle, #circle1, #circle2, #orangeCircle', r: 0, duration: 10 });
anime({ targets: '#step2right', opacity: 0, translateX: 44, translateY: 44, duration: 10 });
anime({ targets: '#step2left', opacity: 0, translateX: -44, translateY: -44, duration: 10 });
anime({ targets: '#beat', opacity: 0, translateX: -57, translateY: 34, duration: 10 });
anime({ targets: '#d1, #d2, #d3, #d4, #d5, #d6, #d7', opacity: 0, translateX: -15, translateY: -15, duration: 10 });
anime({ targets: '#tubesLine path, #tubes polygon, #tubes path, #tubesStend polygon', opacity: 0, translateY: -30, duration: 10 });
anime({ targets: '#server, #server2', opacity: 0, translateY: -55, duration: 10 });
anime({ targets: '#step3right', opacity: 0, translateX: 53, translateY: -53, duration: 10 });
anime({ targets: '#man', opacity: 0, translateX: -53, translateY: 53, duration: 10 });
anime({ targets: '#circles', opacity: 0, duration: 10 });


let sensorTrigger = true;

$(window).on('load', () => {
    if ($(window).scrollTop() >= $('.sensor svg').offset().top - $(window).height() / 2 - 200 && sensorTrigger) {
        sensorTrigger = false;
        anime({ targets: '.sensor', opacity: 1, duration: 4000 });
        sensorSVG(2000);
    }
});

// SVG анимация сенсора
let sensorSVG = (startTime) => {
    let basicTimeline = anime.timeline();

    basicTimeline
    .add({
        targets: '.sensor svg',
        opacity: 1,
        duration: 10,
        delay: startTime
    })
    .add({
        targets: '#tubes polygon, #tubes path, #tubesStend polygon',
        translateY: 0,
        opacity: 1,
        duration: 1000,
        delay: (el, i, l) => {
            return i * 20;
        },
        offset: '-=700'
    })
     .add({
         targets: '#tubesLine path',
         translateY: 0,
         opacity: 1,
         duration: 1000,
         offset: '-=700',
         delay: (el, i, l) => {
             return i * 20;
         },
     })
     .add({
         targets: '.magistral',
         opacity: 1,
         duration: 1000,
         offset: '-=1000',
         complete: () => {
             anime({
                 targets: '#d2',
                 translateY: 0,
                 translateX: 0,
                 opacity: 1,
                 duration: 1000,
                 delay: 600
             })
             anime({
                 targets: '#d3',
                 translateY: 0,
                 translateX: 0,
                 opacity: 1,
                 duration: 1000,
                 delay: 700
             })
             anime({
                 targets: '#d4',
                 translateY: 0,
                 translateX: 0,
                 opacity: 1,
                 duration: 1000,
                 delay: 800
             })
             anime({
                 targets: '#d5',
                 translateY: 0,
                 translateX: 0,
                 opacity: 1,
                 duration: 1000,
                 delay: 900
             })
             anime({
                 targets: '#d6',
                 translateY: 0,
                 translateX: 0,
                 opacity: 1,
                 duration: 1000,
                 delay: 1000
             })
             anime({
                 targets: '#d7',
                 translateY: 0,
                 translateX: 0,
                 opacity: 1,
                 duration: 1000,
                 delay: 1100
             })
         }
     })
    .add({
        targets: '#yellowpath',
        strokeDashoffset: 0,
        easing: 'easeInOutSine',
        duration: 2500,
        offset: '-=700',
        complete: () => {
            anime({
                targets: '#yellowpath',
                strokeDasharray: 8.8,
                easing: 'easeInOutSine',
                duration: 0
            });
        }
    })
    .add({
        targets: '#orangeDot_1_ ellipse',
        rx: 3.76,
        ry: 3.76,
        duration: 1000,
        offset: '-=1800'
    })
    .add({
        targets: '#orangeLine',
        strokeDashoffset: 0,
        easing: 'easeInOutSine',
        duration: 1000,
        offset: '-=1000',
        complete: () => {
            anime({
                targets: '.sensorcable',
                opacity: 1,
                duration: 1000
            });
        }
    })
    .add({
        targets: '#orangeCircle',
        r: 39.572,
        duration: 1000,
        offset: '-=500'
    })
    .add({
        targets: '#beat',
        translateY: 0,
        translateX: 0,
        opacity: 1,
        duration: 1000,
        offset: '-=700'
    })
    .add({
        targets: '#width1, #width2',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1000,
        offset: '-=1000',
        complete: () => {
            anime({
                targets: '.km',
                opacity: 1,
                duration: 1000
            });
        }
    })
    .add({
        targets: '#d1',
        translateY: 0,
        translateX: 0,
        opacity: 1,
        duration: 1000,
        offset: '-=1200'
    })
    .add({
        targets: '#dot3 ellipse',
        rx: 3.76,
        ry: 3.76,
        duration: 1000,
        offset: '-=700'
    })
    .add({
        targets: '#line3',
        strokeDashoffset: 0,
        easing: 'easeInOutSine',
        duration: 1000,
        offset: '-=700'
    })
    .add({
        targets: '#circle2',
        r: 66.682,
        duration: 1000,
        offset: '-=500'
    })
    .add({
        targets: '#server2',
        opacity: 1,
        translateY: 0,
        duration: 1000,
        offset: '-=500'
    })
    .add({
        targets: '#dot1 ellipse',
        rx: 3.76,
        ry: 3.76,
        duration: 1000,
        offset: '-=700'
    })
    .add({
        targets: '#line1',
        strokeDashoffset: 0,
        easing: 'easeInOutSine',
        duration: 1000,
        offset: '-=700'
    })
    .add({
        targets: '#circle1',
        r: 39.572,
        duration: 1000,
        offset: '-=500'
    })
    .add({
        targets: '#server',
        opacity: 1,
        translateY: 0,
        duration: 1000,
        offset: '-=500',
        complete: () => {
            anime({
                targets: '.dts',
                opacity: 1,
                duration: 1000
            });
        }
    })
    .add({
        targets: '#buildDot1 ellipse, #buildDot2 ellipse',
        rx: 3.76,
        ry: 3.76,
        duration: 1000,
        offset: '-=3500'
    })
    .add({
        targets: '#buildLine1, #buildLine2',
        strokeDashoffset: 0,
        easing: 'easeInOutSine',
        duration: 600,
        direction: 'reverse',
        offset: '-=2500'
    })
    .add({
        targets: '#step2circle, #step3circle',
        r: 66.682,
        duration: 1000,
        offset: '-=2000'
    })
    .add({
        targets: '#step2right, #step2left, #step3right, #man',
        opacity: 1,
        translateX: 0,
        translateY: 0,
        duration: 1000,
        offset: '-=1000'
    })
    .add({
        targets: '#circles',
        opacity: 1,
        duration: 1000,
        offset: '-=700',
        //loop: true
    })
    .add({
        targets: '#crane path, #crane polygon',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 600,
        direction: 'reverse',
        offset: '-=700',
        complete: () => {
            anime({
                targets: '.servers, .workplace, .control',
                opacity: 1,
                duration: 1000
            });
            anime({
                targets: '.wrap',
                easing: 'linear',
                translateX: 0,
                duration: 400
            });
        }
    });
}