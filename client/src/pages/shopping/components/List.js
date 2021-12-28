import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";

import EditOutlined from "@mui/icons-material/EditOutlined";
import DeleteIcon from "@mui/icons-material/Delete";

import ListStyles from "./List.Styles";

const ListShoppingItems = ({ items, onEditClick, onDeleteClick }) => {
  const classes = ListStyles();
  const [checked, setChecked] = React.useState([]);

  const handleRowClick = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const isChecked = (value) => checked.indexOf(value) !== -1;
  
  return (
    <>
      <List className={classes.listRoot}>
        {items.map((value, i) => {
          const { _id, name, description, quantity, isPurchased } = value;
          const labelId = `checkbox-list-label-${i}`;
          return (
            <ListItem
              key={i}
              role={undefined}
              dense
              button
              onClick={handleRowClick(value)}
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={isChecked(value)}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText
                className={`${classes.listItemText} ${
                  isChecked(value) ? classes.lineThrough : ""
                }`}
                id={labelId}
                primary={name}
                secondary={description}
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  className={classes.IconButton}
                  onClick={() => {
                    onDeleteClick({ open: true, selectedItem: value });
                  }}
                >
                  <DeleteIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="edit"
                  className={classes.IconButton}
                  onClick={() => {
                    onEditClick({ open: true, selectedItem: value });
                  }}
                >
                  <EditOutlined />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default ListShoppingItems;
