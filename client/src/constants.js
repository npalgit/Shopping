export const ADD = "add";
export const EDIT = "edit";

export const API_ERROR_MESSAGE =
  "Sorry, something went wrong.  Please try again later.";
export const API_SUCCESS_MESSAGE =
  "You changes has been successfully saved.";
export const API_DELETE_SUCCESS_MESSAGE =
  "Item is deleted";

export const API_URL = "/api/v1";

export const form_text_builder = (mode) => {
  let PRIMARY_TEXT = "";
  let SECONDARY_TEXT = "";
  let BUTTON_TEXT = "";

  if (mode == ADD) {
    PRIMARY_TEXT = "Add an Item";
    SECONDARY_TEXT = "Add your new item below";
    BUTTON_TEXT = "Add Item";
  } else {
    PRIMARY_TEXT = "Edit an Item";
    SECONDARY_TEXT = "Edit your item below";
    BUTTON_TEXT = "Save Item";
  }
  return { PRIMARY_TEXT, SECONDARY_TEXT, BUTTON_TEXT };
};
