import { useState } from 'react';

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  const clear = () => {
    setValue('');
  }

  return {
    value: value,
    onChange: handleChange,
    clear,
  };
}

export default useFormInput;
