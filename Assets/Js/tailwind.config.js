/*@type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {

  plugins: [
      require('flowbite/plugin')
  ]

}

module.exports = {

  content: [
      "./node_modules/flowbite/**/*.js"
  ]

}



(module.exports = {
  content: ["./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        gray: colors.coolGray,
        blue: colors.lightBlue,
        red: colors.rose,
        pink: colors.fuchsia,
      },
      spacing: {
        px: "1px",
        0: "0",
        0.5: "0.125rem",
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        2.5: "0.625rem",
        3: "0.75rem",
        3.5: "0.875rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        11: "2.75rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
}),

  //This should allow me to pull images from my main path
  (module.exports = {
    content: {
      relative: true,
      files: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
    },
  });

 //Images
module.exports = {
  theme: {
    extend: {
      listStyleImage: {
        checkmark: {},
      },
    },
  },
};

module.exports = {
  theme: {
    extend: {
      transitionDelay: {
        2000: "2000ms",
        1000: "1000ms",
        3000: "3000ms",
        4000: "4000ms",
        10000: "10000ms",
        25000: "25000ms",
      },
    },
  },
};

module.exports = {
  theme: {
    extend: {
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },
};

module.exports = {
  theme: {
    extend: {
      transitionDuration: {
        2000: "2000ms",
        10000: "10000ms",
      },
    },
  },
};

module.exports = {
  theme: {
    margin: {
      sm: "8px",
      md: "16px",
      lg: "24px",
      xl: "48px",
    },
  },
};

// tailwind.config.js
module.exports = {
  variants: {
    margin: ["responsive"],
    margin: ["responsive", "hover", "focus"],
  },
};

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      margin: {
        "-72": "-18rem",
      },
    },
  },
};

// tailwind.config.js
module.exports = {
  variants: {
    alignContent: ["responsive"],
    alignContent: ["responsive", "hover", "focus"],
  },
};

module.exports = {
  theme: {
    margin: {
      sm: "8px",
      md: "16px",
      lg: "24px",
      xl: "48px",
    },
  },
};

(module.exports = {
  content: ["./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        gray: colors.coolGray,
        blue: colors.lightBlue,
        red: colors.rose,
        pink: colors.fuchsia,
      },
      margin: {
        px: "1px",
        0: "0",
        0.5: "0.125rem",
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        2.5: "0.625rem",
        3: "0.75rem",
        3.5: "0.875rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        11: "2.75rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "90rem",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
}),

import { Tooltip } from 'flowbite';
import type { TooltipOptions, TooltipInterface } from "flowbite";

import { Carousel } from 'flowbite';

