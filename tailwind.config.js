/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: ['12px', '24px'],
      sm: ['14px', '24px'],
      base: ['16px', '24px'],
      lg: ['18px', '22px'],
      xl: ['20px', '22px'],
      '2xl': ['24px', '20px'],
      '3xl': ['40px', '19.2px'],
      '4xl': ['56px', '19.2px'],
    },

    extend: {
      colors: {
        primary: 'hsl(14, 86%, 42%)',
        'primary-dark': 'hsl(14, 86%, 25%)',
        secondary: 'hsl(159, 69%, 38%)',
        rose: {
          50: 'hsl(20, 50%, 98%)',
          100: 'hsl(13, 31%, 94%)',
          300: 'hsl(14, 25%, 72%)',
          400: 'hsl(7, 20%, 60%)',
          500: 'hsl(12, 20%, 44%)',
          900: 'hsl(14, 65%, 9%)',
        },
        backdrop: 'rgba(0,0,0,0.5)',
      },

      fontFamily: {
        redhat: 'var(--font-redhat)',
      },

      screens: {
        xs: '375px',
        ss: '620px',
        sm: '768px',
        md: '1060px',
        lg: '1200px',
        wide: '1440px',
      },

      gridTemplateColumns: {
        'auto-fill-250': 'repeat(auto-fill, minmax(250px, 1fr))',
        'auto-fit-250': 'repeat(auto-fit, minmax(250px, 1fr))',
      },

      content: {
        cartIcon: 'url("./assets/images/icon-add-to-cart.svg")',
        carbonNeutralIcon: 'url("./assets/images/icon-carbon-neutral.svg")',
        confirmedIcon: 'url("./assets/images/icon-order-confirmed.svg")',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addUtilities, addComponents }) {
      addBase({}),
        addComponents({
          '.container': {
            '@apply max-w-[70rem] mx-auto py-6 px-5 sm:p-10': {},
          },
          '.modal': {
            '@apply fixed inset-0 m-auto rounded-lg h-[717px] sm:w-[688px] sm:h-[685px]': {},
          },
          '.heading1': {
            '@apply font-bold text-rose-900 text-[2.5rem] leading-[1.2]': {},
          },
          '.heading2': {
            '@apply font-bold text-rose-900 text-[1.5rem]': {},
          },
          '.heading3': {
            '@apply font-bold text-rose-900 text-base': {},
          },
          '.heading4': {
            '@apply font-bold text-rose-900 text-sm': {},
          },
          '.button': {
            '@apply font-semibold py-2 px-6 rounded-full cursor-pointer': {},
          },
          '.cart-btn': {
            '@apply flex justify-center items-center gap-2 bg-white text-rose-900 absolute justify-self-center bottom-[90px] border-[1px] border-rose-400 hover:text-primary hover:border-primary hover:bg-rose-50 before:content-cartIcon before:w-[19px] before:h-[21px]':
              {},
          },
          '.carbonNeutral': {
            '@apply flex justify-center items-center before:content-carbonNeutralIcon before:w-[21px] before:h-[20px]':
              {},
          },
          '.orderConfirmed': {
            '@apply before:content-confirmedIcon before:w-[48px] before:h-[48px]': {},
          },
        }),
        addUtilities({});
    }),
  ],
};
