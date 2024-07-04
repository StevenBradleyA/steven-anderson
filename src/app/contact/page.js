'use client';
import NightSky from '@/components/Background/nightSky';
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useMobile } from '@/components/Context/mobileContext';

export default function Contact() {
    // form
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [enableErrorDisplay, setEnableErrorDisplay] = useState(false);

    const { isMobile } = useMobile();

    // animation tracking
    const [randomIndices, setRandomIndices] = useState({
        word1: 1,
        word2: 2,
        word3: 3,
    });
    const words = ["Let's", 'work', 'together!'];
    const firstWord = "Let's".split('');
    const secondWord = 'work'.split('');
    const thirdWord = 'together!'.split('');
    const controls = useAnimation();

    // animations
    const firstMail = {
        initial: {
            scale: 1,
            opacity: 1,
            rotate: 0,
            x: 0,
        },
        hover: {
            scale: 0.5,
            opacity: 0,
            rotate: -45,
            x: 50,
            transition: { duration: 0.8, ease: 'easeInOut' },
        },
        exit: {
            opacity: 0,
            scale: 0.5,
            rotate: -45,
            x: 50,
        },
    };

    const secondMail = {
        initial: {
            scale: 0.5,
            opacity: 0,
            rotate: 45,
            x: -50,
        },
        hover: {
            scale: 1,
            opacity: 1,
            rotate: 0,
            x: 0,
            transition: { duration: 0.3, ease: 'easeInOut' },
        },
        exit: {
            opacity: 0,
            scale: 0.5,
            rotate: 45,
            x: -50,
        },
    };

    // rotate into secondary --- additional animation
    // const firstMail = {
    //     initial: {
    //         scale: 1,
    //         opacity: 1,
    //     },
    //     hover: {
    //         scale: 0.5,
    //         opacity: 0,
    //         transition: {
    //             type: 'spring',
    //             stiffness: 300,
    //             damping: 20,
    //         },
    //     },
    //     exit: {
    //         opacity: 0,
    //         scale: 0.5,
    //     },
    // };

    // const secondMail = {
    //     initial: {
    //         scale: 0.5,
    //         opacity: 0,
    //     },
    //     hover: {
    //         scale: 1,
    //         opacity: 1,
    //         transition: {
    //             type: 'spring',
    //             stiffness: 300,
    //             damping: 20,
    //         },
    //     },
    //     exit: {
    //         opacity: 0,
    //         scale: 0.5,
    //     },
    // };

    const topLetter = {
        initial: {
            y: 0,
        },
        animate: {
            y: -150,
            transition: { duration: 1, ease: 'easeInOut' },
            transitionEnd: {
                y: 0,
            },
        },
    };
    const topFixed = {
        initial: {
            y: 0,
        },
        animate: {
            y: 0,
            transition: { duration: 1, ease: 'easeInOut' },
            transitionEnd: {
                y: 0,
            },
        },
    };

    const bottomFixed = {
        initial: {
            y: 150,
        },
        animate: {
            y: 150,
            transition: { duration: 1, ease: 'easeInOut' },
            transitionEnd: {
                y: 150,
            },
        },
    };
    const bottomLetter = {
        initial: {
            y: 150,
        },
        animate: {
            y: 0,
            transition: { duration: 1, ease: 'easeInOut' },
            transitionEnd: {
                y: 150,
            },
        },
    };

    useEffect(() => {
        const errorsObj = {};

        if (!name.length) {
            errorsObj.name = 'Please provide your name';
        }
        if (!message.length) {
            errorsObj.message = 'Please provide a message';
        }

        setErrors(errorsObj);
    }, [name, message]);

    const handleOpenMail = (e) => {
        e.preventDefault();
        setEnableErrorDisplay(true);

        if (!Object.values(errors).length) {
            const subject = `Portfolio Contact - ${name}`;
            const body = message;
            const mailtoLink = `mailto:andersonstevenbradley@gmail.com?subject=${encodeURIComponent(
                subject
            )}&body=${encodeURIComponent(body)}`;

            window.location.href = mailtoLink;

            setName('');
            setMessage('');
            setEnableErrorDisplay(false);
        }
    };

    const increment = () => {
        setRandomIndices({
            word1: Math.floor(Math.random() * words[0].length),
            word2: Math.floor(Math.random() * words[1].length),
            word3: Math.floor(Math.random() * words[2].length),
        });
    };

    useEffect(() => {
        const intervalId = setInterval(increment, 3000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    useEffect(() => {
        controls.start('animate');
    }, [randomIndices]);

    return (
        <div className=" w-full min-h-screen flex flex-col items-center">
            <NightSky />

            {isMobile === false ? (
                <div className="flex px-20 w-full desktop:w-[80%] ultrawide:w-3/4, gap-20 desktop:gap-32 mt-48 desktop:mt-64 items-start">
                    <div className=" w-1/2 z-40">
                        <div className=" text-8xl flex flex-col font-orbitron">
                            <div className="relative overflow-hidden flex flex-col">
                                <div className="opacity-0">{`Let's work`}</div>
                                <div className="flex absolute top-0 left-0 ">
                                    {firstWord.map((letter, index) => (
                                        <motion.span
                                            key={index}
                                            animate={controls}
                                            initial="initial"
                                            variants={
                                                index === randomIndices.word1
                                                    ? topLetter
                                                    : topFixed
                                            }
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}
                                </div>
                                <div className=" flex  absolute top-0 left-0 ">
                                    {firstWord.map((letter, index) => (
                                        <motion.span
                                            key={index}
                                            animate={controls}
                                            initial="initial"
                                            variants={
                                                index === randomIndices.word1
                                                    ? bottomLetter
                                                    : bottomFixed
                                            }
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}
                                </div>

                                <div className=" flex  absolute top-0 left-[19rem] ">
                                    {secondWord.map((letter, index) => (
                                        <motion.span
                                            key={index}
                                            animate={controls}
                                            initial="initial"
                                            variants={
                                                index === randomIndices.word2
                                                    ? topLetter
                                                    : topFixed
                                            }
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}
                                </div>
                                <div className=" flex  absolute top-0 left-[19rem] ">
                                    {secondWord.map((letter, index) => (
                                        <motion.span
                                            key={index}
                                            animate={controls}
                                            initial="initial"
                                            variants={
                                                index === randomIndices.word2
                                                    ? bottomLetter
                                                    : bottomFixed
                                            }
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>

                            <div className="relative overflow-hidden pb-5">
                                <div className="opacity-0">{`together!`}</div>
                                <div className=" flex  absolute top-0 left-10 ">
                                    {thirdWord.map((letter, index) => (
                                        <motion.span
                                            key={index}
                                            animate={controls}
                                            initial="initial"
                                            variants={
                                                index === randomIndices.word3
                                                    ? topLetter
                                                    : topFixed
                                            }
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}
                                </div>
                                <div className=" flex  absolute top-0 left-10 ">
                                    {thirdWord.map((letter, index) => (
                                        <motion.span
                                            key={index}
                                            animate={controls}
                                            initial="initial"
                                            variants={
                                                index === randomIndices.word3
                                                    ? bottomLetter
                                                    : bottomFixed
                                            }
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <p className="mt-5 text-lg">
                            {`Whether you're hiring an entry level developer, willing to
                        write a refferal, or want me to build you an awesome
                        site please reach out!`}
                        </p>

                        <div className="bg-outerSpace h-1 w-full my-5"></div>
                        <h3 className="text-4xl">Follow Me</h3>

                        <div className="flex gap-5  text-stevenBlue mt-5 ">
                            <button className="bg-stevenBlue bg-opacity-30 hover:text-[#3DA0E3] p-2 rounded-full  ease-in-out">
                                <a
                                    href="https://github.com/StevenBradleyA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-10 h-10 "
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
                                </a>
                            </button>
                            <button className="bg-stevenBlue bg-opacity-30 hover:text-[#3DA0E3] p-2 rounded-full ease-in-out ">
                                <a
                                    href="https://www.linkedin.com/in/stevenanderson-dev/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-10 h-10 p-1"
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
                                </a>
                            </button>
                        </div>
                    </div>
                    <form
                        className=" w-1/2 rounded-lg bg-outerSpace bg-opacity-30  p-10  z-10 flex flex-col items-center gap-5 "
                        aria-labelledby="contact-form"
                    >
                        <div className="flex flex-col w-full">
                            <label htmlFor="fullName" className="px-2">
                                Full name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                autoComplete="name"
                                // required
                                aria-required="true"
                                className=" bg-blue-300 bg-opacity-30 rounded-xl p-2 focus:outline-none focus:ring-[#007bff] focus:ring-2 hover:bg-blue-400 hover:bg-opacity-30 focus:bg-blue-400 focus:bg-opacity-30 ease-in-out "
                                placeholder="Enter your full name ..."
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            {enableErrorDisplay && errors.name && (
                                <p className="text-xs px-2 text-red-400">
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col w-full">
                            <label htmlFor="message" className="px-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                autoComplete="message"
                                // required
                                aria-required="true"
                                className=" bg-blue-300 bg-opacity-30 rounded-xl p-2 w-full h-40 focus:outline-none focus:ring-[#007bff] focus:ring-2 hover:bg-blue-400 hover:bg-opacity-30 focus:bg-blue-400 focus:bg-opacity-30 ease-in-out "
                                placeholder="Enter your message ..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                style={{ resize: 'none' }}
                            />
                            {enableErrorDisplay && errors.message && (
                                <p className="text-xs px-2 text-red-400">
                                    {errors.message}
                                </p>
                            )}
                        </div>

                        {/* <button
                        onClick={(e) => {
                            e.preventDefault();
                            handleOpenMail(e);
                        }}
                        className="py-2 px-4 mt-4 inline-block rounded-md
                    bg-[#4EBEFF] hover:bg-[#3DA0E3] text-white font-semibold"
                    >
                        Get in touch
                    </button> */}
                        <motion.button
                            className="mt-5 text-md contact-button flex items-center gap-2 rounded-md bg-[#3DA0E3] py-2 pl-4 pr-8 text-black relative "
                            style={{
                                boxShadow: '0 0 20px #3DA0E3',
                            }}
                            onClick={(e) => {
                                e.preventDefault();
                                handleOpenMail(e);
                            }}
                            whileHover="hover"
                            initial="initial"
                        >
                            <span className="contact-button-text">
                                Get in touch
                            </span>

                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 absolute right-2"
                                viewBox="0 0 24 24"
                                fill="none"
                                variants={firstMail}
                            >
                                <path
                                    d="M21 8L17.4392 9.97822C15.454 11.0811 14.4614 11.6326 13.4102 11.8488C12.4798 12.0401 11.5202 12.0401 10.5898 11.8488C9.53864 11.6326 8.54603 11.0811 6.5608 9.97822L3 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                                    stroke="#000000"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </motion.svg>
                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 absolute right-2"
                                viewBox="0 0 24 24"
                                fill="none"
                                variants={secondMail}
                            >
                                <path
                                    d="M10.2981 4.06892L9.7663 3.22207V3.22207L10.2981 4.06892ZM11.5551 3.41192L11.3327 2.43697L11.5551 3.41192ZM13.7019 4.06891L14.2337 3.22207V3.22207L13.7019 4.06891ZM12.4449 3.41192L12.6673 2.43697L12.4449 3.41192ZM4.09202 19.7821L4.54601 18.8911L4.09202 19.7821ZM3.21799 18.9081L4.10899 18.4541L3.21799 18.9081ZM20.782 18.9081L19.891 18.4541L20.782 18.9081ZM19.908 19.7821L19.454 18.8911L19.908 19.7821ZM20.9089 9.16112L21.8633 8.86273L20.9089 9.16112ZM19.5019 7.71139L18.97 8.55824L19.5019 7.71139ZM20.5206 8.45876L21.2809 7.80919L20.5206 8.45876ZM3.09111 9.16112L2.13667 8.86273L3.09111 9.16112ZM4.49814 7.71139L5.02997 8.55824L4.49814 7.71139ZM3.4794 8.45876L2.7191 7.80919L3.4794 8.45876ZM10.225 14.8168L10.7797 13.9847L10.225 14.8168ZM13.775 14.8168L13.2203 13.9847L13.775 14.8168ZM21.5547 10.8322C22.0142 10.5258 22.1384 9.90495 21.8321 9.44542C21.5257 8.98589 20.9048 8.86172 20.4453 9.16807L21.5547 10.8322ZM11.5339 15.5414L11.767 14.5689H11.767L11.5339 15.5414ZM12.4661 15.5414L12.233 14.5689H12.233L12.4661 15.5414ZM12 7.00012L12.7071 6.29301C12.3166 5.90249 11.6834 5.90249 11.2929 6.29301L12 7.00012ZM11 12.0001C11 12.5524 11.4477 13.0001 12 13.0001C12.5523 13.0001 13 12.5524 13 12.0001H11ZM9.29289 8.29302C8.90237 8.68354 8.90237 9.3167 9.29289 9.70723C9.68342 10.0978 10.3166 10.0978 10.7071 9.70723L9.29289 8.29302ZM13.2929 9.70723C13.6834 10.0978 14.3166 10.0978 14.7071 9.70723C15.0976 9.3167 15.0976 8.68354 14.7071 8.29302L13.2929 9.70723ZM20 10.4213V16.8001H22V10.4213H20ZM17.8 19.0001H6.2V21.0001H17.8V19.0001ZM4 16.8001V10.4213H2V16.8001H4ZM5.02997 8.55824L10.83 4.91576L9.7663 3.22207L3.9663 6.86454L5.02997 8.55824ZM13.17 4.91576L18.97 8.55824L20.0337 6.86454L14.2337 3.22207L13.17 4.91576ZM10.83 4.91576C11.5096 4.48892 11.6516 4.41561 11.7776 4.38687L11.3327 2.43697C10.7964 2.55933 10.3211 2.87365 9.7663 3.22207L10.83 4.91576ZM14.2337 3.22207C13.6789 2.87365 13.2036 2.55933 12.6673 2.43697L12.2224 4.38687C12.3484 4.41561 12.4904 4.48892 13.17 4.91576L14.2337 3.22207ZM11.7776 4.38687C11.924 4.35347 12.076 4.35347 12.2224 4.38687L12.6673 2.43697C12.2281 2.33677 11.7719 2.33677 11.3327 2.43697L11.7776 4.38687ZM6.2 19.0001C5.62345 19.0001 5.25117 18.9993 4.96784 18.9762C4.69617 18.954 4.59545 18.9163 4.54601 18.8911L3.63803 20.6731C4.01641 20.8659 4.40963 20.9373 4.80497 20.9696C5.18864 21.0009 5.65645 21.0001 6.2 21.0001V19.0001ZM2 16.8001C2 17.3437 1.99922 17.8115 2.03057 18.1951C2.06287 18.5905 2.13419 18.9837 2.32698 19.3621L4.10899 18.4541C4.0838 18.4047 4.04612 18.3039 4.02393 18.0323C4.00078 17.7489 4 17.3767 4 16.8001H2ZM4.54601 18.8911C4.35785 18.7953 4.20487 18.6423 4.10899 18.4541L2.32698 19.3621C2.6146 19.9266 3.07354 20.3855 3.63803 20.6731L4.54601 18.8911ZM20 16.8001C20 17.3767 19.9992 17.7489 19.9761 18.0323C19.9539 18.3039 19.9162 18.4047 19.891 18.4541L21.673 19.3621C21.8658 18.9837 21.9371 18.5905 21.9694 18.1951C22.0008 17.8115 22 17.3437 22 16.8001H20ZM17.8 21.0001C18.3436 21.0001 18.8114 21.0009 19.195 20.9696C19.5904 20.9373 19.9836 20.8659 20.362 20.6731L19.454 18.8911C19.4045 18.9163 19.3038 18.954 19.0322 18.9762C18.7488 18.9993 18.3766 19.0001 17.8 19.0001V21.0001ZM19.891 18.4541C19.7951 18.6423 19.6422 18.7953 19.454 18.8911L20.362 20.6731C20.9265 20.3855 21.3854 19.9266 21.673 19.3621L19.891 18.4541ZM22 10.4213C22 9.83991 22.0108 9.33436 21.8633 8.86273L19.9544 9.45951C19.9892 9.57075 20 9.71104 20 10.4213H22ZM18.97 8.55824C19.5715 8.93598 19.6846 9.01972 19.7603 9.10834L21.2809 7.80919C20.9599 7.43349 20.5261 7.17375 20.0337 6.86454L18.97 8.55824ZM21.8633 8.86273C21.7424 8.4758 21.5442 8.11741 21.2809 7.80919L19.7603 9.10834C19.8481 9.21107 19.9141 9.33054 19.9544 9.45951L21.8633 8.86273ZM4 10.4213C4 9.71104 4.01078 9.57075 4.04556 9.45951L2.13667 8.86273C1.98922 9.33436 2 9.83991 2 10.4213H4ZM3.9663 6.86454C3.47394 7.17375 3.04009 7.43349 2.7191 7.80919L4.2397 9.10834C4.31541 9.01972 4.42848 8.93598 5.02997 8.55824L3.9663 6.86454ZM4.04556 9.45951C4.08588 9.33054 4.15192 9.21108 4.2397 9.10834L2.7191 7.80919C2.45577 8.11741 2.25764 8.4758 2.13667 8.86273L4.04556 9.45951ZM2.4453 10.8322L9.67026 15.6488L10.7797 13.9847L3.5547 9.16807L2.4453 10.8322ZM14.3297 15.6488L21.5547 10.8322L20.4453 9.16807L13.2203 13.9847L14.3297 15.6488ZM9.67026 15.6488C10.2464 16.0329 10.7392 16.3792 11.3009 16.5138L11.767 14.5689C11.6353 14.5373 11.4865 14.456 10.7797 13.9847L9.67026 15.6488ZM13.2203 13.9847C12.5135 14.456 12.3647 14.5373 12.233 14.5689L12.6991 16.5138C13.2608 16.3792 13.7536 16.0329 14.3297 15.6488L13.2203 13.9847ZM11.3009 16.5138C11.7605 16.624 12.2395 16.624 12.6991 16.5138L12.233 14.5689C12.0798 14.6056 11.9202 14.6056 11.767 14.5689L11.3009 16.5138ZM11 7.00012V12.0001H13V7.00012H11ZM10.7071 9.70723L12.7071 7.70723L11.2929 6.29301L9.29289 8.29302L10.7071 9.70723ZM11.2929 7.70723L13.2929 9.70723L14.7071 8.29302L12.7071 6.29301L11.2929 7.70723Z"
                                    fill="#000000"
                                />
                            </motion.svg>
                        </motion.button>
                    </form>
                </div>
            ) : (
                <div className="flex flex-col px-10 w-full  mt-40 ">
                    <div className=" w-full z-40">
                        <div className=" text-6xl flex flex-col font-orbitron relative w-full">
                            <div className="relative overflow-hidden flex justify-center w-full gap-3">
                                <div className="relative text-transparent ">
                                    {`Let's`}
                                    <div className="flex absolute top-0 left-0 text-white ">
                                        {firstWord.map((letter, index) => (
                                            <motion.span
                                                key={index}
                                                animate={controls}
                                                initial="initial"
                                                variants={
                                                    index ===
                                                    randomIndices.word1
                                                        ? topLetter
                                                        : topFixed
                                                }
                                            >
                                                {letter}
                                            </motion.span>
                                        ))}
                                    </div>
                                    <div className=" flex  absolute top-0 left-0 text-white ">
                                        {firstWord.map((letter, index) => (
                                            <motion.span
                                                key={index}
                                                animate={controls}
                                                initial="initial"
                                                variants={
                                                    index ===
                                                    randomIndices.word1
                                                        ? bottomLetter
                                                        : bottomFixed
                                                }
                                            >
                                                {letter}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                                <div className="relative text-transparent">
                                    work
                                    <div className=" flex  absolute top-0 left-0 text-white ">
                                        {secondWord.map((letter, index) => (
                                            <motion.span
                                                key={index}
                                                animate={controls}
                                                initial="initial"
                                                variants={
                                                    index ===
                                                    randomIndices.word2
                                                        ? topLetter
                                                        : topFixed
                                                }
                                            >
                                                {letter}
                                            </motion.span>
                                        ))}
                                    </div>
                                    <div className=" flex  absolute top-0 left-0 text-white">
                                        {secondWord.map((letter, index) => (
                                            <motion.span
                                                key={index}
                                                animate={controls}
                                                initial="initial"
                                                variants={
                                                    index ===
                                                    randomIndices.word2
                                                        ? bottomLetter
                                                        : bottomFixed
                                                }
                                            >
                                                {letter}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="relative overflow-hidden pb-5 w-full flex justify-center">
                                <div className="relative text-transparent">
                                    {`together!`}
                                    <div className=" flex  absolute top-0 left-0 text-white ">
                                        {thirdWord.map((letter, index) => (
                                            <motion.span
                                                key={index}
                                                animate={controls}
                                                initial="initial"
                                                variants={
                                                    index ===
                                                    randomIndices.word3
                                                        ? topLetter
                                                        : topFixed
                                                }
                                            >
                                                {letter}
                                            </motion.span>
                                        ))}
                                    </div>
                                    <div className=" flex  absolute top-0 left-0 text-white ">
                                        {thirdWord.map((letter, index) => (
                                            <motion.span
                                                key={index}
                                                animate={controls}
                                                initial="initial"
                                                variants={
                                                    index ===
                                                    randomIndices.word3
                                                        ? bottomLetter
                                                        : bottomFixed
                                                }
                                            >
                                                {letter}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form
                        className=" w-full rounded-lg bg-outerSpace bg-opacity-30  p-10  z-10 flex flex-col items-center gap-5 my-10"
                        aria-labelledby="contact-form"
                    >
                        <div className="flex flex-col w-full">
                            <label htmlFor="fullName" className="px-2">
                                Full name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                autoComplete="name"
                                aria-required="true"
                                className=" bg-blue-300 bg-opacity-30 rounded-xl p-2 focus:outline-none focus:ring-[#007bff] focus:ring-2 hover:bg-blue-400 hover:bg-opacity-30 focus:bg-blue-400 focus:bg-opacity-30 ease-in-out "
                                placeholder="Enter your full name ..."
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            {enableErrorDisplay && errors.name && (
                                <p className="text-xs px-2 text-red-400">
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col w-full">
                            <label htmlFor="message" className="px-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                autoComplete="message"
                                aria-required="true"
                                className=" bg-blue-300 bg-opacity-30 rounded-xl p-2 w-full h-40 focus:outline-none focus:ring-[#007bff] focus:ring-2 hover:bg-blue-400 hover:bg-opacity-30 focus:bg-blue-400 focus:bg-opacity-30 ease-in-out "
                                placeholder="Enter your message ..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                style={{ resize: 'none' }}
                            />
                            {enableErrorDisplay && errors.message && (
                                <p className="text-xs px-2 text-red-400">
                                    {errors.message}
                                </p>
                            )}
                        </div>

                        <motion.button
                            className="mt-5 text-md contact-button flex items-center gap-2 rounded-md bg-[#3DA0E3] py-2 pl-4 pr-8 text-black relative "
                            style={{
                                boxShadow: '0 0 20px #3DA0E3',
                            }}
                            onClick={(e) => {
                                e.preventDefault();
                                handleOpenMail(e);
                            }}
                            whileTap="hover"
                            initial="initial"
                        >
                            <span className="contact-button-text">
                                Get in touch
                            </span>

                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 absolute right-2"
                                viewBox="0 0 24 24"
                                fill="none"
                                variants={firstMail}
                            >
                                <path
                                    d="M21 8L17.4392 9.97822C15.454 11.0811 14.4614 11.6326 13.4102 11.8488C12.4798 12.0401 11.5202 12.0401 10.5898 11.8488C9.53864 11.6326 8.54603 11.0811 6.5608 9.97822L3 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                                    stroke="#000000"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </motion.svg>
                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 absolute right-2"
                                viewBox="0 0 24 24"
                                fill="none"
                                variants={secondMail}
                            >
                                <path
                                    d="M10.2981 4.06892L9.7663 3.22207V3.22207L10.2981 4.06892ZM11.5551 3.41192L11.3327 2.43697L11.5551 3.41192ZM13.7019 4.06891L14.2337 3.22207V3.22207L13.7019 4.06891ZM12.4449 3.41192L12.6673 2.43697L12.4449 3.41192ZM4.09202 19.7821L4.54601 18.8911L4.09202 19.7821ZM3.21799 18.9081L4.10899 18.4541L3.21799 18.9081ZM20.782 18.9081L19.891 18.4541L20.782 18.9081ZM19.908 19.7821L19.454 18.8911L19.908 19.7821ZM20.9089 9.16112L21.8633 8.86273L20.9089 9.16112ZM19.5019 7.71139L18.97 8.55824L19.5019 7.71139ZM20.5206 8.45876L21.2809 7.80919L20.5206 8.45876ZM3.09111 9.16112L2.13667 8.86273L3.09111 9.16112ZM4.49814 7.71139L5.02997 8.55824L4.49814 7.71139ZM3.4794 8.45876L2.7191 7.80919L3.4794 8.45876ZM10.225 14.8168L10.7797 13.9847L10.225 14.8168ZM13.775 14.8168L13.2203 13.9847L13.775 14.8168ZM21.5547 10.8322C22.0142 10.5258 22.1384 9.90495 21.8321 9.44542C21.5257 8.98589 20.9048 8.86172 20.4453 9.16807L21.5547 10.8322ZM11.5339 15.5414L11.767 14.5689H11.767L11.5339 15.5414ZM12.4661 15.5414L12.233 14.5689H12.233L12.4661 15.5414ZM12 7.00012L12.7071 6.29301C12.3166 5.90249 11.6834 5.90249 11.2929 6.29301L12 7.00012ZM11 12.0001C11 12.5524 11.4477 13.0001 12 13.0001C12.5523 13.0001 13 12.5524 13 12.0001H11ZM9.29289 8.29302C8.90237 8.68354 8.90237 9.3167 9.29289 9.70723C9.68342 10.0978 10.3166 10.0978 10.7071 9.70723L9.29289 8.29302ZM13.2929 9.70723C13.6834 10.0978 14.3166 10.0978 14.7071 9.70723C15.0976 9.3167 15.0976 8.68354 14.7071 8.29302L13.2929 9.70723ZM20 10.4213V16.8001H22V10.4213H20ZM17.8 19.0001H6.2V21.0001H17.8V19.0001ZM4 16.8001V10.4213H2V16.8001H4ZM5.02997 8.55824L10.83 4.91576L9.7663 3.22207L3.9663 6.86454L5.02997 8.55824ZM13.17 4.91576L18.97 8.55824L20.0337 6.86454L14.2337 3.22207L13.17 4.91576ZM10.83 4.91576C11.5096 4.48892 11.6516 4.41561 11.7776 4.38687L11.3327 2.43697C10.7964 2.55933 10.3211 2.87365 9.7663 3.22207L10.83 4.91576ZM14.2337 3.22207C13.6789 2.87365 13.2036 2.55933 12.6673 2.43697L12.2224 4.38687C12.3484 4.41561 12.4904 4.48892 13.17 4.91576L14.2337 3.22207ZM11.7776 4.38687C11.924 4.35347 12.076 4.35347 12.2224 4.38687L12.6673 2.43697C12.2281 2.33677 11.7719 2.33677 11.3327 2.43697L11.7776 4.38687ZM6.2 19.0001C5.62345 19.0001 5.25117 18.9993 4.96784 18.9762C4.69617 18.954 4.59545 18.9163 4.54601 18.8911L3.63803 20.6731C4.01641 20.8659 4.40963 20.9373 4.80497 20.9696C5.18864 21.0009 5.65645 21.0001 6.2 21.0001V19.0001ZM2 16.8001C2 17.3437 1.99922 17.8115 2.03057 18.1951C2.06287 18.5905 2.13419 18.9837 2.32698 19.3621L4.10899 18.4541C4.0838 18.4047 4.04612 18.3039 4.02393 18.0323C4.00078 17.7489 4 17.3767 4 16.8001H2ZM4.54601 18.8911C4.35785 18.7953 4.20487 18.6423 4.10899 18.4541L2.32698 19.3621C2.6146 19.9266 3.07354 20.3855 3.63803 20.6731L4.54601 18.8911ZM20 16.8001C20 17.3767 19.9992 17.7489 19.9761 18.0323C19.9539 18.3039 19.9162 18.4047 19.891 18.4541L21.673 19.3621C21.8658 18.9837 21.9371 18.5905 21.9694 18.1951C22.0008 17.8115 22 17.3437 22 16.8001H20ZM17.8 21.0001C18.3436 21.0001 18.8114 21.0009 19.195 20.9696C19.5904 20.9373 19.9836 20.8659 20.362 20.6731L19.454 18.8911C19.4045 18.9163 19.3038 18.954 19.0322 18.9762C18.7488 18.9993 18.3766 19.0001 17.8 19.0001V21.0001ZM19.891 18.4541C19.7951 18.6423 19.6422 18.7953 19.454 18.8911L20.362 20.6731C20.9265 20.3855 21.3854 19.9266 21.673 19.3621L19.891 18.4541ZM22 10.4213C22 9.83991 22.0108 9.33436 21.8633 8.86273L19.9544 9.45951C19.9892 9.57075 20 9.71104 20 10.4213H22ZM18.97 8.55824C19.5715 8.93598 19.6846 9.01972 19.7603 9.10834L21.2809 7.80919C20.9599 7.43349 20.5261 7.17375 20.0337 6.86454L18.97 8.55824ZM21.8633 8.86273C21.7424 8.4758 21.5442 8.11741 21.2809 7.80919L19.7603 9.10834C19.8481 9.21107 19.9141 9.33054 19.9544 9.45951L21.8633 8.86273ZM4 10.4213C4 9.71104 4.01078 9.57075 4.04556 9.45951L2.13667 8.86273C1.98922 9.33436 2 9.83991 2 10.4213H4ZM3.9663 6.86454C3.47394 7.17375 3.04009 7.43349 2.7191 7.80919L4.2397 9.10834C4.31541 9.01972 4.42848 8.93598 5.02997 8.55824L3.9663 6.86454ZM4.04556 9.45951C4.08588 9.33054 4.15192 9.21108 4.2397 9.10834L2.7191 7.80919C2.45577 8.11741 2.25764 8.4758 2.13667 8.86273L4.04556 9.45951ZM2.4453 10.8322L9.67026 15.6488L10.7797 13.9847L3.5547 9.16807L2.4453 10.8322ZM14.3297 15.6488L21.5547 10.8322L20.4453 9.16807L13.2203 13.9847L14.3297 15.6488ZM9.67026 15.6488C10.2464 16.0329 10.7392 16.3792 11.3009 16.5138L11.767 14.5689C11.6353 14.5373 11.4865 14.456 10.7797 13.9847L9.67026 15.6488ZM13.2203 13.9847C12.5135 14.456 12.3647 14.5373 12.233 14.5689L12.6991 16.5138C13.2608 16.3792 13.7536 16.0329 14.3297 15.6488L13.2203 13.9847ZM11.3009 16.5138C11.7605 16.624 12.2395 16.624 12.6991 16.5138L12.233 14.5689C12.0798 14.6056 11.9202 14.6056 11.767 14.5689L11.3009 16.5138ZM11 7.00012V12.0001H13V7.00012H11ZM10.7071 9.70723L12.7071 7.70723L11.2929 6.29301L9.29289 8.29302L10.7071 9.70723ZM11.2929 7.70723L13.2929 9.70723L14.7071 8.29302L12.7071 6.29301L11.2929 7.70723Z"
                                    fill="#000000"
                                />
                            </motion.svg>
                        </motion.button>
                    </form>

                    <p className="mt-5 text-lg">
                        {`Whether you're hiring an entry level developer, willing to
                            write a refferal, or want me to build you an awesome
                            site please reach out!`}
                    </p>

                    <div className="bg-outerSpace h-1 w-full my-5"></div>
                    <h3 className="text-4xl">Follow Me</h3>

                    <div className="flex gap-5  text-stevenBlue mt-5 ">
                        <button className="bg-stevenBlue bg-opacity-30 hover:text-[#3DA0E3] p-2 rounded-full  ease-in-out">
                            <a
                                href="https://github.com/StevenBradleyA"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-10 h-10 "
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
                            </a>
                        </button>
                        <button className="bg-stevenBlue bg-opacity-30 hover:text-[#3DA0E3] p-2 rounded-full ease-in-out ">
                            <a
                                href="https://www.linkedin.com/in/stevenanderson-dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-10 h-10 p-1"
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
                            </a>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
