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
                    className="fixed inset-0 z-40 flex items-center justify-center"
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
                        ref={modalRef}
                        className="relative flex rounded-lg bg-white/90 p-5 text-black"
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
                            className="close-button text-sm text-white absolute top-3 right-3 z-50"
                            onClick={handleClose}
                        >
                            <div className="h-8 w-8 relative">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8  rounded-full p-1  close-button-svg absolute -top-[1px] left-1/2 -translate-x-1/2"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                                        fill="currentColor"
                                        className="close-button-x"
                                    />
                                </svg>
                            </div>
                        </button>
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ModalDialog;
