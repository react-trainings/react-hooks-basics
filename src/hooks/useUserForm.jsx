import { useState } from 'react';

const useUserForm = (initialValue) => {
  const [values, setValues] = useState(initialValue);

  return [
    values,
    (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
  ];
};

export default useUserForm;
