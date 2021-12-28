import React from "react";
import ReactDOM from "react-dom";
import { Container } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const THEME = createTheme({});

const App = () => {
  return (
    <ThemeProvider theme={THEME}>
      <Container maxWidth="md">
          Scaffolding React App With Material UI
      </Container>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
