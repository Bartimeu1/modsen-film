const lightTheme = {
  border: "#C4C4C4",
  text: "#000",
  background: "#fff",
  button: "#FF8A00"
};

const darktheme = {
  border: "#e0e0e0",
  text: "#fff",
  background: "#212121",
  button: "#FF8A00"
};

const defaultTheme = {
  fontSize: {
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    xxl: "22px",
    xxxl: "24px"
  },
  borderRadius: {
    small: "5px",
    medium: "15px",
    circle: "50%",
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