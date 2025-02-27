import { createTheme, ThemeOptions } from '@mui/material/styles';

// Elegant design tokens
const colors = {
  primary: {
    main: '#D4B098', // Soft champagne/gold
    light: '#E8D6C3',
    dark: '#B3937B',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#8D7B68', // Muted taupe
    light: '#AFA193',
    dark: '#6D5D4B',
    contrastText: '#FFFFFF',
  },
  success: {
    main: '#94A684',
    light: '#B5C4A8',
    dark: '#748769',
    contrastText: '#FFFFFF',
  },
  error: {
    main: '#C88EA7',
    light: '#D7AFC2',
    dark: '#A56E87',
    contrastText: '#FFFFFF',
  },
  warning: {
    main: '#E6B89C',
    light: '#F0D3BE',
    dark: '#C0987E',
    contrastText: '#FFFFFF',
  },
  info: {
    main: '#9AAFCB',
    light: '#BDC8DB',
    dark: '#7891B3',
    contrastText: '#FFFFFF',
  },
  grey: {
    50: '#F9F8F6',
    100: '#F3F1ED',
    200: '#E9E6E0',
    300: '#DBD5CC',
    400: '#C7BFB4',
    500: '#B3A99C',
    600: '#9A8F80',
    700: '#7D7468',
    800: '#5F584F',
    900: '#413D37',
  },
  background: {
    default: '#F9F6F1', // Soft cream background
    paper: '#FFFFFF',
  },
  text: {
    primary: '#3C3530',
    secondary: '#6E655B',
    disabled: '#B3A99C',
  },
};

// Typography system with more elegant feel
const typography = {
  fontFamily: '"Noto Serif JP", "Playfair Display", "Georgia", "Times New Roman", serif',
  h1: {
    fontSize: '2.5rem',
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: '-0.01562em',
  },
  h2: {
    fontSize: '2rem',
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: '-0.00833em',
  },
  h3: {
    fontSize: '1.75rem',
    fontWeight: 500,
    lineHeight: 1.2,
    letterSpacing: '0em',
  },
  h4: {
    fontSize: '1.5rem',
    fontWeight: 500,
    lineHeight: 1.2,
    letterSpacing: '0.00735em',
  },
  h5: {
    fontSize: '1.25rem',
    fontWeight: 500,
    lineHeight: 1.2,
    letterSpacing: '0em',
  },
  h6: {
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: 1.2,
    letterSpacing: '0.0075em',
  },
  subtitle1: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '0.00938em',
  },
  subtitle2: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.57,
    letterSpacing: '0.00714em',
  },
  body1: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '0.00938em',
  },
  body2: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.43,
    letterSpacing: '0.01071em',
  },
  button: {
    fontSize: '0.875rem',
    fontWeight: 500,
    lineHeight: 1.75,
    letterSpacing: '0.02857em',
    textTransform: 'none' as const,
  },
  caption: {
    fontSize: '0.75rem',
    fontWeight: 400,
    lineHeight: 1.66,
    letterSpacing: '0.03333em',
  },
  overline: {
    fontSize: '0.75rem',
    fontWeight: 400,
    lineHeight: 2.66,
    letterSpacing: '0.08333em',
    textTransform: 'uppercase' as const,
  },
};

// Animation
const transitions = {
  easing: {
    easeInOut: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0.0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0.0, 0.6, 1)',
  },
  duration: {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  },
};

// Border radius system
const shape = {
  borderRadius: 6, // Slightly reduced for more elegance
};

// Component styles
const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: shape.borderRadius,
        padding: '8px 16px',
        transition: `background-color ${transitions.duration.shorter}ms ${transitions.easing.easeInOut}, 
                    box-shadow ${transitions.duration.shorter}ms ${transitions.easing.easeInOut}`,
        '&:hover': {
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
        },
      },
      sizeLarge: {
        padding: '12px 24px',
        fontSize: '1rem',
      },
      sizeSmall: {
        padding: '4px 12px',
        fontSize: '0.75rem',
      },
      containedPrimary: {
        '&:hover': {
          backgroundColor: colors.primary.dark,
        },
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-root': {
          borderRadius: shape.borderRadius,
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.primary.main,
            borderWidth: 2,
          },
        },
        '& .MuiInputLabel-root.Mui-focused': {
          color: colors.primary.main,
        },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: shape.borderRadius * 1.5,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
        transition: `box-shadow ${transitions.duration.shorter}ms ${transitions.easing.easeInOut}`,
        '&:hover': {
          boxShadow: '0 6px 16px rgba(0, 0, 0, 0.08)',
        },
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.03)',
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: 12, // Slightly less rounded
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: 'none',
        fontWeight: 500,
        minWidth: 'auto',
      },
    },
  },
  MuiDialog: {
    styleOverrides: {
      paper: {
        borderRadius: shape.borderRadius * 1.5,
      },
    },
  },
  MuiAvatar: {
    styleOverrides: {
      root: {
        backgroundColor: colors.primary.light,
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        transition: `background-color ${transitions.duration.shorter}ms ${transitions.easing.easeInOut}`,
      },
    },
  },
  MuiDivider: {
    styleOverrides: {
      root: {
        backgroundColor: colors.grey[200],
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      elevation6: {
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
      },
    },
  },
};

export const themeOptions: ThemeOptions = {
  palette: {
    primary: colors.primary,
    secondary: colors.secondary,
    success: colors.success,
    error: colors.error,
    warning: colors.warning,
    info: colors.info,
    grey: colors.grey,
    background: colors.background,
    text: colors.text,
  },
  typography,
  shape,
  transitions,
  // @ts-expect-error MUI型定義との互換性のため
  components,
  spacing: 8, // 8pxベースのスペーシングシステム
};

const theme = createTheme(themeOptions);
export default theme;