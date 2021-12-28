import React from "react";
import { deleteItemApi } from "./api";
import Delete from "../components/Delete";

const DeleteItemModal = ({ shoppingItem, open, setOpen }) => {
  return (
    <Delete
      shoppingItem={shoppingItem}
      open={open}
      setOpen={setOpen}
      apiCall={deleteItemApi}
    />
  );
};

export default DeleteItemModal;
