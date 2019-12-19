anime({ targets: '.tube1, .connector path, .tube2', strokeDashoffset: [anime.setDashoffset, 0], duration: 10, direction: 'reverse', opacity: 1 });
anime({ targets: '.line1, .line2, .line3, .line4, .line5', strokeDasharray: [anime.setDashoffset, 0], duration: 10, direction: 'reverse', opacity: 1 });
anime({ targets: '.sensor1, .sensor2, .sensor3', opacity: 0, translateX: 64, translateY: -35, duration: 10 });
anime({ targets: '.orangeline1, .orangeline2, .orangeline3', strokeDasharray: [anime.setDashoffset, 0], duration: 10, opacity: 0, direction: 'reverse' });
anime({ targets: '.pump', translateY: -150, opacity: 0, duration: 10 });
anime({ targets: '.dot1, .dot2, .dot3, .dot4, .dot5', rx: 0, ry: 0, duration: 10 });
anime({ targets: '.circle1, .circle2', r: 0, duration: 10 });
anime({ targets: '.beat', opacity: 0, translateX: -57, translateY: 34, duration: 10 });
anime({ targets: '.server, .server2', opacity: 0, translateY: -55, duration: 10 });

let sensorTrigger = true;

$(window).on('load', () => {
    if ($(window).scrollTop() >= $('.oil svg').offset().top - $(window).height() / 2 - 200 && sensorTrigger) {
        sensorTrigger = false;
        anime({ targets: '.oil', opacity: 1, duration: 4000 });
        sensorSVG(2000);
    }
});


// SVG анимация сенсора
let sensorSVG = (startTime) => {
    let basicTimeline = anime.timeline();

    basicTimeline
        .add({
            targets: '.tube1',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 1000,
        })
        .add({
            targets: '.connector path',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 1000,
            offset: '-=400'
        })
        .add({
            targets: '.tube2',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 1000,
            offset: '-=400'
        })
        .add({
            targets: '.orangeline3',
            opacity: 1,
            easing: 'linear',
            duration: 10,
            offset: '-=700',
        })
        .add({
            targets: '.orangeline3',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'linear',
            duration: 1500,
        })
        .add({
            targets: '.orangeline2',
            opacity: 1,
            easing: 'linear',
            duration: 10,
        })
        .add({
            targets: '.orangeline2',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'linear',
            duration: 600,
        })
        .add({
            targets: '.orangeline1',
            opacity: 1,
            easing: 'linear',
            duration: 10,
        })
        .add({
            targets: '.orangeline1',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'linear',
            duration: 1500,
            complete: () => {
                anime({
                    targets: '.orangeline1, .orangeline2, .orangeline3',
                    strokeDasharray: 8.8,
                    easing: 'easeInOutSine',
                    duration: 0,
                    delay: 500
                });
            }
        })
        .add({
            targets: '.sensor3',
            translateX: 0,
            translateY: 0,
            opacity: 1,
            easing: 'easeInOutSine',
            duration: 1000,
            offset: '-=2600'
        })
        .add({
            targets: '.sensor2',
            translateX: 0,
            translateY: 0,
            opacity: 1,
            easing: 'easeInOutSine',
            duration: 1000,
            offset: '-=2200'
        })
        .add({
            targets: '.sensor1',
            translateX: 0,
            translateY: 0,
            opacity: 1,
            easing: 'easeInOutSine',
            duration: 1000,
            offset: '-=1800'
        })
        .add({
            targets: '.pump',
            translateY: 0,
            opacity: 1,
            easing: 'easeInOutSine',
            duration: 1000,
            offset: '-=800'
        })
        .add({
            targets: '.dot1',
            rx: 3.76,
            ry: 3.76,
            duration: 1000,
            offset: '-=1400',
            complete: () => {
                anime({
                    targets: '.line1',
                    strokeDashoffset: 0,
                    opacity: {
                        value: 1,
                        duration: 10
                    },
                    easing: 'easeInOutSine',
                    duration: 1000,
                    complete: () => {
                        anime({
                            targets: '.sensors',
                            opacity: 1,
                            easing: 'easeInOutSine',
                            duration: 1000,
                        });
                    }
                });
            }
        })
        .add({
            targets: '.dot2',
            rx: 3.76,
            ry: 3.76,
            duration: 1000,
            offset: '-=1000',
            complete: () => {
                anime({
                    targets: '.line2',
                    strokeDashoffset: 0,
                    opacity: {
                        value: 1,
                        duration: 10
                    },
                    easing: 'easeInOutSine',
                    duration: 1000
                });
            }
        })
        .add({
            targets: '.dot3',
            rx: 3.76,
            ry: 3.76,
            duration: 1000,
            offset: '-=1000',
            complete: () => {
                anime({
                    targets: '.line3',
                    strokeDashoffset: 0,
                    opacity: {
                        value: 1,
                        duration: 10
                    },
                    easing: 'easeInOutSine',
                    duration: 1000,
                    complete: () => {
                        anime({
                            targets: '.circle1',
                            r: 39.572,
                            duration: 1000,
                            complete: () => {
                                anime({
                                    targets: '.beat',
                                    translateY: 0,
                                    translateX: 0,
                                    opacity: 1,
                                    duration: 1000,
                                    complete: () => {
                                        anime({
                                            targets: '.cable',
                                            opacity: 1,
                                            easing: 'easeInOutSine',
                                            duration: 1000,
                                        });
                                    }
                                })
                            }
                        });
                    }
                });
            }
        })
        .add({
            targets: '.dot4',
            rx: 3.76,
            ry: 3.76,
            duration: 1000,
            complete: () => {
                anime({
                    targets: '.line4',
                    strokeDashoffset: 0,
                    opacity: {
                        value: 1,
                        duration: 10
                    },
                    easing: 'easeInOutSine',
                    duration: 1000,
                    complete: () => {
                        anime({
                            targets: '.central',
                            opacity: 1,
                            easing: 'easeInOutSine',
                            duration: 1000,
                        });
                    }
                });
            }
        })
        .add({
            targets: '.server',
            opacity: 1,
            translateY: 0,
            duration: 1000,
            offset: '-=1300'
        })
        .add({
            targets: '.dot5',
            rx: 3.76,
            ry: 3.76,
            duration: 1000,
            offset: '-=1000',
            complete: () => {
                anime({
                    targets: '.line5',
                    strokeDashoffset: 0,
                    opacity: {
                        value: 1,
                        duration: 10
                    },
                    easing: 'easeInOutSine',
                    duration: 1000,
                    complete: () => {
                        anime({
                            targets: '.circle2',
                            r: 39.572,
                            duration: 1000,
                            complete: () => {
                                anime({
                                    targets: '.server2',
                                    translateY: 0,
                                    translateX: 0,
                                    opacity: 1,
                                    duration: 1000,
                                    complete: () => {
                                        anime({
                                            targets: '.control',
                                            opacity: 1,
                                            easing: 'easeInOutSine',
                                            duration: 1000,
                                        });
                                    }
                                })
                            }
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
        })
}