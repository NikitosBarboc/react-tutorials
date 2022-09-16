/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState } from 'react';

interface IModalContext {
  modal: boolean,
  open: () => void,
  close: () => void
}
const ModalContext = createContext<IModalContext>({
  modal: false,
  open: () => {},
  close: () => {},
});
export function ModalState({ children }: {children: React.ReactNode}) {
  const [modal, setModal] = useState(false);
  const open = () => { setModal(true); };
  const close = () => { setModal(false); };
  return (
    <ModalContext.Provider value={{ modal, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}
export default ModalContext;
