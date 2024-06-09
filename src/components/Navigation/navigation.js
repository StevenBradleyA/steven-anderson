import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const menuButtonRef = useRef(null);

    const dotVariants = {
        initial: { opacity: 1 },
        hover: {
            opacity: 0,
            transition: {
                delay: 0.8,
            },
        },
    };
    const arrowVariants = {
        initial: { scale: 0 },
        hover: {
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 15,
                delay: 0.8,
            },
        },
    };

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.5, rotate: -15 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 20,
                delay: 0.4,
            },
        },
    };

    const sidebar = {
        open: (height = 1000) => ({
            clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
            background: 'rgba(255, 255, 255, 0.7)',
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
            background: 'rgba(255, 255, 255, 0.7)',
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
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={containerVariants}
                    >
                        <motion.button
                            onClick={toggleMenu}
                            ref={menuButtonRef}
                            className="z-50 relative burger-button h-10 w-10"
                            whileHover="hover"
                            initial="initial"
                        >
                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-10 h-10 burger-button-burger absolute top-0 left-0"
                                viewBox="0 0 24 24"
                                fill="none"
                                variants={dotVariants}
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
                            </motion.svg>

                            {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10  bg-white/40 burger-button-circle absolute -top-[0px] -left-[2px] text-white rounded-full"
                            fill="currentColor"
                            version="1.1"
                            viewBox="0 0 293.372 293.372"
                        >
                            <g>
                                <path
                                    d="M146.681,293.367c80.884,0,146.692-65.807,146.692-146.686S227.565,0.005,146.681,0.005   C65.802,0.005,0,65.807,0,146.686S65.802,293.367,146.681,293.367z M146.681,21.473c65.454,0,119.257,50.502,124.68,114.574   H151.734l7.267-7.267c4.536-4.531,4.536-11.879,0-16.41c-2.263-2.268-5.238-3.399-8.202-3.399c-2.975,0-5.939,1.131-8.208,3.399   l-27.065,27.07c0,0-0.011,0.011-0.022,0.011l-8.191,8.197l8.191,8.197c0.011,0,0.016,0.011,0.022,0.016l28.996,29.001   c4.531,4.531,11.879,4.531,16.41,0c4.536-4.531,4.536-11.879,0-16.41l-9.197-9.197h119.534   c-6.326,63.158-59.775,112.654-124.582,112.654c-69.043,0-125.213-56.18-125.213-125.224S77.637,21.473,146.681,21.473z"
                                />
                            </g>
                        </svg> */}
                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-10 h-10 p-3 bg-white/40 burger-button-circle absolute -top-[0px] -left-[2px] text-white rounded-full"
                                fill="currentColor"
                                version="1.1"
                                id="Layer_1"
                                viewBox="0 0 492 492"
                                variants={arrowVariants}
                            >
                                <g>
                                    <g>
                                        <path d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12    C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084    c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864    l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z" />
                                    </g>
                                </g>
                            </motion.svg>
                        </motion.button>
                    </motion.div>
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
                            className="flex items-center flex-col text-sm control-button"
                            initial={{ opacity: 0, x: 200 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.3,
                                delay: 0.1,
                                type: 'spring',
                                stiffness: 300,
                                damping: 20,
                            }}
                        >
                            {/* #007BFF */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8"
                                fill="currentColor"
                                viewBox="0 0 256 256"
                            >
                                {/* Top Line */}
                                <path
                                    d="M30 80 H226"
                                    stroke="currentColor"
                                    strokeWidth="20"
                                    strokeLinecap="round"
                                />
                                {/* Bottom Line */}
                                <path
                                    d="M30 176 H226"
                                    stroke="currentColor"
                                    strokeWidth="20"
                                    strokeLinecap="round"
                                />
                                {/* Top Circle */}
                                {/* <circle cx="90" cy="80" r="28" fill="black" /> */}
                                <circle
                                    cx="90"
                                    cy="80"
                                    r="28"
                                    fill="currentColor "
                                    className="control-button-top-circle"
                                />
                                {/* Bottom Circle */}
                                {/* <circle cx="170" cy="176" r="28" fill="black" /> */}
                                <circle
                                    cx="170"
                                    cy="176"
                                    r="28"
                                    fill="currentColor"
                                    className="control-button-bottom-circle"
                                />
                            </svg>
                            <h2 className="control-button-text px-2 py-1 rounded-lg ">
                                Controls
                            </h2>
                        </motion.button>

                        <motion.button
                            className="flex items-center flex-col text-sm"
                            initial={{ opacity: 0, x: 200 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.3,
                                delay: 0.2,
                                type: 'spring',
                                stiffness: 300,
                                damping: 20,
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
                            <h2 className="px-2 py-1 rounded-lg ">Audio</h2>
                        </motion.button>

                        <motion.button
                            className="flex items-center flex-col text-sm"
                            initial={{ opacity: 0, x: 200 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.3,
                                delay: 0.2,
                                type: 'spring',
                                stiffness: 300,
                                damping: 20,
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
                            <h2 className="px-2 py-1 rounded-lg ">About Me</h2>
                        </motion.button>
                        <motion.button
                            className="flex items-center flex-col text-sm"
                            initial={{ opacity: 0, x: 200 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.3,
                                delay: 0.3,
                                type: 'spring',
                                stiffness: 300,
                                damping: 20,
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M3 7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446 18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V7.2Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <h2 className="px-2 py-1 rounded-lg ">Contact</h2>
                        </motion.button>
                        <motion.button
                            className="flex items-center flex-col text-sm"
                            initial={{ opacity: 0, x: 200 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.3,
                                delay: 0.4,
                                type: 'spring',
                                stiffness: 300,
                                damping: 20,
                            }}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 bg-black rounded-full p-1 text-white"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                                    fill="currentColor"
                                />
                            </svg>
                            <h2 className="px-2 py-1 rounded-lg ">Close</h2>
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Navigation;
