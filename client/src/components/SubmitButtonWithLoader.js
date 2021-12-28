import React from "react";
import { Button, CircularProgress } from "@mui/material";

const SubmitButtonWithLoader = (props) => {
  const { buttonText, loading } = props;
  return (
    <Button
      variant="contained"
      color="primary"
      type="submit"
      disabled={loading}
    >
      {loading && <CircularProgress size={14} />}
      {!loading && buttonText}
    </Button>
  );
};
export default SubmitButtonWithLoader;
