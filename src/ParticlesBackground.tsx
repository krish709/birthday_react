import Particles from "@tsparticles/react";

export default function ParticlesBackground() {
  return (
          <Particles
      id="snow"
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },

        fpsLimit: 60,

        background: {
          color: {
            value: "transparent",
          },
        },

        particles: {
          number: {
            value: 200,
            density: {
              enable: true,
            },
          },

          color: {
            value: "#ffffff",
          },

          shape: {
            type: "circle",
          },

          opacity: {
            value: {
              min: 0.2,
              max: 0.9,
            },
            animation: {
              enable: true,
              speed: 0.5,
            },
          },

          size: {
            value: {
              min: 1,
              max: 8,
            },
          },

          move: {
            enable: true,

            direction: "bottom",

            speed: {
              min: 1,
              max: 3,
            },

            random: true,

            straight: false,

            drift: {
              min: -2,
              max: 2,
            },

            gravity: {
              enable: true,
              acceleration: 0.05,
            },

            outModes: {
              default: "out",
            },
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "bubble",
            },
          },

          modes: {
            bubble: {
              distance: 120,
              size: 10,
              duration: 2,
              opacity: 1,
            },
          },
        },

        detectRetina: true,
      }}
    />

  );
}