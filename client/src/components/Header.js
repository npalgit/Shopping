import React from "react";
import { AppBar, Typography, Toolbar } from "@mui/material";
import HeaderStyles from "./Header.Styles";

const Header = () => {
  const classes = HeaderStyles();
  return (
    <div className={classes.header}>
      <AppBar color="primary" position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            SHOPPING LIST
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
