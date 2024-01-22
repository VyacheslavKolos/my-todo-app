import { useState } from 'react';

type UseToggleReturnType = [boolean, () => void, () => void, () => void];

const useToggle = (initialValue: boolean = false): UseToggleReturnType => {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = () => {
    setValue((prevValue) => !prevValue);
  };

  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);

  return [value, toggle, setTrue, setFalse];
};

export default useToggle;
