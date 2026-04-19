import { createContext, useContext, useState } from 'react';
import OrderModal from './nav/OrderModal';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      {/* GLOBAL MODAL */}
      {showModal && <OrderModal onClose={closeModal} />}
    </ModalContext.Provider>
  );
};

// custom hook (clean usage)
export const useModal = () => useContext(ModalContext);
