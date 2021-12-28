import React from "react";
import ListShoppingItems from "../components/List";
import DeleteModal from "../components/Delete";
import ListHeader from "../../../components/ListHeader";
import AddModal from "../new";
import EditModal from "../edit";

const mockList = [
  {
    _id: 1,
    name: "Tomatoes",
    description: "Green Cherry Tomatoes",
    quantity: 1,
    isPurchased: false,
  },
  {
    _id: 2,
    name: "Onion",
    description: "Red Tomatoes",
    quantity: 5,
    isPurchased: true,
  },
  {
    _id: 3,
    name: "Potato",
    description: "Sweet Potato",
    quantity: 3,
    isPurchased: false,
  },
  {
    _id: 4,
    name: "Chili",
    description: "Red Chili",
    quantity: 1,
    isPurchased: false,
  },
];

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
  return (
    <>
      <ListHeader handleClickFormModalOpen={handleClickFormModalOpen} />
      <ListShoppingItems
        items={mockList}
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
      <DeleteModal open={deleteModalopen.open} setOpen={setDeleteModalopen} />
    </>
  );
};

export default List;
