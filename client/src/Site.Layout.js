import React from "react";
import { Container } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./site.css";
import Header from "./components/Header";
const THEME = createTheme({
  typography: {
    fontFamily: `"Dosis", "Nunito", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  palette: {
    header: {
      main: "#4D81B7",
      contrastText: "header background",
    },
  },
  flexBox: {
    display: "flex",
  },
});

const Layout = (props) => (
  <ThemeProvider theme={THEME}>
    <Header />
    <Container maxWidth="md">{props.children}</Container>
  </ThemeProvider>
);
export default Layout;
