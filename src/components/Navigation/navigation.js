'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useGlobalState } from '../Context/stateContext';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import homePalm from '@public/Images/home.png';

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const menuButtonRef = useRef(null);
    const [menuType, setMenuType] = useState('');
    const { showGame, setShowGame, activeCamera } = useGlobalState();

    const path = usePathname();
    console.log(path);

    // ------ Nav Animations ------
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

    const aboutButtonVariants = {
        initial: { opacity: 0, x: 200 },
        animate: { opacity: 1, x: 0 },
    };

    const stickMan = {
        initial: {
            x: 0,
            y: 0,
            rotate: 0,
            opacity: 100,
            style: { color: 'black' },
        },
        hover: {
            x: [0, 14, 28, 46, 46],
            y: [0, 0, 0, 0, 120],
            opacity: [100, 100, 100, 100, 0],
            rotate: [0, 0, 0, 0, -180],
            style: { color: '#007bff' },
            transition: { duration: 1.8, ease: 'easeInOut', delay: 0 },
        },
    };

    const stickManRight = {
        initial: { rotate: 0 },
        hover: {
            rotate: [0, 15, 0, 15, 0],
            transition: { duration: 1.8, ease: 'easeInOut', delay: 0 },
        },
    };
    const stickManLeft = {
        initial: { rotate: 0 },
        hover: {
            rotate: [0, -15, 0, -15, 0],
            transition: { duration: 1.8, ease: 'easeInOut', delay: 0 },
        },
    };
    // ----- End Nav Animations -----

    const handleClose = useCallback(() => {
        setIsMenuOpen(false);
        setMenuType('');
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

    console.log(showGame);

    return (
        <>
            {path !== '/' && (
                <>
                    <Link
                        className="fixed top-4 left-5 z-40 w-full"
                        href={'/'}
                        aria-label="home"
                    >
                        <Image
                            src={homePalm}
                            className="w-12 h-12 object-cover"
                            alt="home button"
                        />
                    </Link>

                    <div className="fixed top-20 h-[2px] left-0 overflow-hidden bg-outerSpace   z-40 w-full"></div>
                    <div className="fixed top-5 left-1/2 -translate-x-1/2 flex gap-1 border-2 p-1 rounded-3xl  border-outerSpace text-outerSpace z-40 ">
                        <Link
                            className="hover:bg-stevenBlue hover:bg-opacity-30 hover:text-stevenBlue px-3 py-1 rounded-3xl ease-in-out"
                            href={'/'}
                            aria-label="home"
                        >
                            Home
                        </Link>
                        <Link
                            className="hover:bg-stevenBlue hover:bg-opacity-30 hover:text-stevenBlue px-3 py-1 rounded-3xl ease-in-out"
                            href={'/about'}
                            aria-label="home"
                        >
                            About
                        </Link>
                        <Link
                            className="hover:bg-stevenBlue hover:bg-opacity-30 hover:text-stevenBlue px-3 py-1 rounded-3xl ease-in-out"
                            href={'/contact'}
                            aria-label="home"
                        >
                            Contact
                        </Link>
                    </div>
                    {isMenuOpen === false && (
                        <div className="fixed top-5 right-24  flex gap-2 border-2 p-1 rounded-3xl  border-outerSpace text-outerSpace z-40 ">
                            <Link
                                className="hover:bg-stevenBlue hover:bg-opacity-30 hover:text-stevenBlue p-1 rounded-3xl ease-in-out"
                                href={'/'}
                                aria-label="home"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 "
                                    viewBox="0 0 20 20"
                                >
                                    <defs></defs>
                                    <g
                                        id="Page-1"
                                        stroke="none"
                                        strokeWidth="1"
                                        fill="none"
                                        fillRule="evenodd"
                                    >
                                        <g
                                            transform="translate(-140.000000, -7559.000000)"
                                            fill="currentColor"
                                        >
                                            <g transform="translate(56.000000, 160.000000)">
                                                <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </Link>
                            <Link
                                className="hover:bg-stevenBlue hover:bg-opacity-30 hover:text-stevenBlue p-1 rounded-3xl ease-in-out "
                                href={'/'}
                                aria-label="home"
                            >
                                <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 p-1"
                                    viewBox="0 0 552.77 552.77"
                                    fill="currentColor"
                                >
                                    <g>
                                        <g>
                                            <path
                                                d="M17.95,528.854h71.861c9.914,0,17.95-8.037,17.95-17.951V196.8c0-9.915-8.036-17.95-17.95-17.95H17.95
			C8.035,178.85,0,186.885,0,196.8v314.103C0,520.816,8.035,528.854,17.95,528.854z"
                                            />
                                            <path
                                                d="M17.95,123.629h71.861c9.914,0,17.95-8.036,17.95-17.95V41.866c0-9.914-8.036-17.95-17.95-17.95H17.95
			C8.035,23.916,0,31.952,0,41.866v63.813C0,115.593,8.035,123.629,17.95,123.629z"
                                            />
                                            <path
                                                d="M525.732,215.282c-10.098-13.292-24.988-24.223-44.676-32.791c-19.688-8.562-41.42-12.846-65.197-12.846
			c-48.268,0-89.168,18.421-122.699,55.27c-6.672,7.332-11.523,5.729-11.523-4.186V196.8c0-9.915-8.037-17.95-17.951-17.95h-64.192
			c-9.915,0-17.95,8.035-17.95,17.95v314.103c0,9.914,8.036,17.951,17.95,17.951h71.861c9.915,0,17.95-8.037,17.95-17.951V401.666
			c0-45.508,2.748-76.701,8.244-93.574c5.494-16.873,15.66-30.422,30.488-40.649c14.83-10.227,31.574-15.343,50.24-15.343
			c14.572,0,27.037,3.58,37.393,10.741c10.355,7.16,17.834,17.19,22.436,30.104c4.604,12.912,6.904,41.354,6.904,85.33v132.627
			c0,9.914,8.035,17.951,17.949,17.951h71.861c9.914,0,17.949-8.037,17.949-17.951V333.02c0-31.445-1.982-55.607-5.941-72.48
			S535.836,228.581,525.732,215.282z"
                                            />
                                        </g>
                                    </g>
                                </svg>
                            </Link>
                        </div>
                    )}
                </>
            )}
            {(showGame === true || path !== '/') && (
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
                            <motion.div className=" absolute right-0 top-0 bottom-0 w-[550px] h-[100px] rounded-lg text-black flex flex-col z-10  text-xl overflow-hidden">
                                {/* top bar */}
                                <motion.div
                                    ref={menuRef}
                                    className=" flex w-full justify-between items-center h-full px-6"
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
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-8 h-8"
                                            fill="currentColor"
                                            viewBox="0 0 256 256"
                                        >
                                            <path
                                                d="M30 80 H226"
                                                stroke="currentColor"
                                                strokeWidth="20"
                                                strokeLinecap="round"
                                            />
                                            <path
                                                d="M30 176 H226"
                                                stroke="currentColor"
                                                strokeWidth="20"
                                                strokeLinecap="round"
                                            />
                                            <circle
                                                cx="90"
                                                cy="80"
                                                r="28"
                                                fill="currentColor "
                                                className="control-button-top-circle"
                                            />
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
                                        className="flex items-center flex-col text-sm audio-button"
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
                                            <g className="audio-button-left-pod">
                                                <path
                                                    d="M6.72 9.56H5.78C3.7 9.56 2 7.86003 2 5.78003C2 3.70003 3.7 2 5.78 2H7.67001C9.23001 2 10.5 3.28002 10.5 4.83002V7.39001V17.1C10.5 18.14 9.64999 18.99 8.60999 18.99C7.56999 18.99 6.72 18.14 6.72 17.1V9.56Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeMiterlimit="10"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M5.78009 6.72003C5.26009 6.72003 4.84009 6.30009 4.84009 5.78009C4.84009 5.26009 5.26009 4.84009 5.78009 4.84009"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeMiterlimit="10"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M8.5 22V19"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeMiterlimit="10"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </g>
                                            <g className="audio-button-right-pod">
                                                <path
                                                    d="M17.28 9.56H18.22C20.3 9.56 22 7.86003 22 5.78003C22 3.70003 20.3 2 18.22 2H16.33C14.77 2 13.5 3.28002 13.5 4.83002V7.39001V17.1C13.5 18.14 14.35 18.99 15.39 18.99C16.43 18.99 17.28 18.14 17.28 17.1V9.56Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeMiterlimit="10"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="audio-button-right-outline"
                                                />

                                                <path
                                                    d="M18.22 6.72003C18.74 6.72003 19.16 6.30009 19.16 5.78009C19.16 5.26009 18.74 4.84009 18.22 4.84009"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeMiterlimit="10"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="audio-button-depth"
                                                />
                                                <path
                                                    d="M15.5 22V19"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeMiterlimit="10"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </g>
                                        </svg>

                                        <h2 className="px-2 py-1 rounded-lg audio-button-text">
                                            Audio
                                        </h2>
                                    </motion.button>
                                    <motion.button
                                        className="flex items-center flex-col text-sm about-button"
                                        initial="initial"
                                        animate="animate"
                                        transition={{
                                            duration: 0.3,
                                            delay: 0.2,
                                            type: 'spring',
                                            stiffness: 300,
                                            damping: 20,
                                        }}
                                        whileHover="hover"
                                        variants={aboutButtonVariants}
                                    >
                                        <motion.div className="w-8 h-8 relative">
                                            <motion.svg
                                                className="figure w-12 h-12 absolute -top-3 -left-2"
                                                viewBox="0 0 100 100"
                                                variants={stickMan}
                                                fill="currentColor"
                                            >
                                                <motion.circle
                                                    cx="52.1"
                                                    cy="32.4"
                                                    r="6.4"
                                                />
                                                <motion.path d="M50.7 62.8c-1.2 2.5-3.6 5-7.2 4-3.2-.9-4.9-3.5-4-7.8.7-3.4 3.1-13.8 4.1-15.8 1.7-3.4 1.6-4.6 7-3.7 4.3.7 4.6 2.5 4.3 5.4-.4 3.7-2.8 15.1-4.2 17.9z" />
                                                <motion.g
                                                    className="arm1"
                                                    variants={stickManRight}
                                                >
                                                    <motion.path d="M55.5 56.5l-6-9.5c-1-1.5-.6-3.5.9-4.4 1.5-1 3.7-1.1 4.6.4l6.1 10c1 1.5.3 3.5-1.1 4.4-1.5.9-3.5.5-4.5-.9z" />
                                                    <motion.path
                                                        className="wrist1"
                                                        d="M69.4 59.9L58.1 58c-1.7-.3-2.9-1.9-2.6-3.7.3-1.7 1.9-2.9 3.7-2.6l11.4 1.9c1.7.3 2.9 1.9 2.6 3.7-.4 1.7-2 2.9-3.8 2.6z"
                                                    />
                                                </motion.g>
                                                <motion.g
                                                    className="arm2"
                                                    variants={stickManLeft}
                                                >
                                                    <motion.path d="M34.2 43.6L45 40.3c1.7-.6 3.5.3 4 2 .6 1.7-.3 4-2 4.5l-10.8 2.8c-1.7.6-3.5-.3-4-2-.6-1.6.3-3.4 2-4z" />
                                                    <motion.path
                                                        className="wrist2"
                                                        d="M27.1 56.2L32 45.7c.7-1.6 2.6-2.3 4.2-1.6 1.6.7 2.3 2.6 1.6 4.2L33 58.8c-.7 1.6-2.6 2.3-4.2 1.6-1.7-.7-2.4-2.6-1.7-4.2z"
                                                    />
                                                </motion.g>
                                                <motion.g
                                                    className="leg1"
                                                    variants={stickManRight}
                                                >
                                                    <motion.path d="M52.1 73.2s-7-5.7-7.9-6.5c-.9-.9-1.2-3.5-.1-4.9 1.1-1.4 3.8-1.9 5.2-.9l7.9 7c1.4 1.1 1.7 3.5.7 4.9-1.1 1.4-4.4 1.5-5.8.4z" />
                                                    <motion.path
                                                        className="calf1"
                                                        d="M52.6 84.4l-1-12.8c-.1-1.9 1.5-3.6 3.5-3.7 2-.1 3.7 1.4 3.8 3.4l1 12.8c.1 1.9-1.5 3.6-3.5 3.7-2 0-3.7-1.5-3.8-3.4z"
                                                    />
                                                </motion.g>
                                                <motion.g
                                                    className="leg2"
                                                    variants={stickManLeft}
                                                >
                                                    <motion.path d="M37.8 72.7s1.3-10.2 1.6-11.4 2.4-2.8 4.1-2.6c1.7.2 3.6 2.3 3.4 4l-1.8 11.1c-.2 1.7-1.7 3.3-3.4 3.1-1.8-.2-4.1-2.4-3.9-4.2z" />
                                                    <motion.path
                                                        className="calf2"
                                                        d="M29.5 82.3l9.6-10.9c1.3-1.4 3.6-1.5 5.1-.1 1.5 1.4.4 4.9-.9 6.3l-8.5 9.6c-1.3 1.4-3.6 1.5-5.1.1-1.4-1.3-1.5-3.5-.2-5z"
                                                    />
                                                </motion.g>
                                            </motion.svg>
                                        </motion.div>

                                        <h2 className="px-2 py-1 rounded-lg about-button-text">
                                            About Me
                                        </h2>
                                    </motion.button>
                                    <motion.button
                                        className="flex items-center flex-col text-sm contact-button"
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
                                        <div className="relative">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-8 h-8  contact-button-box"
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
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="absolute top-1 left-[6px] contact-button-smiley h-5 w-5"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                            >
                                                <path
                                                    d="M9 14C9.18131 14.4723 9.47841 14.8915 9.864 15.219C11.0903 16.2483 12.8748 16.2613 14.116 15.25C14.5069 14.9283 14.8109 14.5136 15 14.044"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C13.8565 5 15.637 5.7375 16.9497 7.05025C18.2625 8.36301 19 10.1435 19 12Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M9 11V10"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                />
                                                <path
                                                    d="M15 11V10"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                        </div>

                                        <h2 className="px-2 py-1 rounded-lg contact-button-text ">
                                            Contact
                                        </h2>
                                    </motion.button>
                                    <motion.button
                                        className="flex items-center flex-col text-sm close-button text-white"
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
                                        <h2 className="px-2 py-1 rounded-lg close-button-text ">
                                            Close
                                        </h2>
                                    </motion.button>
                                </motion.div>
                                {/* end top bar */}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            )}
        </>
    );
}

export default Navigation;
