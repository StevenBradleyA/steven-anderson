import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const menuButtonRef = useRef(null);

    const sidebar = {
        open: (height = 1000) => ({
            clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
            background: 'rgba(255, 255, 255, 0.8)',
            transition: {
                type: 'spring',
                stiffness: 20,
                restDelta: 2,
            },
        }),
        closed: {
            clipPath: 'circle(0px at 530px 30px)',
            background: 'transparent',
            transition: {
                delay: 0.5,
                type: 'spring',
                stiffness: 400,
                damping: 40,
            },
        },
        exit: {
            clipPath: 'circle(0px at 530px 30px)',
            background: 'rgba(255, 255, 255, 0.8)',
            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 40,
            },
        },
    };

    const handleClose = useCallback(() => {
        setIsMenuOpen(false);
    }, []);

    const toggleMenu = useCallback(() => {
        setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
    }, []);

    const handleOutsideClick = useCallback(
        (e) => {
            if (
                isMenuOpen &&
                menuRef.current &&
                !menuRef.current.contains(e.target)
            ) {
                handleClose();
            }
        },
        [isMenuOpen, handleClose]
    );
    useEffect(() => {
        window.addEventListener('mousedown', handleOutsideClick);

        return () => {
            window.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isMenuOpen, handleClose, handleOutsideClick]);

    return (
        <div className=" fixed top-5 right-5 z-40 ">
            <AnimatePresence>
                {isMenuOpen === false && (
                    <button
                        onClick={toggleMenu}
                        ref={menuButtonRef}
                        className="z-50 relative burger-button h-10 w-10"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10 burger-button-burger absolute top-0 left-0"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                opacity="0.4"
                                d="M17.5401 8.81014C19.1748 8.81014 20.5001 7.4849 20.5001 5.85014C20.5001 4.21537 19.1748 2.89014 17.5401 2.89014C15.9053 2.89014 14.5801 4.21537 14.5801 5.85014C14.5801 7.4849 15.9053 8.81014 17.5401 8.81014Z"
                                fill="currentColor"
                                className="burger-button-top-right"
                            />
                            <path
                                d="M6.46 8.81014C8.09476 8.81014 9.42 7.4849 9.42 5.85014C9.42 4.21537 8.09476 2.89014 6.46 2.89014C4.82524 2.89014 3.5 4.21537 3.5 5.85014C3.5 7.4849 4.82524 8.81014 6.46 8.81014Z"
                                fill="currentColor"
                                className="burger-button-top-left"
                            />
                            <path
                                d="M17.5401 21.1099C19.1748 21.1099 20.5001 19.7847 20.5001 18.1499C20.5001 16.5152 19.1748 15.1899 17.5401 15.1899C15.9053 15.1899 14.5801 16.5152 14.5801 18.1499C14.5801 19.7847 15.9053 21.1099 17.5401 21.1099Z"
                                fill="currentColor"
                                className="burger-button-bottom-right"
                            />
                            <path
                                opacity="0.4"
                                d="M6.46 21.1099C8.09476 21.1099 9.42 19.7847 9.42 18.1499C9.42 16.5152 8.09476 15.1899 6.46 15.1899C4.82524 15.1899 3.5 16.5152 3.5 18.1499C3.5 19.7847 4.82524 21.1099 6.46 21.1099Z"
                                fill="currentColor"
                                className="burger-button-bottom-left"
                            />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10 burger-button-circle absolute top-0 left-0 text-white"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        ref={menuRef}
                        className="  px-6 absolute right-0 top-0 bottom-0 w-[550px] h-[100px] rounded-lg text-black flex  z-10 justify-between text-xl items-center"
                        variants={sidebar}
                        initial="closed"
                        animate={isMenuOpen ? 'open' : 'closed'}
                        exit={'exit'}
                    >
                        <motion.button
                            className="flex gap-1 items-center flex-col text-sm"
                            initial={{ opacity: 0, x: 200 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 200 }}
                            transition={{
                                ease: 'easeInOut',
                                duration: 0.2,
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#000000"
                                className="w-8 h-8 "
                                viewBox="0 0 256 256"
                                id="Flat"
                            >
                                <path d="M223.99951,171.99353a8.00008,8.00008,0,0,1-8,8H194.8291a27.99567,27.99567,0,0,1-53.65918,0H39.99951a8,8,0,0,1,0-16H141.16992a27.99567,27.99567,0,0,1,53.65918,0h21.17041A8.00008,8.00008,0,0,1,223.99951,171.99353ZM39.999,91.99255l37.1709.001a27.99567,27.99567,0,0,0,53.65918,0l85.17041-.001a8,8,0,0,0,0-16l-85.17041.001a27.99567,27.99567,0,0,0-53.65918,0L40,75.99255h-.00049a8,8,0,0,0-.00049,16Z" />
                            </svg>
                            <h2>Controls</h2>
                        </motion.button>

                        <motion.button
                            className="flex gap-1 items-center flex-col text-sm"
                            initial={{ opacity: 0, x: 200 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 200 }}
                            transition={{
                                ease: 'easeInOut',
                                duration: 0.3,
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8 "
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M6.72 9.56H5.78C3.7 9.56 2 7.86003 2 5.78003C2 3.70003 3.7 2 5.78 2H7.67001C9.23001 2 10.5 3.28002 10.5 4.83002V7.39001V17.1C10.5 18.14 9.64999 18.99 8.60999 18.99C7.56999 18.99 6.72 18.14 6.72 17.1V9.56Z"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M5.78009 6.72003C5.26009 6.72003 4.84009 6.30009 4.84009 5.78009C4.84009 5.26009 5.26009 4.84009 5.78009 4.84009"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M17.28 9.56H18.22C20.3 9.56 22 7.86003 22 5.78003C22 3.70003 20.3 2 18.22 2H16.33C14.77 2 13.5 3.28002 13.5 4.83002V7.39001V17.1C13.5 18.14 14.35 18.99 15.39 18.99C16.43 18.99 17.28 18.14 17.28 17.1V9.56Z"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M18.22 6.72003C18.74 6.72003 19.16 6.30009 19.16 5.78009C19.16 5.26009 18.74 4.84009 18.22 4.84009"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M8.5 22V19"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M15.5 22V19"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            <h2>Audio</h2>
                        </motion.button>

                        <motion.button
                            className="flex gap-1 items-center flex-col text-sm"
                            initial={{ opacity: 0, x: 200 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 200 }}
                            transition={{
                                ease: 'easeInOut',
                                duration: 0.4,
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                viewBox="0 0 24 24"
                            >
                                <path d="M13.9 2.999A1.9 1.9 0 1 1 12 1.1a1.9 1.9 0 0 1 1.9 1.899zM13.544 6h-3.088a1.855 1.855 0 0 0-1.8 1.405l-1.662 6.652a.667.667 0 0 0 .14.573.873.873 0 0 0 .665.33.718.718 0 0 0 .653-.445L10 9.1V13l-.922 9.219a.71.71 0 0 0 .707.781h.074a.69.69 0 0 0 .678-.563L12 14.583l1.463 7.854a.69.69 0 0 0 .678.563h.074a.71.71 0 0 0 .707-.781L14 13V9.1l1.548 5.415a.718.718 0 0 0 .653.444.873.873 0 0 0 .665-.329.667.667 0 0 0 .14-.573l-1.662-6.652A1.855 1.855 0 0 0 13.544 6z" />
                                <path fill="none" d="M0 0h24v24H0z" />
                            </svg>
                            <h2>About Me</h2>
                        </motion.button>
                        <motion.button
                            className="flex gap-1 items-center flex-col text-sm"
                            initial={{ opacity: 0, x: 200 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 200 }}
                            transition={{
                                ease: 'easeInOut',
                                duration: 0.5,
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                viewBox="0 0 24 24"
                            >
                                <path d="M13.9 2.999A1.9 1.9 0 1 1 12 1.1a1.9 1.9 0 0 1 1.9 1.899zM13.544 6h-3.088a1.855 1.855 0 0 0-1.8 1.405l-1.662 6.652a.667.667 0 0 0 .14.573.873.873 0 0 0 .665.33.718.718 0 0 0 .653-.445L10 9.1V13l-.922 9.219a.71.71 0 0 0 .707.781h.074a.69.69 0 0 0 .678-.563L12 14.583l1.463 7.854a.69.69 0 0 0 .678.563h.074a.71.71 0 0 0 .707-.781L14 13V9.1l1.548 5.415a.718.718 0 0 0 .653.444.873.873 0 0 0 .665-.329.667.667 0 0 0 .14-.573l-1.662-6.652A1.855 1.855 0 0 0 13.544 6z" />
                                <path fill="none" d="M0 0h24v24H0z" />
                            </svg>
                            <h2>Contact</h2>
                        </motion.button>
                        <motion.button
                            className="flex gap-1 items-center flex-col text-sm"
                            initial={{ opacity: 0, x: 200 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 200 }}
                            transition={{
                                ease: 'easeInOut',
                                duration: 0.6,
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                viewBox="0 0 24 24"
                            >
                                <path d="M13.9 2.999A1.9 1.9 0 1 1 12 1.1a1.9 1.9 0 0 1 1.9 1.899zM13.544 6h-3.088a1.855 1.855 0 0 0-1.8 1.405l-1.662 6.652a.667.667 0 0 0 .14.573.873.873 0 0 0 .665.33.718.718 0 0 0 .653-.445L10 9.1V13l-.922 9.219a.71.71 0 0 0 .707.781h.074a.69.69 0 0 0 .678-.563L12 14.583l1.463 7.854a.69.69 0 0 0 .678.563h.074a.71.71 0 0 0 .707-.781L14 13V9.1l1.548 5.415a.718.718 0 0 0 .653.444.873.873 0 0 0 .665-.329.667.667 0 0 0 .14-.573l-1.662-6.652A1.855 1.855 0 0 0 13.544 6z" />
                                <path fill="none" d="M0 0h24v24H0z" />
                            </svg>
                            <h2>Close</h2>
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Navigation;
