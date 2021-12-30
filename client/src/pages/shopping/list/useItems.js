import React from "react";
import { getItems } from "./api";

function useItems(apiStatus) {
  const [items, setItems] = React.useState({
    list: [],
    isError: false,
    isLoading: true,
  });

  React.useEffect(() => {
    if (apiStatus.show)
      getItems().then(handleSuccess, handleFailure);
  }, [apiStatus]);

  React.useEffect(() => {
    getItems().then(handleSuccess, handleFailure);
  }, []);

  function handleSuccess(response) {
    setItems({
      list: response.data,
      isError: false,
      isLoading: false,
    });
  }

  function handleFailure() {
    setItems({
      list: [],
      isError: true,
      isLoading: false,
    });
  }

  return items;
}

export default useItems;
