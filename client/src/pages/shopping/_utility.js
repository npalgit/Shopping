export const initialValues = {
  name: "",
  description: "",
  quantity: 1,
  isPurchased: false,
};

export const formValidation = (values) => {
  const errors = {};
  if (values.name === "") {
    errors.name = "Item name is required";
  }
  if (values.description === "") {
    errors.description = "Item description is required";
  }
  return errors;
};

export const itemQuantities = [1,2,3,4,5];