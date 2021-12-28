import React from "react";
import Typography from "@mui/material/Typography";
import { Button, Box } from "@mui/material";
import EmptyListStyles from "./EmptyList.Styles";
const EmptyList = ({ handleClickFormModalOpen, isEmpty }) => {
  const classes = EmptyListStyles();
  return (
    isEmpty && (
      <Box
        border={1}
        borderColor="gray"
        height={400}
        width={400}
        m={1}
        justifyContent="center"
        alignItems="center"
        className={classes.box}
      >
        <Typography variant="h6" component="h6">
          Your shopping list is empty <span className={classes.initialFont}>:(</span>
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClickFormModalOpen}
        >
          Add your first Item
        </Button>
      </Box>
    )
  );
};
export default EmptyList;
