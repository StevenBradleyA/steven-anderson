'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import NightSky from '../Background/nightSky';

const LoadingSpinner = () => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
        }, 4600);

        return () => clearTimeout(timer);
    }, []);

    const enterExitAnimation = {
        initial: { opacity: 0, x: '-50%', y: '-50%' },
        animate: {
            opacity: 1,
            scale: [0.5, 1.2, 1],
            x: '-50%',
            y: '-50%',
            transition: { duration: 0.8, ease: 'easeOut' },
        },
        exit: {
            opacity: 0,
            x: '-50%',
            y: '-50%',
            scale: [1, 1.2, 0.5],
            transition: { duration: 0.8, ease: 'easeIn' },
        },
    };

    const checkMarkAnimation = {
        initial: { opacity: 0, scale: 0.5 },
        animate: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.2, delay: 3, ease: 'easeIn' },
        },
    };

    const cursorAnimationInitial = {
        initial: { opacity: 1 },
        animate: {
            opacity: 0,
            transition: { duration: 0, delay: 1.8 },
        },
    };
    const cursorExtendAnimation = {
        initial: { opacity: 0 },
        animate: {
            opacity: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            transition: { duration: 1.5, delay: 1.7 },
            transitionEnd: {
                opacity: 0,
            },
        },
    };
    const cursorAnimationFinal = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: { duration: 0, delay: 3.2 },
        },
    };

    return (
        <>
            <NightSky />
            <AnimatePresence>
                {show && (
                    <motion.div className="w-full h-full relative z-40">
                        <motion.div
                            id="loading-bar-animation"
                            className=" absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 scale-100"
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={enterExitAnimation}
                            style={{ transformOrigin: 'center' }}
                        >
                            <div id="mouse" className="relative">
                                <motion.svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-8 h-8 text-white absolute top-0 left-0"
                                    viewBox="0 0 24 24"
                                    fill="black"
                                    variants={cursorAnimationInitial}
                                >
                                    <path
                                        d="M4.40701 3.41403C3.94876 3.27925 3.71963 3.21186 3.56363 3.27001C3.42768 3.32069 3.32045 3.42793 3.26977 3.56387C3.21162 3.71988 3.27901 3.949 3.41379 4.40726L7.61969 18.7073C7.74493 19.1332 7.80756 19.3461 7.93395 19.4449C8.04424 19.5312 8.18564 19.5672 8.32377 19.5443C8.48206 19.5181 8.639 19.3611 8.95286 19.0473L11.9999 16.0002L16.4343 20.4345C16.6323 20.6325 16.7313 20.7315 16.8454 20.7686C16.9459 20.8012 17.054 20.8012 17.1545 20.7686C17.2686 20.7315 17.3676 20.6325 17.5656 20.4345L20.4343 17.5659C20.6323 17.3679 20.7313 17.2689 20.7684 17.1547C20.801 17.0543 20.801 16.9461 20.7684 16.8457C20.7313 16.7315 20.6323 16.6325 20.4343 16.4345L15.9999 12.0002L19.047 8.95311C19.3609 8.63924 19.5178 8.48231 19.5441 8.32402C19.567 8.18589 19.5309 8.04448 19.4447 7.93419C19.3458 7.8078 19.1329 7.74518 18.7071 7.61993L4.40701 3.41403Z"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </motion.svg>
                                <motion.svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-8 h-8 text-white absolute top-0 left-0"
                                    viewBox="0 0 24 24"
                                    fill="black"
                                    variants={cursorAnimationFinal}
                                >
                                    <path
                                        d="M4.40701 3.41403C3.94876 3.27925 3.71963 3.21186 3.56363 3.27001C3.42768 3.32069 3.32045 3.42793 3.26977 3.56387C3.21162 3.71988 3.27901 3.949 3.41379 4.40726L7.61969 18.7073C7.74493 19.1332 7.80756 19.3461 7.93395 19.4449C8.04424 19.5312 8.18564 19.5672 8.32377 19.5443C8.48206 19.5181 8.639 19.3611 8.95286 19.0473L11.9999 16.0002L16.4343 20.4345C16.6323 20.6325 16.7313 20.7315 16.8454 20.7686C16.9459 20.8012 17.054 20.8012 17.1545 20.7686C17.2686 20.7315 17.3676 20.6325 17.5656 20.4345L20.4343 17.5659C20.6323 17.3679 20.7313 17.2689 20.7684 17.1547C20.801 17.0543 20.801 16.9461 20.7684 16.8457C20.7313 16.7315 20.6323 16.6325 20.4343 16.4345L15.9999 12.0002L19.047 8.95311C19.3609 8.63924 19.5178 8.48231 19.5441 8.32402C19.567 8.18589 19.5309 8.04448 19.4447 7.93419C19.3458 7.8078 19.1329 7.74518 18.7071 7.61993L4.40701 3.41403Z"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </motion.svg>
                                <motion.svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-8 h-8 text-black absolute top-0 left-0"
                                    fill="currentColor"
                                    version="1.1"
                                    id="Layer_1"
                                    viewBox="0 0 492.001 492.001"
                                    variants={cursorExtendAnimation}
                                >
                                    <g>
                                        <g>
                                            <path
                                                d="M487.971,235.993l-85.468-85.464c-5.22-5.228-14.396-5.228-19.616,0l-7.452,7.448c-5.4,5.408-5.4,14.548,0.004,19.956    l48.456,48.792H67.911l48.696-49.02c5.408-5.412,5.408-14.384,0-19.796l-7.444-7.524c-5.232-5.232-14.404-5.272-19.624-0.044    L4.035,235.813c-2.672,2.676-4.1,6.24-4.032,9.916c-0.072,3.82,1.36,7.396,4.032,10.068l85.464,85.464    c5.228,5.232,14.396,5.228,19.62,0l7.444-7.448c5.416-5.416,5.416-13.784,0-19.192l-49.856-49.436h358.792l-50.096,49.668    c-2.612,2.604-4.052,5.884-4.052,9.592s1.436,7.088,4.052,9.7l7.444,7.396c2.616,2.612,6.1,4.02,9.812,4.02    c3.716,0,7.196-1.448,9.812-4.06l85.5-85.508c2.664-2.668,4.096-6.248,4.028-9.924    C492.075,242.245,490.639,238.665,487.971,235.993z"
                                                strokeWidth={12}
                                                stroke="white"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                    </g>
                                </motion.svg>
                            </div>
                            <div className="loader">
                                <motion.svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-10 h-10 text-green-500"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    variants={checkMarkAnimation}
                                >
                                    <g>
                                        <path
                                            d="M6 12L10.2426 16.2426L18.727 7.75732"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </g>
                                </motion.svg>
                            </div>
                            <div className="loading-bar">
                                <div className="progress-bar"></div>
                            </div>
                            <div className="status">
                                <div className="state"></div>
                                <div className="percentage"></div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default LoadingSpinner;
