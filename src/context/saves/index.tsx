import { createContext, useContext, useState } from 'react';
import type { SavesContextProps, SavesProviderProps, Weather } from './types';
import type { FC } from 'react';

const SavesContext = createContext<SavesContextProps>(null!);

const SavesProvider: FC<SavesProviderProps> = (props) => {
  const { children } = props;

  const [saves, setSaves] = useState<Weather[]>([]);
  const addSave = (save: Weather) => {
    console.log('context', save);
    setSaves((prev) => [...prev, save]);
  };
  const value = { saves, setSaves, addSave };
  return (
    <SavesContext.Provider value={value}>{children}</SavesContext.Provider>
  );
};

const useSaves = () => {
  return useContext(SavesContext);
};

export { SavesProvider, useSaves };
