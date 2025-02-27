/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    important: '#root', // MUIとの競合を避けるため
    theme: {
      extend: {
        colors: {
          // MUIテーマと一致させる
          primary: {
            light: '#FF9CAA',
            DEFAULT: '#FF6B81',
            dark: '#D84A5A',
          },
          secondary: {
            light: '#A396F5',
            DEFAULT: '#7D6AF3',
            dark: '#5947C2',
          },
          success: {
            light: '#81C784',
            DEFAULT: '#4CAF50',
            dark: '#388E3C',
          },
          error: {
            light: '#E57373',
            DEFAULT: '#F44336',
            dark: '#D32F2F',
          },
          warning: {
            light: '#FFB74D',
            DEFAULT: '#FF9800',
            dark: '#F57C00',
          },
          info: {
            light: '#64B5F6',
            DEFAULT: '#2196F3',
            dark: '#1976D2',
          },
          grey: {
            50: '#FAFAFA',
            100: '#F5F5F5',
            200: '#EEEEEE',
            300: '#E0E0E0',
            400: '#BDBDBD',
            500: '#9E9E9E',
            600: '#757575',
            700: '#616161',
            800: '#424242',
            900: '#212121',
          },
          background: {
            default: '#FFF9F9',
            paper: '#FFFFFF',
          },
        },
        // 8pxベースのスペーシング
        spacing: {
          0: '0px',
          0.5: '4px',
          1: '8px',
          2: '16px',
          3: '24px',
          4: '32px',
          5: '40px',
          6: '48px',
          7: '56px',
          8: '64px',
          10: '80px',
          12: '96px',
          16: '128px',
        },
        borderRadius: {
          'sm': '4px',
          DEFAULT: '8px',
          'md': '12px',
          'lg': '16px',
          'xl': '24px',
        },
        fontFamily: {
          sans: ['"Noto Sans JP"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        },
        fontSize: {
          xs: ['0.75rem', { lineHeight: '1rem' }],
          sm: ['0.875rem', { lineHeight: '1.25rem' }],
          base: ['1rem', { lineHeight: '1.5rem' }],
          lg: ['1.125rem', { lineHeight: '1.75rem' }],
          xl: ['1.25rem', { lineHeight: '1.75rem' }],
          '2xl': ['1.5rem', { lineHeight: '2rem' }],
          '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
          '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
          '5xl': ['3rem', { lineHeight: '1' }],
        },
        // アニメーション
        transitionTimingFunction: {
          'standard': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
          'accelerate': 'cubic-bezier(0.4, 0.0, 1, 1)',
          'decelerate': 'cubic-bezier(0.0, 0.0, 0.2, 1)',
        },
        transitionDuration: {
          'shortest': '150ms',
          'shorter': '200ms',
          'short': '250ms',
          'standard': '300ms',
          'complex': '375ms',
          'enteringScreen': '225ms',
          'leavingScreen': '195ms',
        },
      },
    },
    plugins: [],
    // MUIとの互換性を確保
    corePlugins: {
      preflight: false,
    },
  };