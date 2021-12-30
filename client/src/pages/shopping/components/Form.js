import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import CloseIcon from "@mui/icons-material/Close";
import FormStyles from "./Form.Styles";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import useForm from "../../../hooks/useForm";
import { formValidation, itemQuantities } from "../_utility";
import SubmitButtonWithLoader from "../../../components/SubmitButtonWithLoader";
import { form_text_builder, API_ERROR_MESSAGE } from "../../../constants";

const ItemForm = ({
  shoppingItem,
  mode,
  open,
  setOpen,
  apiCall,
  setApiStatus,
}) => {
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [isFormSubmit, setIsFormSubmit] = useState(false);
  const classes = FormStyles();
  const { PRIMARY_TEXT, SECONDARY_TEXT, BUTTON_TEXT } = form_text_builder(mode);
  const { values, errors, handleChangeKV, handleSubmit } = useForm({
    initialValues: shoppingItem,
    onSubmit(values) {
      setIsFormLoading(true);
      apiCall(values)
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
    },
    validate: (formValues) => {
      if (isFormSubmit) setIsFormSubmit(false);

      return formValidation(formValues);
    },
  });
  const handleClose = () => {
    setOpen({ open: false });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {values && (
        <Dialog fullWidth maxWidth={"sm"} open={open} onClose={handleClose}>
          <DialogTitle className={classes.header}>
            <Typography className={classes.title}>SHOPPING LIST</Typography>
            <IconButton onClick={handleClose} style={{ marginLeft: "auto" }}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <DialogContent>
              <DialogContentText className={classes.title}>
                {PRIMARY_TEXT}
              </DialogContentText>
              <DialogContentText>{SECONDARY_TEXT}</DialogContentText>

              <TextField
                id="itemName"
                label="Item Name"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                name="itemName"
                defaultValue={values.name}
                onChange={(event) => {
                  const { value } = event.target;
                  handleChangeKV("name", value);
                }}
                error={!!errors.name}
                helperText={errors.name}
              />

              <TextField
                id="description"
                label="Description"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                name="description"
                multiline
                rows={2}
                inputProps={{ maxLength: 100 }}
                error={!!errors.description}
                helperText={
                  !!errors.description
                    ? errors.description
                    : `${values.description.length}/100`
                }
                defaultValue={values.description}
                onChange={(event) => {
                  const { value } = event.target;
                  handleChangeKV("description", value);
                }}
              />
              <div>
                <InputLabel id="qty-select-label">How Many?</InputLabel>
                <Select
                  labelId="qty-select-label"
                  id="qty"
                  fullWidth
                  value={values.quantity}
                  label="How Many?"
                  onChange={(event) => {
                    const { value } = event.target;
                    handleChangeKV("quantity", value);
                  }}
                >
                  {itemQuantities.map((quantity, i) => (
                    <MenuItem value={quantity} key={i}>
                      {quantity}
                    </MenuItem>
                  ))}
                </Select>
              </div>
              <FormControlLabel
                label="Purchased"
                control={
                  <Checkbox
                    checked={values.isPurchased}
                    onChange={(event) => {
                      const { checked } = event.target;
                      handleChangeKV("isPurchased", checked);
                    }}
                  />
                }
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <SubmitButtonWithLoader
                buttonText={BUTTON_TEXT}
                loading={isFormLoading}
              />
            </DialogActions>
          </Box>
        </Dialog>
      )}
    </div>
  );
};

export default ItemForm;
