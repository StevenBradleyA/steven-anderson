import React, { useEffect, useState } from 'react';
import { useProgress } from '@react-three/drei';
import { AnimatePresence, motion } from 'framer-motion';
import { useGlobalState } from '../Context/stateContext';
import Image from 'next/image';
import loadingScreen from '@public/Images/loadingScreen4k.png';
import barcode from '@public/Images/barcode.png';
import computer from '@public/Images/computer.png';
import grid from '@public/Images/grid.png';
import sphere from '@public/Images/sphere.png';
import hacktime from '@public/Images/hacktime.png';
import palm from '@public/Images/palm.png';
import tree from '@public/Images/tree.png';

const TitleScreen = () => {
    const { setShowGame, showGame } = useGlobalState();
    const { progress } = useProgress();

    useEffect(() => {
        const anyInput = (event) => {
            if (progress === 100) {
                setShowGame(true);
            }
        };

        window.addEventListener('keydown', anyInput);
        window.addEventListener('click', anyInput);

        return () => {
            window.removeEventListener('keydown', anyInput);
            window.removeEventListener('click', anyInput);
        };
    }, [progress, setShowGame]);

    const loadingScreenVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0, transition: { duration: 3 } },
    };

    return (
        <AnimatePresence>
            {showGame === false && (
                <motion.div
                    key="picture"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={loadingScreenVariants}
                    className="z-50"
                >
                    <Image
                        src={loadingScreen}
                        alt="loading screen"
                        className="fixed top-0 left-0 right-0 bottom-0 object-cover w-full h-full z-40 "
                        priority
                    />

                    <div className="flex flex-col z-50 absolute bottom-44 left-1/2 transform -translate-x-1/2 w-[1000px]  ">
                        <div className="w-full bg-stevenBlue h-1 z-50 opacity-50 "></div>
                        <div className="w-full flex justify-between px-5 items-center mt-5">
                            <Image
                                alt="portfolio icon"
                                src={barcode}
                                className="w-28 h-full hover:filter-blue-to-white opacity-50 ease-in"
                            />

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-stevenBlue w-3 h-3 opacity-50 hover:text-white/80 ease-in"
                                viewBox="0 0 100 100"
                            >
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="currentColor"
                                />
                            </svg>
                            <div className="flex gap-1 items-center">
                                <Image
                                    alt="portfolio icon"
                                    src={tree}
                                    className="w-8 h-full hover:filter-blue-to-white opacity-50 ease-in "
                                />
                                <Image
                                    alt="portfolio icon"
                                    src={tree}
                                    className="w-8 h-full  hover:filter-blue-to-white opacity-50 ease-in "
                                />
                                <Image
                                    alt="portfolio icon"
                                    src={tree}
                                    className="w-8 h-full  hover:filter-blue-to-white opacity-50 ease-in "
                                />
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className=" text-stevenBlue w-3 h-3 opacity-50 hover:text-white/80 ease-in"
                                viewBox="0 0 100 100"
                            >
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="currentColor"
                                />
                            </svg>

                            <div className="flex gap-1 items-center">
                                <Image
                                    alt="portfolio icon"
                                    src={palm}
                                    className="w-10 h-full  hover:filter-blue-to-white opacity-50 ease-in "
                                />
                                <Image
                                    alt="portfolio icon"
                                    src={hacktime}
                                    className="w-8 h-full  hover:filter-blue-to-white opacity-50 ease-in "
                                />
                                <Image
                                    alt="portfolio icon"
                                    src={sphere}
                                    className="w-8 h-full  hover:filter-blue-to-white opacity-50 ease-in "
                                />
                                <Image
                                    alt="portfolio icon"
                                    src={computer}
                                    className="w-8 h-full hover:filter-blue-to-white opacity-50 ease-in  "
                                />
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-stevenBlue w-3 h-3 opacity-50 hover:text-white/80 ease-in"
                                viewBox="0 0 100 100"
                            >
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="currentColor"
                                />
                            </svg>
                            <div className="flex  items-center gap-3 ">
                                <Image
                                    alt="portfolio icon"
                                    src={grid}
                                    className="w-12 h-full  hover:filter-blue-to-white opacity-50 ease-in "
                                />
                                <h2 className="font-bebas opacity-50 text-stevenBlue text-xl hover:text-white/80 ease-in">
                                    Developer · Full Stack Engineer
                                </h2>
                            </div>
                        </div>
                        <div className="w-full px-7 z-50 flex font-bebas opacity-50 text-stevenBlue text-lg gap-36 ">
                            <h2 className="hover:text-white/80 ease-in">
                                Portfolio · Site
                            </h2>

                            <h2 className="hover:text-white/80 ease-in">
                                Seattle
                            </h2>
                        </div>
                    </div>
                    <motion.button
                        key="title-button"
                        className={`font-bebas fade-transition absolute bottom-20 text-3xl -translate-x-1/2  left-1/2 z-50  ${
                            progress === 100
                                ? 'text-stevenBlue hover:opacity-50'
                                : 'text-gray-400'
                        }`}
                    >
                        {`< Press Any Key >`}
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
export default TitleScreen;
