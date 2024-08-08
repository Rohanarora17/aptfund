const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./frontend/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          text: "hsl(var(--secondary-text))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
      },
      fontFamily: {
        sans: ["sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        12: "0.75rem",
        14: "0.875rem",
        16: "1rem",
        18: "1.125rem",
        20: "1.25rem",
        24: "1.5rem",
        26: "1.625rem",
        30: "1.875rem",
        39: "2.4375rem",
        48: "3rem",
        51: "3.1875rem",
        68: "4.25rem",
        110: "6.875rem",
      },
      lineHeight: {
        16: "1rem",
        18: "1.125rem",
        20: "1.25rem",
        22: "1.375rem",
        24: "1.5rem",
        26: "1.625rem",
        28: "1.75rem",
        32: "2rem",
        34: "2.125rem",
        42: "2.625rem",
        52: "3.25rem",
        62: "3.875rem",
        72: "4.5rem",
        116: "7.25rem",
      },
      moveInCircle: {
        "0%": {
          transform: "rotate(0deg)",
        },
        "50%": {
          transform: "rotate(180deg)",
        },
        "100%": {
          transform: "rotate(360deg)",
        },
      },
      moveVertical: {
        "0%": {
          transform: "translateY(-50%)",
        },
        "50%": {
          transform: "translateY(50%)",
        },
        "100%": {
          transform: "translateY(-50%)",
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors,
    plugin(function addTextStyles({ addComponents, theme }) {
      addComponents({
        // Component Regular Text Styles
        ".body-sm": {
          fontFamily: theme("fontFamily.inter"),
          fontSize: theme("fontSize.16"),
          lineHeight: theme("lineHeight.28"),
          fontWeight: theme("fontWeight.regular"),
        },
        ".body-md": {
          fontFamily: theme("fontFamily.inter"),
          fontSize: theme("fontSize.18"),
          lineHeight: theme("lineHeight.28"),
          fontWeight: theme("fontWeight.regular"),
        },

        // Component Semibold Text Styles
        ".body-sm-semibold": {
          fontFamily: theme("fontFamily.inter"),
          fontSize: theme("fontSize.16"),
          lineHeight: theme("lineHeight.28"),
          fontWeight: theme("fontWeight.semibold"),
        },
        ".body-md-semibold": {
          fontFamily: theme("fontFamily.inter"),
          fontSize: theme("fontSize.18"),
          lineHeight: theme("lineHeight.28"),
          fontWeight: theme("fontWeight.semibold"),
        },

        // Label Text Styles
        ".label-sm": {
          fontFamily: theme("fontFamily.inter"),
          fontSize: theme("fontSize.14"),
          lineHeight: theme("lineHeight.24"),
          color: theme("colors.secondary.text"),
        },

        // Title Text Styles
        ".title-md": {
          fontFamily: theme("fontFamily.inter"),
          fontSize: theme("fontSize.48"),
          lineHeight: theme("lineHeight.48"),
          fontWeight: theme("fontWeight.bold"),
          letterSpacing: "-1.2%",
        },

        // Heading Text Styles
        ".heading-sm": {
          fontFamily: theme("fontFamily.inter"),
          fontSize: theme("fontSize.24"),
          lineHeight: theme("lineHeight.32"),
          fontWeight: theme("fontWeight.semibold"),
          letterSpacing: "-0.6%",
        },
        ".heading-md": {
          fontFamily: theme("fontFamily.inter"),
          fontSize: theme("fontSize.30"),
          lineHeight: theme("lineHeight.36"),
          fontWeight: theme("fontWeight.semibold"),
        },

        // Display Text Styles
        ".display": {
          fontFamily: theme("fontFamily.inter"),
          fontSize: "32px",
          lineHeight: "52px",
          fontWeight: theme("fontWeight.bold"),
        },
      });
    }),
  ],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
