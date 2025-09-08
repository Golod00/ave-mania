'use client';

import { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

export function ModalProvider({ children }) {
    const [modalData, setModalData] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const openModal = data => {
        setModalData(data);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setModalData(null);
    };

    return (
        <ModalContext.Provider value={{ isOpen, modalData, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
}

export function useModal() {
    return useContext(ModalContext);
}
