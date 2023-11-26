import { alpha } from '@mui/material/styles';

const withAlphas = (color) => {
  return {
    ...color,
    alpha4: alpha(color.main, 0.04),
    alpha8: alpha(color.main, 0.08),
    alpha12: alpha(color.main, 0.12),
    alpha30: alpha(color.main, 0.30),
    alpha50: alpha(color.main, 0.50)
  };
};

export const neutral = {
  50: '#F8F9FA',
  100: '#F3F4F6',
  200: '#E5E7EB',
  300: '#D2D6DB',
  400: '#9DA4AE',
  500: '#6C737F',
  600: '#4D5761',
  700: '#2F3746',
  800: '#1C2536',
  900: '#111927'
};

export const indigo = withAlphas({
  lightest: '#FFDFE6', // Light Burgundy
  light: '#E63E56',   // Rosy Brown
  main: '#8f1a2a',     // Burgundy (Main Color)
  dark: '#5C0817',    // Dark Burgundy
  darkest: '#33040B', // Deep Burgundy
  contrastText: '#FFFFFF'
});

export const success = withAlphas({
  lightest: '#F0FDF9',
  light: '#3FC79A',
  main: '#10B981',
  dark: '#0B815A',
  darkest: '#134E48',
  contrastText: '#FFFFFF'
});

export const info = withAlphas({
    lightest: '#FFDFE6', // Light Burgundy
    light: '#E63E56',    // Rosy Brown
    main: '#8f1a2a',     // Burgundy (Main Color)
    dark: '#5C0817',     // Dark Burgundy
    darkest: '#33040B',  // Deep Burgundy
    contrastText: '#FFFFFF'
  });
  
export const warning = withAlphas({
  lightest: '#FFDFE6', // Light Burgundy
  light: '#E63E56',    // Rosy Brown
  main: '#8f1a2a',     // Burgundy (Main Color)
  dark: '#5C0817',     // Dark Burgundy
  darkest: '#33040B',  // Deep Burgundy
  contrastText: '#FFFFFF'
});

export const error = withAlphas({
  lightest: '#FEF3F2',
  light: '#FEE4E2',
  main: '#F04438',
  dark: '#B42318',
  darkest: '#7A271A',
  contrastText: '#FFFFFF'
});
