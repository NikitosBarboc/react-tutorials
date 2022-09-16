/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

interface ModalProps {
  children: React.ReactNode,
  title: string,
  onClose: () => void
}

function Modal(props: ModalProps) {
  const { children, title, onClose } = props;
  return (
    <>
      <div className="fixed bg-black/50 top-0 right-0 left-0 bottom-0" onClick={onClose} />
      <div className="fixed w-[500px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2">
        <h1 className="text-2xl text-center mb-2">{title}</h1>
        {children}
      </div>
    </>
  );
}

export default Modal;
