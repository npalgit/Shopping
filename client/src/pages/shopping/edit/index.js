import React from "react";
import Form from "../components/Form";
import { EDIT } from "../constants";

const EditItemModal = ({ shoppingItem, open, setOpen, isEdit }) => {
  return (
    isEdit && open && (
      <Form
        shoppingItem={{ ...shoppingItem }}
        open={open}
        setOpen={setOpen}
        mode={EDIT}
      />
    )
  );
};

export default EditItemModal;
