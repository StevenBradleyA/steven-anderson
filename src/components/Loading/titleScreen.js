import React, { useEffect } from 'react';
import { useProgress } from '@react-three/drei';
import { AnimatePresence, easeInOut, motion } from 'framer-motion';
import { useGlobalState } from '../Context/stateContext';
import Image from 'next/image';
import loadingScreen from '@public/rename/loadingScreen4k.png';
import barcode from '@public/rename/barcode.png';
import computer from '@public/rename/computer.png';
import grid from '@public/rename/grid.png';
import sphere from '@public/rename/sphere.png';
import hacktime from '@public/rename/hacktime.png';
import palm from '@public/rename/palm.png';
import tree from '@public/rename/tree.png';
import { useAudioPlayer } from '../Context/audioContext';

const TitleScreen = () => {
    const { setShowGame, showGame } = useGlobalState();
    const { setIsPlaying, audioRef, isPlaying } = useAudioPlayer();
    const { progress } = useProgress();

    useEffect(() => {
        const anyInput = (event) => {
            if (showGame === false && isPlaying === false) {
                audioRef.current.play();
                setIsPlaying(true);
            }
            if (progress === 100) {
                setShowGame(true);
            }
        };
        const handleClick = () => {
            if (showGame === false && isPlaying === false) {
                audioRef.current.play();
                setIsPlaying(true);
            }
        };

        window.addEventListener('keydown', anyInput);
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('keydown', anyInput);
            window.removeEventListener('click', handleClick);
        };
    }, [progress, setShowGame, showGame]);

    const loadingScreenVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0, transition: { duration: 2.5, easeInOut } },
    };

    const leftChevron = {
        initial: { x: 0, rotate: 180, scale: 1 },
        hover: {
            x: [0, 200, 200, 200],
            rotate: 0,
            scale: [1, 0.3, 0.8],
            transition: {
                duration: 0.8,
                ease: [0.42, 0, 0.58, 1],
            },
        },
    };
    const rightChevron = {
        initial: { x: 0, scale: 1 },
        hover: {
            x: 0,
            scale: [1, 0.3, 0.8],
            transition: {
                duration: 0.8,
                ease: [0.42, 0, 0.58, 1],
            },
        },
    };
    const face = {
        initial: { pathLength: 0, opacity: 0 },
        hover: {
            opacity: 1,
            pathLength: 1,
            transition: {
                duration: 0.3,
                delay: 0.5,
                ease: 'easeOut',
            },
        },
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
                    className="z-50 fixed top-0 left-0 right-0 bottom-0 object-cover w-full h-full"
                >
                    <Image
                        src={loadingScreen}
                        alt="loading screen"
                        className="fixed top-0 left-0 right-0 bottom-0 object-cover w-full h-full z-50  "
                        priority
                    />

                    <div className="flex flex-col z-50 absolute bottom-32 desktop:bottom-40 left-1/2 transform -translate-x-1/2 w-[1000px]  ">
                        <div className="w-full bg-stevenBlue h-1 z-50 opacity-50 "></div>
                        <div className="w-full flex justify-between px-5 items-center mt-5">
                            <Image
                                alt="portfolio icon"
                                src={barcode}
                                priority
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
                        className={`font-bebas fade-transition absolute bottom-20 text-3xl -translate-x-1/2  left-1/2 z-50 flex gap-1 hover:text-white/50 ease-in ${
                            progress === 100
                                ? 'text-stevenBlue '
                                : 'text-gray-400'
                        }`}
                        whileHover="hover"
                        initial="initial"
                        onClick={() => {
                            if (progress === 100) {
                                // handlePlay();
                                setShowGame(true);
                            }
                        }}
                    >
                        <div className="relative px-10 flex">
                            Press Any Key
                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8 absolute left-0 top-0 rotate-180 "
                                viewBox="0 0 24 24"
                                fill="none"
                                variants={leftChevron}
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M13.9394 12.0001L8.46973 6.53039L9.53039 5.46973L16.0607 12.0001L9.53039 18.5304L8.46973 17.4697L13.9394 12.0001Z"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeWidth={1}
                                />
                            </motion.svg>
                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8 absolute right-0 top-0 "
                                viewBox="0 0 24 24"
                                fill="none"
                                variants={rightChevron}
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M13.9394 12.0001L8.46973 6.53039L9.53039 5.46973L16.0607 12.0001L9.53039 18.5304L8.46973 17.4697L13.9394 12.0001Z"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeWidth={1}
                                />
                            </motion.svg>
                        </div>
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-16 h-16 absolute -right-[22px] -top-4"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <motion.path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C13.8565 5 15.637 5.7375 16.9497 7.05025C18.2625 8.36301 19 10.1435 19 12Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                variants={face}
                            />
                        </motion.svg>
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
export default TitleScreen;
