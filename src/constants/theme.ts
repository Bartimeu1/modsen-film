const lightTheme = {
  border: '#C4C4C4',
  text: '#000',
  social: '#6D6E76',
  background: '#fff',
  boxShadow: 'rgba(33,33,33,0.2)',
  button: '#FF8A00',
  categoryBg: 'rgba(0, 0, 0, 0.06)',
};

const darktheme = {
  border: '#e0e0e0',
  text: '#fff',
  social: '#fff',
  background: '#212121',
  boxShadow: 'rgba(255, 255, 255, 0.2)',
  button: '#FF8A00',
  categoryBg: 'rgba(255,255,255,0.1)',
};

const defaultTheme = {
  fontSize: {
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    xxl: '22px',
    xxxl: '24px',
  },
  borderRadius: {
    small: '5px',
    medium: '15px',
    circle: '50%',
  },
};

const theme = {
  dark: {
    color: darktheme,
    ...defaultTheme,
  },
  light: {
    color: lightTheme,
    ...defaultTheme,
  },
};

export default theme;
