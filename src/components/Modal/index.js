import { useCallback, useEffect, useRef } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

const ModalDialog = ({ isOpen, onClose, children }) => {
    const modalRef = useRef(null);
    const handleClose = useCallback(() => {
        onClose();
    }, [onClose]);

    const handleBackgroundClick = () => {
        handleClose();
    };

    const handleModalClick = (event) => {
        event.stopPropagation();
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                isOpen &&
                modalRef.current &&
                !modalRef.current.contains(event.target)
            ) {
                handleClose();
            }
        };

        window.addEventListener('mousedown', handleOutsideClick);

        return () => {
            window.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpen, handleClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    onClick={handleBackgroundClick}
                >
                    <motion.div
                        className="fixed inset-0 bg-black/40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    />
                    <motion.div
                        // className="relative flex rounded-lg bg-white/50 p-10 shadow-lg text-black"
                        ref={modalRef}
                        className="relative flex rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 p-5 shadow-vapor text-white"
                        initial={{ scale: 0.8, y: -20, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0.8, y: 20, opacity: 0 }}
                        transition={{
                            type: 'spring',
                            damping: 15,
                            stiffness: 250,
                        }}
                        onClick={handleModalClick}
                    >
                        <button
                            className="absolute right-4 top-2 transform text-lg text-gray-600 transition-transform duration-300 ease-in-out hover:rotate-45 hover:scale-110 hover:text-stevenBlue"
                            onClick={handleClose}
                        >
                            &times;
                        </button>
                        <div className="scanlines"></div>
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ModalDialog;
