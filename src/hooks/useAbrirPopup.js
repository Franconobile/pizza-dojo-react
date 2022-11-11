import { useState } from 'react';

export const useAbrirPopup = () => {
  const [abrirPopup, setAbrirPopup] = useState(null);
  return {
    abrirPopup,
    setAbrirPopup,
  };
};
