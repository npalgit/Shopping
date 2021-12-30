import React from "react";
import { deleteItemApi } from "./api";
import Delete from "../components/Delete";

const DeleteItemModal = ({ shoppingItem, open, setOpen, setApiStatus }) => {
  return (
    <Delete
      shoppingItem={shoppingItem}
      open={open}
      setOpen={setOpen}
      apiCall={deleteItemApi}
      setApiStatus={setApiStatus}
    />
  );
};

export default DeleteItemModal;
