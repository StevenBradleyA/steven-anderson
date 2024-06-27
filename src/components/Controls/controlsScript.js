import { Html } from '@react-three/drei';
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const ControlsScript = () => {
    const controlTypes = ['movement', 'camera'];
    const [controlIndex, setControlIndex] = useState(0);
    const currentControlType = controlTypes[controlIndex];

    useEffect(() => {
        const interval = setInterval(() => {
            setControlIndex(
                (prevIndex) => (prevIndex + 1) % controlTypes.length
            );
        }, 10000);

        return () => clearInterval(interval);
    }, [controlTypes.length]);

    // const variants = {
    //     initial: {
    //         opacity: 0,
    //         x: -300,
    //         rotate: -10,
    //         transition: {
    //             delay: 1.4,
    //             duration: 1.2,
    //             ease-in-out: 'ease-in-outInOut',
    //         },
    //     },
    //     animate: {
    //         opacity: 1,
    //         x: 0,
    //         rotate: 0,
    //         transition: {
    //             duration: 1.2,
    //             ease: 'easeInOut',
    //         },
    //     },
    //     exit: {
    //         opacity: 0,
    //         x: 300,
    //         rotate: -10,
    //         transition: {
    //             duration: 1.2,
    //             ease: 'easeInOut',
    //         },
    //     },
    // };

    // const cameraVariants = {
    //     initial: {
    //         opacity: 0,
    //         x: -300,
    //         rotate: -10,
    //         transition: {
    //             delay: 1.4,
    //             duration: 1.2,
    //             ease: 'easeOut',
    //         },
    //     },
    //     animate: {
    //         opacity: 1,
    //         x: 0,
    //         rotate: 0,
    //         transition: {
    //             duration: 1.2,
    //             ease-in-out: 'easeInOut',
    //         },
    //     },
    //     exit: {
    //         opacity: 0,
    //         x: 300,
    //         rotate: -10,
    //         transition: {
    //             duration: 1.2,
    //             ease: 'easeInOut',
    //         },
    //     },
    // };

    const variants = {
        initial: {
            opacity: 0,
            y: -300,
            transition: {
                delay: 1.4,
                type: 'spring',
                stiffness: 100,
                damping: 8,
            },
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 8,
            },
        },
        exit: {
            opacity: 0,
            y: 300,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    };

    const cameraVariants = {
        initial: {
            opacity: 0,
            y: -300,
            transition: {
                delay: 1.4,
                type: 'spring',
                stiffness: 100,
                damping: 8,
            },
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 8,
            },
        },
        exit: {
            opacity: 0,
            y: 300,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    };

    return (
        <>
            <div className="text-xl text-black absolute bottom-10 right-10 z-50 bg-white/70 p-5 w-[600px] h-[155px] rounded-lg flex  ">
                <AnimatePresence>
                    {currentControlType === 'movement' && (
                        <motion.div
                            key="movement"
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={variants}
                            className="flex justify-between w-full absolute left-0 px-5 "
                        >
                            <div className="flex flex-col items-start  ">
                                <h2 className="px-2 bg-none hover:bg-stevenBlue hover:bg-opacity-30 flex p-1 rounded-lg ease-in-out ">
                                    Movement
                                </h2>

                                <div className="flex items-center gap-5">
                                    <div className="flex flex-col items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-12 h-12 -mb-2 hover:text-stevenBlue ease-in-out"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                d="M15 11L12 8M12 8L9 11M12 8V16M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                        <div className="flex">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-12 h-12  -rotate-90 -mr-2 hover:text-stevenBlue ease-in-out"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                            >
                                                <path
                                                    d="M15 11L12 8M12 8L9 11M12 8V16M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-12 h-12 rotate-180 hover:text-stevenBlue ease-in-out"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                            >
                                                <path
                                                    d="M15 11L12 8M12 8L9 11M12 8V16M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-12 h-12 rotate-90 -ml-2 hover:text-stevenBlue ease-in-out"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                            >
                                                <path
                                                    d="M15 11L12 8M12 8L9 11M12 8V16M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                        <div className="border-4 border-black w-9 h-9 rounded-lg flex items-center justify-center hover:text-stevenBlue hover:border-[#007bff] ease-in-out">
                                            E
                                        </div>
                                        <div className="flex gap-1">
                                            <div className="border-4 border-black w-9 h-9 rounded-lg flex items-center justify-center hover:text-stevenBlue hover:border-[#007bff] ease-in-out">
                                                S
                                            </div>
                                            <div className="border-4 border-black w-9 h-9 rounded-lg flex items-center justify-center hover:text-stevenBlue hover:border-[#007bff] ease-in-out">
                                                D
                                            </div>
                                            <div className="border-4 border-black w-9 h-9 rounded-lg flex items-center justify-center hover:text-stevenBlue hover:border-[#007bff] ease-in-out">
                                                F
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col justify-between">
                                <div className="flex gap-2 items-center">
                                    <h2 className="hover:bg-stevenBlue hover:bg-opacity-30 flex p-1 rounded-lg ease-in-out">
                                        Respawn
                                    </h2>
                                    <div className="border-4 border-black w-9 h-9 rounded-lg flex items-center justify-center hover:text-stevenBlue hover:border-[#007bff] ease-in-out">
                                        R
                                    </div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <h2 className="hover:bg-stevenBlue hover:bg-opacity-30 flex p-1 rounded-lg ease-in-out ">
                                        Recover
                                    </h2>
                                    <div className="border-4 border-black px-2 rounded-lg flex items-center justify-center hover:text-stevenBlue hover:border-[#007bff] ease-in-out">
                                        Shift
                                    </div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <h2 className="hover:bg-stevenBlue hover:bg-opacity-30 flex p-1 rounded-lg ease-in-out">
                                        Switch Camera
                                    </h2>
                                    <div className="border-4 border-black w-9 h-9 rounded-lg flex items-center justify-center hover:text-stevenBlue hover:border-[#007bff] ease-in-out">
                                        C
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {currentControlType === 'camera' && (
                        <motion.div
                            key="camera"
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={cameraVariants}
                            className="flex justify-between w-full absolute left-0 px-5"
                        >
                            <div className="flex flex-col items-start  ">
                                <h2 className="px-2 bg-none hover:bg-stevenBlue hover:bg-opacity-30 flex p-1 rounded-lg ease-in-out ">{`Camera < Free Mode >`}</h2>
                                <div className="flex items-center gap-5">
                                    <div className="flex flex-col items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-12 h-12 -mb-2 hover:text-stevenBlue ease-in-out "
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                d="M15 11L12 8M12 8L9 11M12 8V16M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                        <div className="flex">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-12 h-12  -rotate-90 -mr-2 hover:text-stevenBlue ease-in-out"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                            >
                                                <path
                                                    d="M15 11L12 8M12 8L9 11M12 8V16M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-12 h-12 rotate-180 hover:text-stevenBlue ease-in-out"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                            >
                                                <path
                                                    d="M15 11L12 8M12 8L9 11M12 8V16M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-12 h-12 rotate-90 -ml-2 hover:text-stevenBlue ease-in-out"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                            >
                                                <path
                                                    d="M15 11L12 8M12 8L9 11M12 8V16M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                        <div className="border-4 border-black w-9 h-9 rounded-lg flex items-center justify-center hover:text-stevenBlue hover:border-[#007bff] ease-in-out  ease-in-out">
                                            E
                                        </div>
                                        <div className="flex gap-1">
                                            <div className="border-4 border-black w-9 h-9 rounded-lg flex items-center justify-center hover:text-stevenBlue hover:border-[#007bff] ease-in-out">
                                                S
                                            </div>
                                            <div className="border-4 border-black w-9 h-9 rounded-lg flex items-center justify-center hover:text-stevenBlue hover:border-[#007bff] ease-in-out">
                                                D
                                            </div>
                                            <div className="border-4 border-black w-9 h-9 rounded-lg flex items-center justify-center hover:text-stevenBlue hover:border-[#007bff] ease-in-out">
                                                F
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col justify-between">
                                <div className="flex gap-5 items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        version="1.1"
                                        className="w-16 h-16 hover:text-stevenBlue ease-in-out"
                                        viewBox="0 0 450.47 450.47"
                                    >
                                        <g>
                                            <path d="M237.298,99.533c-0.301-0.34-0.562-0.677-0.916-0.999c-3.937-3.535-4.043-2.491,0.266-6.463   c3.192-2.929,7.063-5.222,10.574-7.755c9.286-6.711,15.398-15.699,19.529-26.356C276.02,34.033,248.707,17.503,235,3.344   c-9.904-10.247-25.496,5.382-15.604,15.604c7.643,7.912,17.489,14.328,24.14,23.123c7.453,9.848-3.901,20.712-11.68,26.194   c-12.026,8.473-22.423,19.727-20.02,31.794c-53.971,5.042-103.87,34.623-103.87,86.767V333.2c0,64.664,52.603,117.27,117.27,117.27   c64.663,0,117.27-52.605,117.27-117.27V186.817C342.51,129.888,289.543,102.317,237.298,99.533z M130.044,186.817   c0-38.707,42.017-61.117,85.535-64.841v135.005c-39.697-1.998-71.928-11.042-85.535-15.457V186.817z M320.433,333.194   c0,52.5-42.705,95.199-95.192,95.199c-52.488,0-95.196-42.699-95.196-95.199V264.73c19.713,5.958,56.817,14.995,100.676,14.995   c28.088,0,58.93-3.759,89.713-14.352V333.194z M320.433,241.896c-27.916,10.675-56.424,14.849-82.78,15.415v-135.66   c42.569,2.553,82.78,22.969,82.78,65.175V241.896z M206.072,133.429v111.973c-17.153,3.027-67.583-11.094-67.583-11.094   C131.049,155.812,160.429,142.005,206.072,133.429z" />
                                        </g>
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-12 h-12 mt-3 hover:text-stevenBlue ease-in-out"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            d="M12 4v6m0 4v6"
                                        />
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9.5 6.5L12 4l2.5 2.5m-5 11L12 20l2.5-2.5m-8-8L4 12l2.5 2.5m11-5L20 12l-2.5 2.5M5.5 12h13"
                                        />
                                    </svg>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <h2 className="bg-none hover:bg-stevenBlue hover:bg-opacity-30 flex p-1 rounded-lg ease-in-out">
                                        Switch Camera
                                    </h2>
                                    <div className="border-4 border-black w-9 h-9 rounded-lg flex items-center justify-center hover:text-stevenBlue hover:border-[#007bff] ease-in-out">
                                        C
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default ControlsScript;
