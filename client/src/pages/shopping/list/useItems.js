import React from "react";
import { getItems } from "./api";

function useItems() {
  const [items, setItems] = React.useState({
    items: [],
    isError: false,
    isLoading: true,
  });

  React.useEffect(() => {
    getItems().then(handleSuccess, handleFailure);
  }, []);

  function handleSuccess(response) {
    setItems({
      items: response.data,
      isError: false,
      isLoading: false,
    });
  }

  function handleFailure() {
    setItems({
      items: [],
      isError: true,
      isLoading: false,
    });
  }

  return items;
}

export default useItems;
