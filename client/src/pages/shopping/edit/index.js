import React from "react";
import Form from "../components/Form";
import { EDIT } from "../../../constants";
import { editItems } from "./api";

const EditItemModal = ({ shoppingItem, open, setOpen, isEdit }) => {
  return (
    isEdit && open && (
      <Form
        shoppingItem={{ ...shoppingItem }}
        open={open}
        setOpen={setOpen}
        mode={EDIT}
        apiCall={editItems}
      />
    )
  );
};

export default EditItemModal;
