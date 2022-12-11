import { useEffect, useState } from 'react';

type TKeyPress = boolean;

type THook = TKeyPress;

export const useKeyPress = (value: string | number): THook => {
  const initSize: TKeyPress = false;
  const [keyPress, setKeyPress] = useState<TKeyPress>(initSize);

  useEffect(() => {
    const handleKeyPress = (e: any): void => {
      if (e.key === value) {
        setKeyPress((s) => !s);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return keyPress;
};
