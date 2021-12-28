import { makeStyles } from "@mui/styles";

const ListStyles = makeStyles((theme) => ({
  listRoot: {
    width: "100%",
    marginTop: 12,
    "& .MuiListItem-root": {
      "&.MuiListItem-divider": {
        borderBottom: "2px solid rgba(0,0,0,0.1)",
      },
    },
    "& .MuiListItem-container": {
      borderRadius: 3,
      border: "1px solid #EAEFF4",
      marginBottom: 8,
      marginRight: 8,
    },
  },
  listItemText: {
    "& .MuiListItemText-primary": {
      fontSize: "1rem",
      fontWeight: "bold",
    },
    "& .MuiListItemText-secondary": {
      fontSize: "0.875rem",
    },
  },
  IconButton: {
    "& .MuiSvgIcon-root": {
      fontSize: "1.4rem",
      marginRight: "10px",
    },
  },
  box: {
    display: "flex",
  },
  lineThrough: {
    textDecoration: "line-through",
  },
}));

export default ListStyles;
