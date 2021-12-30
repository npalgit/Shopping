import React from "react";
import Form from "../components/Form";
import { initialValues } from "../_utility";
import { ADD } from "../../../constants";
import { addItems } from "./api";

const AddItemModal = ({ open, setOpen, isEdit, setApiStatus }) => {
  return (
    !isEdit &&
    open && (
      <Form
        shoppingItem={{ ...initialValues }}
        open={open}
        setOpen={setOpen}
        mode={ADD}
        apiCall={addItems}
        setApiStatus={setApiStatus}
      />
    )
  );
};

export default AddItemModal;
