import { useState } from 'react';

const useForm = (defaults) => {
  const [values, setValues] = useState(defaults);

  const updateValues = (e) => {
    const { value } = e.target;

    if (e.target.type === 'number') {
      parseInt(value);
    }

    setValues({
      ...values,
      [e.target.name]: value,
    });
  };

  const resetValues = (reset) => {
    setValues(reset);
  };

  return { values, updateValues, resetValues };
};

export default useForm;
