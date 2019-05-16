import { useState } from 'react';

export const useToggle = (bool = false) => {
  const [toggleable, setToggle] = useState(bool);
  const wrappedToggle = () => setToggle(toggleable => !toggleable);

  return [toggleable, wrappedToggle];
};
