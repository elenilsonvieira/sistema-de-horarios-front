/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from 'react';

type RefreshBooleanContext = {
  bool: boolean;
  setBool: React.Dispatch<React.SetStateAction<boolean>>;
};

export const RefreshContextDND = createContext<RefreshBooleanContext>({
  bool: false,
  setBool: () => {},
});

export const RefreshContextProvider = ({ children }: any) => {
  const [bool, setBool] = useState<boolean>(false);

  return (
    <RefreshContextDND.Provider value={{ bool, setBool }}>
      {children}
    </RefreshContextDND.Provider>
  );
};
