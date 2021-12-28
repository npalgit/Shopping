import { makeStyles } from "@mui/styles";

const DeleteStyles = makeStyles((theme) => ({
  header: {
    borderBottom: "2px solid rgba(0,0,0,0.1)",
    display: "flex",
  },
  title: {
    fontWeight: "600!important",
    fontSize: "1.25rem!important",
  },
  text: {
    fontSize: "1.25rem!important",
  },
}));

export default DeleteStyles;
