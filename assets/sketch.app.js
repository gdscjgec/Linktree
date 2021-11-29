/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Particles for Index Page Animation */

// Particles (Index Page) || Id: "particles-js"

particlesJS(
    "particles-js",

    {
        particles: {
            number: {
                value: 20,
                density: {
                    enable: false,
                    value_area: 600,
                },
            },
            color: {
                value: ["#f74037", "#1e90ff", "#14b25f", "#ffcc1d"],
            },
            shape: {
                type: ["circle", "triangle", "polygon"],
                stroke: {
                    width: 0,
                    color: "#000000",
                },
                polygon: {
                    nb_sides: 4,
                },
                image: {
                    src: "img/logo.svg",
                    width: 50,
                    height: 50,
                },
            },
            opacity: {
                value: 1,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.2,
                    sync: false,
                },
            },
            size: {
                value: 15,
                random: true,
                anim: {
                    enable: true,
                    speed: 10,
                    size_min: 0.1,
                    sync: false,
                },
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#3a3f50",
                opacity: 0.5,
                width: 1,
            },
            move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "bounce",
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                },
            },
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: false,
                    mode: "repulse",
                },
                onclick: {
                    enable: false,
                    mode: "push",
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1,
                    },
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3,
                },
                repulse: {
                    distance: 100,
                },
                push: {
                    particles_nb: 4,
                },
                remove: {
                    particles_nb: 2,
                },
            },
        },
        retina_detect: true,
        config_demo: {
            hide_card: false,
            background_color: "#fafafa",
            background_image: "",
            background_position: "50% 50%",
            background_repeat: "no-repeat",
            background_size: "cover",
        },
    }
);
