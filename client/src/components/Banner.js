import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function Banner({ apiStatus, setApiStatus }) {
  React.useEffect(() => {
      debugger
    if (apiStatus.show) {
      let timeOutId = setTimeout(
        () =>
          setApiStatus({
            show: false,
            status: "",
            message: "",
          }),
        3000
      );
      return () => {
        if (timeOutId) {
          clearInterval(timeOutId);
        }
      };
    }
  }, [apiStatus]);

  return (
    apiStatus.show && (
      <Stack sx={{ width: "100%" }} spacing={2}>
        {apiStatus.status == "failed" && (
          <Alert severity="error">{apiStatus.message}</Alert>
        )}
        {apiStatus.status == "successful" && (
          <Alert severity="success">{apiStatus.message}</Alert>
        )}
      </Stack>
    )
  );
}
