import { useState, useEffect } from "react";

export const formIsValid = (e) => Object.keys(e).length === 0;

const useForm = (props) => {
  const { initialValues, onSubmit, validate } = props;
  const [values, setValues] = useState();
  const [errors, setErrors] = useState({});
  const [touchedField, setTouchedField] = useState("");
  const [valid, setValid] = useState(false);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (validate && typeof validate === "function" && touched) {
      const _errors = validate(values);
      setValid(formIsValid(_errors));
      if (_errors.hasOwnProperty(touchedField)) {
        setErrors({ [touchedField]: _errors[touchedField] });
      } else {
        setErrors({});
      }
    }
  }, [values]);

  useEffect(() => {
    if (initialValues)
      setValues((values) => ({
        ...values,
        ...initialValues,
      }));
  }, [initialValues]);

  function handleSubmit(event) {
    event.preventDefault();
    const errors = validate(values);
    setErrors({ ...errors });
    if (formIsValid(errors)) {
      onSubmit(values, errors);
    }
    return Boolean(Object.keys(errors).length);
  }

  function handleChangeKV(name, value, resetProps = {}) {
    setTouchedField(name);
    setValues({
      ...values,
      ...resetProps,
      [name]: value,
    });
    setTouched(true);
  }

  function setFormErrors() {
    const errors = validate(values);
    setErrors({ ...errors });
    return Boolean(Object.keys(errors).length);
  }

  return {
    handleSubmit,
    values,
    errors,
    valid,
    touched,
    handleChangeKV,
    setErrors,
    setValues,
    setFormErrors,
  };
};

export default useForm;
