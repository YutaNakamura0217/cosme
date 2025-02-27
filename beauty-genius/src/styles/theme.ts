import { createTheme, ThemeOptions } from '@mui/material/styles';

// デザイントークン
const colors = {
  primary: {
    main: '#FF6B81', // コーラルピンク
    light: '#FF9CAA',
    dark: '#D84A5A',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#7D6AF3', // ラベンダーパープル
    light: '#A396F5',
    dark: '#5947C2',
    contrastText: '#FFFFFF',
  },
  success: {
    main: '#4CAF50',
    light: '#81C784',
    dark: '#388E3C',
    contrastText: '#FFFFFF',
  },
  error: {
    main: '#F44336',
    light: '#E57373',
    dark: '#D32F2F',
    contrastText: '#FFFFFF',
  },
  warning: {
    main: '#FF9800',
    light: '#FFB74D',
    dark: '#F57C00',
    contrastText: '#FFFFFF',
  },
  info: {
    main: '#2196F3',
    light: '#64B5F6',
    dark: '#1976D2',
    contrastText: '#FFFFFF',
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
  text: {
    primary: '#212121',
    secondary: '#757575',
    disabled: '#9E9E9E',
  },
};

// スペーシングシステム（8pxベース）
// 直接createThemeのspacing引数に適用するため関数は不要

// タイポグラフィシステム
const typography = {
  fontFamily: '"Noto Sans JP", "Roboto", "Helvetica", "Arial", sans-serif',
  h1: {
    fontSize: '2.5rem',
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '-0.01562em',
  },
  h2: {
    fontSize: '2rem',
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '-0.00833em',
  },
  h3: {
    fontSize: '1.75rem',
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: '0em',
  },
  h4: {
    fontSize: '1.5rem',
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: '0.00735em',
  },
  h5: {
    fontSize: '1.25rem',
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: '0em',
  },
  h6: {
    fontSize: '1rem',
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: '0.0075em',
  },
  subtitle1: {
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: '0.00938em',
  },
  subtitle2: {
    fontSize: '0.875rem',
    fontWeight: 500,
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

// アニメーション
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

// ボーダーレディウスシステム
const shape = {
  borderRadius: 8,
};

// コンポーネントスタイル
const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: shape.borderRadius,
        padding: '8px 16px',
        transition: `background-color ${transitions.duration.shorter}ms ${transitions.easing.easeInOut}, 
                    box-shadow ${transitions.duration.shorter}ms ${transitions.easing.easeInOut}`,
        '&:hover': {
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
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
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
        transition: `box-shadow ${transitions.duration.shorter}ms ${transitions.easing.easeInOut}`,
        '&:hover': {
          boxShadow: '0 6px 12px rgba(0, 0, 0, 0.12)',
        },
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: 16,
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
        borderRadius: shape.borderRadius * 2,
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