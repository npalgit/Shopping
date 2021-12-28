import React from "react";
import Typography from "@mui/material/Typography";
import { Button, Box } from "@mui/material";

import ListHeaderStyles from "./ListHeader.Styles";
const ListHeader = ({ handleClickFormModalOpen }) => {
  const classes = ListHeaderStyles();
  return (
    <Box component="span" m={1} className={classes.box}>
      <Typography variant="h6" component="h6">
        Your Items
      </Typography>
      <Button
        variant="contained"
        color="primary"
        style={{ marginLeft: "auto" }}
        onClick={handleClickFormModalOpen}
      >
        Add Item
      </Button>
    </Box>
  );
}
export default ListHeader;
