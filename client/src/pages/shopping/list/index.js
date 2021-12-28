import React from "react";
import ListShoppingItems from "../components/List";
import ListHeader from "../../../components/ListHeader";
import EmptyList from "../../../components/EmptyList";
import AddModal from "../new";
import EditModal from "../edit";
import DeleteModal from "../delete";
import useItems from "./useItems";
import { CircularProgress, Box } from "@mui/material";

const List = () => {
  const [formModalopen, setFormModalopen] = React.useState({
    selectedItem: {},
    open: false,
  });
  const [deleteModalopen, setDeleteModalopen] = React.useState({
    selectedItem: {},
    open: false,
  });
  const handleClickFormModalOpen = () => {
    setFormModalopen({ open: true });
  };
  const isEdit = !!formModalopen.selectedItem;

  const {
    list: items,
    isError,
    isLoading,
  } = useItems(formModalopen.open, deleteModalopen.open);

  if (isLoading) {
    return (
      <Box component="span" m={1}>
        <CircularProgress />
      </Box>
    );
  }

  const isEmptyList = items && items.length == 0;

  return (
    <>
      <ListHeader
        handleClickFormModalOpen={handleClickFormModalOpen}
        isEmpty={isEmptyList}
      />
      <EmptyList
        handleClickFormModalOpen={handleClickFormModalOpen}
        isEmpty={isEmptyList}
      />
      <ListShoppingItems
        items={items}
        onEditClick={setFormModalopen}
        onDeleteClick={setDeleteModalopen}
      />
      <AddModal
        open={formModalopen.open}
        setOpen={setFormModalopen}
        isEdit={isEdit}
      />
      <EditModal
        shoppingItem={{ ...formModalopen.selectedItem }}
        open={formModalopen.open}
        setOpen={setFormModalopen}
        isEdit={isEdit}
      />
      <DeleteModal
        shoppingItem={{ ...deleteModalopen.selectedItem }}
        open={deleteModalopen.open}
        setOpen={setDeleteModalopen}
      />
    </>
  );
};

export default List;
