import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import DeleteStyles from "./Delete.Styles";
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
import {
  form_text_builder,
  API_DELETE_SUCCESS_MESSAGE,
  API_ERROR_MESSAGE,
} from "../../../constants";

const DeleteModal = ({
  shoppingItem,
  open,
  setOpen,
  apiCall,
  setApiStatus,
}) => {
  const [isFormLoading, setIsFormLoading] = useState(false);
  const classes = DeleteStyles();

  const handleClose = () => {
    setOpen({ open: false });
  };

  const handleSubmit = () => {
    setIsFormLoading(true);
    apiCall(shoppingItem._id)
      .then((response) => {
        setApiStatus({
          status: response.status,
          message: response.message,
          show: true,
        });
        handleClose();
      })
      .catch((e) => {
        setApiStatus({
          status: "failed",
          message: API_ERROR_MESSAGE,
          show: true,
        });
      });
  };

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
            <DialogContentText className={classes.text}>
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
