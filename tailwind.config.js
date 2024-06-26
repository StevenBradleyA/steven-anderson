/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundColor: {
                stevenBlue: '#007bff',
                blackAlternative: '#181818',
                dark: '#222',
                darkGray: '#616161',
                keebyGray: '#2f2f2f',
                lightGray: '#d3d3d3',
                messenger: 'rgba(25, 147, 147, 0.2)',
                failure: '#ff0000',
                pogGray: '#2d2d2d',
                testTwo: '#121212',
                testFour: '#161618',
                testSeven: '#212121',
                testTen: '#242526',
                testEleven: '#282828',
                testTwelve: '#3A3B3C',
                testThirteen: '#404040',
                hotPink: 'rgb(244, 94, 145)',
                lightYellow: 'rgb(252, 243, 215)',
                poolBlue: 'rgb(57, 162, 217)',
                vibrantPurple: 'rgb(175, 110, 255)',
                vibrantGreen: 'rgb(0, 255, 170)',
            },

            textColor: {
                blackAlternative: '#181818',
                stevenBlue: '#007bff',
                hack: '#00dd00',
                failure: '#ff0000',
                darkGray: '#616161',
                keebyGray: '#2f2f2f',
                lightGray: '#d3d3d3',
                purple: '#f008e4',
                cadetBlue: '#5F9EA0',
                hotPink: 'rgb(244, 94, 145)',
                lightYellow: 'rgb(252, 243, 215)',
                poolBlue: 'rgb(57, 162, 217)',
                vibrantPurple: 'rgb(175, 110, 255)',
                vibrantGreen: 'rgb(0, 255, 170)',
            },
            screens: {
                mobile: '320px',
                tablet: '600px',
                laptop: '1024px',
                largeLaptop: '1440px',
                desktop: '1920px',
                ultrawide: '2560px',
            },
            transitionProperty: {
                colors: 'color',
                background: 'background-color',
                colorBackground: 'color, background-color',
            },
            transitionDuration: {
                400: '400ms',
            },
            transitionTimingFunction: {
                'custom-cubic': 'cubic-bezier(0.35, 0, 0, 1)',
            },
            filter: {
                'blue-to-white':
                    'invert(100%) sepia(100%) saturate(0%) hue-rotate(180deg) brightness(100%)',
            },
            fontFamily: {
                bebas: ['Bebas Neue', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities(
                {
                    '.filter-blue-to-white': {
                        filter: 'invert(100%) sepia(100%) saturate(0%) hue-rotate(180deg) brightness(100%)',
                    },
                },
                ['hover']
            );
        },
    ],
};
