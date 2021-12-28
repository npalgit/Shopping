import React from "react";
import Form from "../components/Form";
import { initialValues } from "../_utility";
import { ADD, EDIT } from "../constants";

const AddItemModal = ({ open, setOpen, isEdit }) => {
  return (
    !isEdit && open && (
      <Form
        shoppingItem={{ ...initialValues }}
        open={open}
        setOpen={setOpen}
        mode={ADD}
      />
    )
  );
};

export default AddItemModal;
