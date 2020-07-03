import { useState } from "react";

const useForm = (initialState = {}) => {
  const [formValues, setFormValues] = useState(initialState);

  const formValuesChange = ({target}) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value
    });
  }

  const reset = () => {
    setFormValues(initialState);
  }

  return [formValues, formValuesChange, reset];
}

export default useForm;
