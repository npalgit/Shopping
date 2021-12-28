import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import FormStyles from "./Form.Styles";
import {
  Button,
  IconButton,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
} from "@mui/material";
import SubmitButtonWithLoader from "../../../components/SubmitButtonWithLoader";

const DeleteModal = ({ shoppingItem, open, setOpen }) => {
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [isFormSubmit, setIsFormSubmit] = useState(false);
  const classes = FormStyles();

  const handleClose = () => {
    setOpen({ open: false });
  };

  const handleSubmit = () => {};

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Dialog fullWidth maxWidth={"sm"} open={open} onClose={handleClose}>
        <DialogTitle className={classes.header}>
          <Typography className={classes.title}>Delete Item?</Typography>
          <IconButton onClick={handleClose} style={{ marginLeft: "auto" }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete this item?This can not be undone.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <SubmitButtonWithLoader
              buttonText={"Delete"}
              loading={isFormLoading}
            />
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
};

export default DeleteModal;
