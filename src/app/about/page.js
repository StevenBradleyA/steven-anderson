'use client';
import NightSky from '~/components/Background/nightSky';
import { useMobile } from '~/components/Context/mobileContext';
import Footer from '~/components/Footer/footer';
import MobileFooter from '~/components/Footer/mobileFooter';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import steven from '@public/images/me.png';

export default function AboutPage() {
    const { isMobile } = useMobile();
    const [projectIndex, setProjectIndex] = useState(2);
    const [skillIndex, setSkillIndex] = useState(0);
    const [translateX, setTranslateX] = useState(0);

    // todo add ranking to skills -- typescript advanced C# (basic)     Python (intermediate) etc...

    const mapProjectIndexToTranslation = (index) => {
        switch (index) {
            case 0:
                return 800;
            case 1:
                return 400;
            case 2:
                return 0;
            case 3:
                return -400;
            case 4:
                return -800;
            default:
                return 0;
        }
    };

    useEffect(() => {
        setTranslateX(mapProjectIndexToTranslation(projectIndex));
    }, [projectIndex]);
    return (
        <div className="w-full min-h-screen flex flex-col mt-28 tablet:mt-40 desktop:mt-60 z-50">
            <NightSky />

            <div className=" px-5 laptop:px-10 desktop:px-40 flex flex-wrap tablet:justify-between ">
                <div>
                    <h1 className=" text-xl tablet:text-4xl desktop:text-5xl font-orbitron z-40 ">
                        Full-Stack Engineer
                    </h1>
                    <h2 className=" text-5xl tablet:text-9xl  mt-3 tablet:mt-5 z-40">
                        Steven
                    </h2>
                    <h2 className=" text-5xl tablet:text-9xl z-40">Anderson</h2>

                    <p className="border-l-2 border-white px-5 w-full tablet:w-96 text-lg tablet:text-3xl mt-3 tablet:mt-10 z-40">
                        {`I'm a full-stack web developer from the Seattle area.`}
                    </p>
                </div>
                <div className=" w-full mt-10  tablet:w-1/2 z-30 relative">
                    <Image
                        src={steven}
                        alt="steven"
                        className="w-full object-contain"
                    />
                    <a
                        href="/resume/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-0 right-5 pulse-button hover:scale-105"
                    >
                        <div className="relative ">
                            <div className="pulse-background rounded-full w-20 h-20 absolute -left-1 -top-1"></div>
                            <button
                                type="button"
                                className="bg-stevenBlue rounded-full p-3 shadow-lg relative z-1 "
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-12 h-12"
                                    version="1.1"
                                    viewBox="0 0 512 512"
                                    fill="currentColor"
                                >
                                    <g>
                                        <path d="M276.239,252.183c-6.37,2.127-13.165,3.308-20.239,3.308c-7.074,0-13.87-1.181-20.24-3.308   c-46.272,7.599-70.489,41.608-70.489,82.877H256h90.728C346.728,293.791,322.515,259.782,276.239,252.183z" />
                                        <path d="M256,240.788c27.43,0,49.658-22.24,49.658-49.666v-14.087c0-27.426-22.228-49.659-49.658-49.659   c-27.43,0-49.658,22.233-49.658,49.659v14.087C206.342,218.548,228.57,240.788,256,240.788z" />
                                        <path d="M378.4,0H133.582C86.234,0,47.7,38.542,47.7,85.899v340.22C47.7,473.476,86.234,512,133.582,512h205.695   h13.175l9.318-9.301l93.229-93.229l9.301-9.31v-13.174V85.899C464.3,38.542,425.766,0,378.4,0z M432.497,386.985H384.35   c-24.882,0-45.074,20.183-45.074,45.073v48.139H133.582c-29.866,0-54.078-24.221-54.078-54.078V85.899   c0-29.874,24.212-54.096,54.078-54.096H378.4c29.876,0,54.096,24.222,54.096,54.096V386.985z" />
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </a>
                </div>
            </div>

            <div className="px-5 laptop:px-10 desktop:px-40 w-full mt-5 tablet:mt-40 desktop:mt-60 ">
                <div className="flex w-full tablet:gap-20 flex-wrap tablet:flex-nowrap tablet:justify-between relative ">
                    <h2 className="text-3xl tablet:text-6xl font-orbitron ">
                        Portfolio
                    </h2>
                    {skillIndex === 0 && (
                        <ul className="flex gap-x-5 gap-y-3 w-full mt-3 tablet:mt-0 tablet:w-96 flex-wrap text-sm tablet:text-lg tablet:absolute right-0 top-0">
                            <li className="flex items-center text-white hover:text-stevenBlue ease-in">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                >
                                    <circle
                                        cx="12.5"
                                        cy="12.5"
                                        r="2"
                                        fill="currentColor"
                                    />
                                </svg>
                                Javascript
                            </li>
                            <li className="flex items-center text-white hover:text-stevenBlue ease-in">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                >
                                    <circle
                                        cx="12.5"
                                        cy="12.5"
                                        r="2"
                                        fill="currentColor"
                                    />
                                </svg>
                                Typescript
                            </li>
                            <li className="flex items-center text-white hover:text-stevenBlue ease-in">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                >
                                    <circle
                                        cx="12.5"
                                        cy="12.5"
                                        r="2"
                                        fill="currentColor"
                                    />
                                </svg>
                                Python
                            </li>
                            <li className="flex items-center text-white hover:text-stevenBlue ease-in">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                >
                                    <circle
                                        cx="12.5"
                                        cy="12.5"
                                        r="2"
                                        fill="currentColor"
                                    />
                                </svg>
                                SQL
                            </li>
                            <li className="flex items-center text-white hover:text-stevenBlue ease-in">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                >
                                    <circle
                                        cx="12.5"
                                        cy="12.5"
                                        r="2"
                                        fill="currentColor"
                                    />
                                </svg>
                                HTML
                            </li>
                            <li className="flex items-center text-white hover:text-stevenBlue ease-in">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                >
                                    <circle
                                        cx="12.5"
                                        cy="12.5"
                                        r="2"
                                        fill="currentColor"
                                    />
                                </svg>
                                CSS
                            </li>
                        </ul>
                    )}
                    {skillIndex === 1 && (
                        <ul className="flex gap-x-5 gap-y-3 w-[45rem] mt-3 tablet:mt-0  desktop:w-[60rem] tablet:absolute top-0 right-0 flex-wrap text-sm tablet:text-lg ">
                            <li className="flex items-center text-white hover:text-stevenBlue ease-in">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                >
                                    <circle
                                        cx="12.5"
                                        cy="12.5"
                                        r="2"
                                        fill="currentColor"
                                    />
                                </svg>
                                React
                            </li>
                            <li className="flex items-center text-white hover:text-stevenBlue ease-in">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                >
                                    <circle
                                        cx="12.5"
                                        cy="12.5"
                                        r="2"
                                        fill="currentColor"
                                    />
                                </svg>
                                Redux
                            </li>

                            <li className="flex items-center text-white hover:text-stevenBlue ease-in">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                >
                                    <circle
                                        cx="12.5"
                                        cy="12.5"
                                        r="2"
                                        fill="currentColor"
                                    />
                                </svg>
                                Next.js
                            </li>
                            <li className="flex items-center text-white hover:text-stevenBlue ease-in">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                >
                                    <circle
                                        cx="12.5"
                                        cy="12.5"
                                        r="2"
                                        fill="currentColor"
                                    />
                                </svg>
                                Three.js
                            </li>
                            <li className="flex items-center text-white hover:text-stevenBlue ease-in">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                >
                                    <circle
                                        cx="12.5"
                                        cy="12.5"
                                        r="2"
                                        fill="currentColor"
                                    />
                                </svg>
                                Express
                            </li>
                            <li className="flex items-center text-white hover:text-stevenBlue ease-in">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                >
                                    <circle
                                        cx="12.5"
                                        cy="12.5"
                                        r="2"
                                        fill="currentColor"
                                    />
                                </svg>
                                Flask
                            </li>
                            <li className="flex items-center text-white hover:text-stevenBlue ease-in">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                >
                                    <circle
                                        cx="12.5"
                                        cy="12.5"
                                        r="2"
                                        fill="currentColor"
                                    />
                                </svg>
                                Socket.io
                            </li>
                            <li className="flex items-center text-white hover:text-stevenBlue ease-in">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                >
                                    <circle
                                        cx="12.5"
                                        cy="12.5"
                                        r="2"
                                        fill="currentColor"
                                    />
                                </svg>
                                Tailwind CSS
                            </li>
                            <li className="flex items-center text-white hover:text-stevenBlue ease-in">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                >
                                    <circle
                                        cx="12.5"
                                        cy="12.5"
                                        r="2"
                                        fill="currentColor"
                                    />
                                </svg>
                                Framer Motion
                            </li>
                            <li className="flex items-center text-white hover:text-stevenBlue ease-in">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                >
                                    <circle
                                        cx="12.5"
                                        cy="12.5"
                                        r="2"
                                        fill="currentColor"
                                    />
                                </svg>
                                TensorFlow
                            </li>
                            <li className="flex items-center text-white hover:text-stevenBlue ease-in">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                >
                                    <circle
                                        cx="12.5"
                                        cy="12.5"
                                        r="2"
                                        fill="currentColor"
                                    />
                                </svg>
                                PyTorch
                            </li>

                            <li className="flex items-center text-white hover:text-stevenBlue ease-in">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                >
                                    <circle
                                        cx="12.5"
                                        cy="12.5"
                                        r="2"
                                        fill="currentColor"
                                    />
                                </svg>
                                Prisma
                            </li>
                            <li className="flex items-center text-white hover:text-stevenBlue ease-in">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                >
                                    <circle
                                        cx="12.5"
                                        cy="12.5"
                                        r="2"
                                        fill="currentColor"
                                    />
                                </svg>
                                tRPC
                            </li>
                            <li className="flex items-center text-white hover:text-stevenBlue ease-in">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                >
                                    <circle
                                        cx="12.5"
                                        cy="12.5"
                                        r="2"
                                        fill="currentColor"
                                    />
                                </svg>
                                PostgreSQL
                            </li>
                        </ul>
                    )}
                    {skillIndex === 2 && (
                        <ul className="flex gap-x-5 gap-y-3 tablet:absolute top-0 right-0 w-[40rem] flex-wrap text-sm tablet:text-lg mt-3 tablet:mt-0">
                            <li className="flex items-center text-white hover:text-stevenBlue ease-in">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                >
                                    <circle
                                        cx="12.5"
                                        cy="12.5"
                                        r="2"
                                        fill="currentColor"
                                    />
                                </svg>
                                AWS
                            </li>
                            <li className="flex items-center text-white hover:text-stevenBlue ease-in">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                >
                                    <circle
                                        cx="12.5"
                                        cy="12.5"
                                        r="2"
                                        fill="currentColor"
                                    />
                                </svg>
                                Blender
                            </li>
                            <li className="flex items-center text-white hover:text-stevenBlue ease-in">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                >
                                    <circle
                                        cx="12.5"
                                        cy="12.5"
                                        r="2"
                                        fill="currentColor"
                                    />
                                </svg>
                                Git
                            </li>
                            <li className="flex items-center text-white hover:text-stevenBlue ease-in">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                >
                                    <circle
                                        cx="12.5"
                                        cy="12.5"
                                        r="2"
                                        fill="currentColor"
                                    />
                                </svg>
                                Vercel
                            </li>
                            <li className="flex items-center text-white hover:text-stevenBlue ease-in">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                >
                                    <circle
                                        cx="12.5"
                                        cy="12.5"
                                        r="2"
                                        fill="currentColor"
                                    />
                                </svg>
                                Docker
                            </li>
                            <li className="flex items-center text-white hover:text-stevenBlue ease-in">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                >
                                    <circle
                                        cx="12.5"
                                        cy="12.5"
                                        r="2"
                                        fill="currentColor"
                                    />
                                </svg>
                                Postman
                            </li>
                            <li className="flex items-center text-white hover:text-stevenBlue ease-in">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                >
                                    <circle
                                        cx="12.5"
                                        cy="12.5"
                                        r="2"
                                        fill="currentColor"
                                    />
                                </svg>
                                Photoshop
                            </li>

                            <li className="flex items-center text-white hover:text-stevenBlue ease-in">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                >
                                    <circle
                                        cx="12.5"
                                        cy="12.5"
                                        r="2"
                                        fill="currentColor"
                                    />
                                </svg>
                                Adobe Illustrator
                            </li>
                            <li className="flex items-center text-white hover:text-stevenBlue ease-in">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                >
                                    <circle
                                        cx="12.5"
                                        cy="12.5"
                                        r="2"
                                        fill="currentColor"
                                    />
                                </svg>
                                Davinci Resolve
                            </li>
                        </ul>
                    )}
                    {skillIndex === 3 && (
                        <ul className="flex gap-x-5 gap-y-3  w-[45rem] desktop:w-[55rem] tablet:absolute top-0 right-0 flex-wrap text-sm tablet:text-lg mt-3 tablet:mt-0 ">
                            <li className="flex items-center text-white hover:text-stevenBlue ease-in">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                >
                                    <circle
                                        cx="12.5"
                                        cy="12.5"
                                        r="2"
                                        fill="currentColor"
                                    />
                                </svg>
                                Full Stack Development
                            </li>
                            <li className="flex items-center text-white hover:text-stevenBlue ease-in">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                >
                                    <circle
                                        cx="12.5"
                                        cy="12.5"
                                        r="2"
                                        fill="currentColor"
                                    />
                                </svg>
                                Live Testing
                            </li>
                            <li className="flex items-center text-white hover:text-stevenBlue ease-in">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                >
                                    <circle
                                        cx="12.5"
                                        cy="12.5"
                                        r="2"
                                        fill="currentColor"
                                    />
                                </svg>
                                Team Collaboration
                            </li>
                            <li className="flex items-center text-white hover:text-stevenBlue ease-in">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                >
                                    <circle
                                        cx="12.5"
                                        cy="12.5"
                                        r="2"
                                        fill="currentColor"
                                    />
                                </svg>
                                AI & Machine Learning
                            </li>
                            <li className="flex items-center text-white hover:text-stevenBlue ease-in">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                >
                                    <circle
                                        cx="12.5"
                                        cy="12.5"
                                        r="2"
                                        fill="currentColor"
                                    />
                                </svg>
                                Database Management
                            </li>
                            <li className="flex items-center text-white hover:text-stevenBlue ease-in">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                >
                                    <circle
                                        cx="12.5"
                                        cy="12.5"
                                        r="2"
                                        fill="currentColor"
                                    />
                                </svg>
                                API Development
                            </li>

                            <li className="flex items-center text-white hover:text-stevenBlue ease-in">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                >
                                    <circle
                                        cx="12.5"
                                        cy="12.5"
                                        r="2"
                                        fill="currentColor"
                                    />
                                </svg>
                                Cloud Services
                            </li>
                            <li className="flex items-center text-white hover:text-stevenBlue ease-in">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                >
                                    <circle
                                        cx="12.5"
                                        cy="12.5"
                                        r="2"
                                        fill="currentColor"
                                    />
                                </svg>
                                UI/UX Design
                            </li>
                        </ul>
                    )}
                </div>
            </div>
            <div className="flex w-full flex-wrap gap-5 tablet:gap-0 tablet:flex-nowrap tablet:justify-between px-5 laptop:px-10 desktop:px-40 relative text-white mt-3 tablet:mt-28 text-xs tablet:text-sm min-h-[100vh] ">
                {skillIndex === 0 && (
                    <div className="w-full h-[180px] tablet:h-[250px] flex flex-wrap gap-5 tablet:gap-0 tablet:flex-nowrap tablet:justify-between z-40">
                        <div className="bg-outerSpace w-[220px] laptop:w-[300px] desktop:w-[350px] h-full rounded-lg p-5 tablet:p-10 flex flex-col justify-between portfolio-card-container ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8 text-white  portfolio-card-icon"
                                viewBox="0 0 16 16"
                                fill="none"
                            >
                                <path
                                    fillRule="nonzero"
                                    clipRule="nonzero"
                                    d="M0 1.75C0 0.783501 0.783502 0 1.75 0H14.25C15.2165 0 16 0.783502 16 1.75V3.75C16 4.16421 15.6642 4.5 15.25 4.5C14.8358 4.5 14.5 4.16421 14.5 3.75V1.75C14.5 1.61193 14.3881 1.5 14.25 1.5H1.75C1.61193 1.5 1.5 1.61193 1.5 1.75V14.25C1.5 14.3881 1.61193 14.5 1.75 14.5H15.25C15.6642 14.5 16 14.8358 16 15.25C16 15.6642 15.6642 16 15.25 16H1.75C0.783501 16 0 15.2165 0 14.25V1.75ZM4.75 6.5C4.75 6.08579 5.08579 5.75 5.5 5.75H9.25C9.66421 5.75 10 6.08579 10 6.5C10 6.91421 9.66421 7.25 9.25 7.25H8.25V12.5C8.25 12.9142 7.91421 13.25 7.5 13.25C7.08579 13.25 6.75 12.9142 6.75 12.5V7.25H5.5C5.08579 7.25 4.75 6.91421 4.75 6.5ZM11.2757 6.58011C11.6944 6.08164 12.3507 5.75 13.25 5.75C14.0849 5.75 14.7148 6.03567 15.1394 6.48481C15.4239 6.78583 15.4105 7.26052 15.1095 7.54505C14.8085 7.82958 14.3338 7.81621 14.0493 7.51519C13.9394 7.39898 13.7204 7.25 13.25 7.25C12.7493 7.25 12.5306 7.41836 12.4243 7.54489C12.2934 7.70065 12.25 7.896 12.25 8C12.25 8.104 12.2934 8.29935 12.4243 8.45511C12.5306 8.58164 12.7493 8.75 13.25 8.75C13.3257 8.75 13.3988 8.76121 13.4676 8.78207C14.1307 8.87646 14.6319 9.17251 14.9743 9.58011C15.3684 10.0493 15.5 10.604 15.5 11C15.5 11.396 15.3684 11.9507 14.9743 12.4199C14.5556 12.9184 13.8993 13.25 13 13.25C12.1651 13.25 11.5352 12.9643 11.1106 12.5152C10.8261 12.2142 10.8395 11.7395 11.1405 11.4549C11.4415 11.1704 11.9162 11.1838 12.2007 11.4848C12.3106 11.601 12.5296 11.75 13 11.75C13.5007 11.75 13.7194 11.5816 13.8257 11.4551C13.9566 11.2993 14 11.104 14 11C14 10.896 13.9566 10.7007 13.8257 10.5449C13.7194 10.4184 13.5007 10.25 13 10.25C12.9243 10.25 12.8512 10.2388 12.7824 10.2179C12.1193 10.1235 11.6181 9.82749 11.2757 9.41989C10.8816 8.95065 10.75 8.396 10.75 8C10.75 7.604 10.8816 7.04935 11.2757 6.58011Z"
                                    fill="currentColor"
                                />
                            </svg>

                            <h3 className="text-base tablet:text-2xl portfolio-card-title">
                                TypeScript
                            </h3>
                            <p className="text-white/50">
                                Safer, more predicatble code is why I rely on
                                TypeScript for my front-end development.
                            </p>
                        </div>
                        <div className="bg-outerSpace w-[220px] laptop:w-[300px] desktop:w-[350px] h-full rounded-lg p-5 tablet:p-10 flex flex-col justify-between portfolio-card-container ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                className="w-8 h-8 text-white/50 portfolio-card-icon bg-none"
                                fill="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M13.0164 2C10.8193 2 9.03825 3.72453 9.03825 5.85185V8.51852H15.9235V9.25926H5.97814C3.78107 9.25926 2 10.9838 2 13.1111L2 18.8889C2 21.0162 3.78107 22.7407 5.97814 22.7407H8.27322V19.4815C8.27322 17.3542 10.0543 15.6296 12.2514 15.6296H19.5956C21.4547 15.6296 22.9617 14.1704 22.9617 12.3704V5.85185C22.9617 3.72453 21.1807 2 18.9836 2H13.0164ZM12.0984 6.74074C12.8589 6.74074 13.4754 6.14378 13.4754 5.40741C13.4754 4.67103 12.8589 4.07407 12.0984 4.07407C11.3378 4.07407 10.7213 4.67103 10.7213 5.40741C10.7213 6.14378 11.3378 6.74074 12.0984 6.74074Z"
                                    fill="white"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M18.9834 30C21.1805 30 22.9616 28.2755 22.9616 26.1482V23.4815L16.0763 23.4815L16.0763 22.7408L26.0217 22.7408C28.2188 22.7408 29.9998 21.0162 29.9998 18.8889V13.1111C29.9998 10.9838 28.2188 9.25928 26.0217 9.25928L23.7266 9.25928V12.5185C23.7266 14.6459 21.9455 16.3704 19.7485 16.3704L12.4042 16.3704C10.5451 16.3704 9.03809 17.8296 9.03809 19.6296L9.03809 26.1482C9.03809 28.2755 10.8192 30 13.0162 30H18.9834ZM19.9015 25.2593C19.1409 25.2593 18.5244 25.8562 18.5244 26.5926C18.5244 27.329 19.1409 27.9259 19.9015 27.9259C20.662 27.9259 21.2785 27.329 21.2785 26.5926C21.2785 25.8562 20.662 25.2593 19.9015 25.2593Z"
                                    fill="currentColor"
                                />
                            </svg>
                            <h3 className="text-2xl portfolio-card-title ">
                                Python
                            </h3>
                            <p className="text-white/50">
                                Most of my Python experience is with Flask,
                                where its simplicity and flexibility have
                                empowered me to build robust backend solutions.
                            </p>
                        </div>
                        <div className="bg-outerSpace w-[220px] laptop:w-[300px] desktop:w-[350px] h-full rounded-lg p-5 tablet:p-10 flex flex-col justify-between portfolio-card-container ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8 text-white portfolio-card-icon"
                                viewBox="0 0 48 48"
                                fill="currentColor"
                            >
                                <g>
                                    <g>
                                        <rect
                                            width="48"
                                            height="48"
                                            fill="none"
                                        />
                                    </g>
                                    <g>
                                        <path d="M24,46,8.3,41.7,5,4H43L39.7,41.7ZM12,38.6l12,3.3,12-3.3L38.6,8H9.4Z" />
                                        <path d="M14,13H34L32.2,34.3,23.9,37l-8.4-2.1-.9-7.2h4.5v3.6l4.8.9,4.4-.9V25.9H14.6l-.3-4.5a2.3,2.3,0,0,1,1.5-.6c6.9,0,12.5.6,12.5.6V17.8H14.6Z" />
                                    </g>
                                </g>
                            </svg>
                            <h3 className="text-2xl portfolio-card-title">
                                Css
                            </h3>
                            <p className="text-white/50">
                                I use CSS to create smooth animations and
                                responsive layouts, ensuring a seamless
                                experience from mobile to desktop.
                            </p>
                        </div>
                        <div className="bg-outerSpace w-[220px] laptop:w-[300px] desktop:w-[350px] h-full rounded-lg p-5 tablet:p-10 flex flex-col justify-between portfolio-card-container ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-9 h-9 text-white portfolio-card-icon"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M10 5H7C5.89543 5 5 5.89543 5 7V16H19V11.5"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M15 4L13 6L15 8"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M19 4L21 6L19 8"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M3 16H21V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V16Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <h3 className="text-2xl portfolio-card-title">
                                Learning
                            </h3>
                            <p className="text-white/50">
                                {`I'm currently diving into C# and Java to broaden
                                my expertise and enhance my development toolkit.`}
                            </p>
                        </div>
                    </div>
                )}
                {skillIndex === 1 && (
                    <div className="w-full h-[180px] tablet:h-[250px] flex flex-wrap gap-5 tablet:gap-0 tablet:flex-nowrap tablet:justify-between z-40">
                        <div className="bg-outerSpace w-[220px] laptop:w-[300px] desktop:w-[350px] h-full rounded-lg p-5 tablet:p-10 flex flex-col justify-between portfolio-card-container ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8 text-white portfolio-card-icon bg-none"
                                viewBox="0 0 32 32"
                                fill="none"
                            >
                                <path
                                    d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z"
                                    fill="currentColor"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z"
                                    fill="currentColor"
                                />
                            </svg>

                            <h3 className="text-2xl portfolio-card-title">
                                React
                            </h3>
                            <p className="text-white/50">
                                Interactive user interfaces with fast updates
                                and a component-based architecture, ensuring
                                scalable and maintainable front-end development.
                            </p>
                        </div>
                        <div className="bg-outerSpace w-[220px] laptop:w-[300px] desktop:w-[350px] h-full rounded-lg p-5 tablet:p-10 flex flex-col justify-between portfolio-card-container ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="w-8 h-8 text-white portfolio-card-icon bg-none"
                                viewBox="0 0 32 32"
                            >
                                <path d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z" />
                            </svg>
                            <h3 className="text-2xl portfolio-card-title ">
                                Next.js
                            </h3>
                            <p className="text-white/50">
                                I use Next.js for its powerful server-side
                                rendering, static site generation, enabling
                                fast, SEO-friendly, and highly optimized web
                                applications.
                            </p>
                        </div>
                        <div className="bg-outerSpace w-[220px] laptop:w-[300px] desktop:w-[350px] h-full rounded-lg p-5 tablet:p-10 flex flex-col justify-between portfolio-card-container ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8 text-white portfolio-card-icon bg-none"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M7.5 6C7.5 6.82843 6.82843 7.5 6 7.5C5.17157 7.5 4.5 6.82843 4.5 6C4.5 5.17157 5.17157 4.5 6 4.5C6.82843 4.5 7.5 5.17157 7.5 6Z"
                                    fill="currentColor"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4 1C2.34315 1 1 2.34315 1 4V8C1 9.65685 2.34315 11 4 11H20C21.6569 11 23 9.65685 23 8V4C23 2.34315 21.6569 1 20 1H4ZM3 4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V8C21 8.55228 20.5523 9 20 9H4C3.44772 9 3 8.55228 3 8V4Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M6 19.5C6.82843 19.5 7.5 18.8284 7.5 18C7.5 17.1716 6.82843 16.5 6 16.5C5.17157 16.5 4.5 17.1716 4.5 18C4.5 18.8284 5.17157 19.5 6 19.5Z"
                                    fill="currentColor"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4 13C2.34315 13 1 14.3431 1 16V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V16C23 14.3431 21.6569 13 20 13H4ZM3 16C3 15.4477 3.44772 15 4 15H20C20.5523 15 21 15.4477 21 16V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V16Z"
                                    fill="currentColor"
                                />
                            </svg>
                            <h3 className="text-2xl portfolio-card-title">
                                Backend
                            </h3>
                            <p className="text-white/50">
                                I have experience with Express, Flask, and
                                Prisma for building fast, flexible, and
                                lightweight back-end services.
                            </p>
                        </div>
                        <div className="bg-outerSpace w-[220px] laptop:w-[300px] desktop:w-[350px] h-full rounded-lg p-5 tablet:p-10 flex flex-col justify-between portfolio-card-container ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8 text-white portfolio-card-icon bg-none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M23.14.93l-.07-.07A2.926 2.926 0 0 0 20.98 0a2.886 2.886 0 0 0-2.08.86L8.858 10.9a3.04 3.04 0 0 0-.53.72 7.793 7.793 0 0 0-4.1 1.621c-.191.144-.36.316-.5.51a6.08 6.08 0 0 0-.98 1.961c-.25.69-.59 1.631-1.22 3-.42.91-.75 1.541-.98 1.981a3.092 3.092 0 0 0-.54 1.631c.014.206.08.406.19.58a2.64 2.64 0 0 0 2.23 1.07 10.462 10.462 0 0 0 8.161-3.371c.378-.44.692-.932.93-1.461a7.882 7.882 0 0 0 .69-3.361.142.142 0 0 1 .02-.04c.325-.144.62-.347.87-.6L23.14 5.1A2.888 2.888 0 0 0 24 3.021 2.927 2.927 0 0 0 23.14.93zM9.7 18.317c-.17.368-.388.711-.65 1.02a8.393 8.393 0 0 1-6.891 2.6c.05-.1.11-.21.17-.32.24-.46.58-1.11 1.02-2.061a39.058 39.058 0 0 0 1.28-3.151c.14-.491.355-.957.64-1.381.062-.08.133-.154.21-.22a5.221 5.221 0 0 1 2.59-1.14c.121.537.396 1.027.79 1.411l.07.07c.35.357.788.616 1.27.75a5.614 5.614 0 0 1-.499 2.422zM21.73 3.691L11.678 13.735a.947.947 0 0 1-.67.28.983.983 0 0 1-.67-.28l-.07-.07a.948.948 0 0 1 0-1.34L20.309 2.271c.18-.173.42-.27.671-.271a.937.937 0 0 1 .67.27l.08.08c.36.374.36.967 0 1.341z"
                                    fill="currentColor"
                                    fillRule="evenodd"
                                />
                            </svg>
                            <h3 className="text-2xl portfolio-card-title">
                                Styling
                            </h3>
                            <p className="text-white/50">
                                {`I'm skilled in CSS, Tailwind CSS, and animations with Framer Motion. My styling features responsive design for desktop to mobile.`}
                            </p>
                        </div>
                    </div>
                )}
                {skillIndex === 2 && (
                    <div className="w-full h-[180px] tablet:h-[250px] flex flex-wrap gap-5 tablet:gap-0 tablet:flex-nowrap tablet:justify-between z-40">
                        <div className="bg-outerSpace w-[220px] laptop:w-[300px] desktop:w-[350px] h-full rounded-lg p-5 tablet:p-10 flex flex-col justify-between portfolio-card-container ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8 text-white portfolio-card-icon bg-none"
                                viewBox="0 0 16 16"
                                fill="none"
                            >
                                <g fill="currentColor">
                                    <path d="M4.51 7.687c0 .197.02.357.058.475.042.117.096.245.17.384a.233.233 0 01.037.123c0 .053-.032.107-.1.16l-.336.224a.255.255 0 01-.138.048c-.054 0-.107-.026-.16-.074a1.652 1.652 0 01-.192-.251 4.137 4.137 0 01-.164-.315c-.416.491-.937.737-1.565.737-.447 0-.804-.129-1.064-.385-.261-.256-.394-.598-.394-1.025 0-.454.16-.822.484-1.1.325-.278.756-.416 1.304-.416.18 0 .367.016.564.042.197.027.4.07.612.118v-.39c0-.406-.085-.689-.25-.854-.17-.166-.458-.246-.868-.246-.186 0-.377.022-.574.07a4.23 4.23 0 00-.575.181 1.525 1.525 0 01-.186.07.326.326 0 01-.085.016c-.075 0-.112-.054-.112-.166v-.262c0-.085.01-.15.037-.186a.399.399 0 01.15-.113c.185-.096.409-.176.67-.24.26-.07.537-.101.83-.101.633 0 1.096.144 1.394.432.293.288.442.726.442 1.314v1.73h.01zm-2.161.811c.175 0 .356-.032.548-.096.192-.064.362-.182.505-.342a.848.848 0 00.181-.341c.032-.129.054-.283.054-.465V7.03a4.43 4.43 0 00-.49-.09 3.996 3.996 0 00-.5-.033c-.357 0-.617.07-.793.214-.176.144-.26.347-.26.614 0 .25.063.437.196.566.128.133.314.197.559.197zm4.273.577c-.096 0-.16-.016-.202-.054-.043-.032-.08-.106-.112-.208l-1.25-4.127a.938.938 0 01-.048-.214c0-.085.042-.133.127-.133h.522c.1 0 .17.016.207.053.043.032.075.107.107.208l.894 3.535.83-3.535c.026-.106.058-.176.101-.208a.365.365 0 01.213-.053h.426c.1 0 .17.016.212.053.043.032.08.107.102.208l.84 3.578.92-3.578a.459.459 0 01.107-.208.347.347 0 01.208-.053h.495c.085 0 .133.043.133.133 0 .027-.006.054-.01.086a.768.768 0 01-.038.133l-1.283 4.127c-.031.107-.069.177-.111.209a.34.34 0 01-.203.053h-.457c-.101 0-.17-.016-.213-.053-.043-.038-.08-.107-.101-.214L8.213 5.37l-.82 3.439c-.026.107-.058.176-.1.213-.043.038-.118.054-.213.054h-.458zm6.838.144a3.51 3.51 0 01-.82-.096c-.266-.064-.473-.134-.612-.214-.085-.048-.143-.101-.165-.15a.38.38 0 01-.031-.149v-.272c0-.112.042-.166.122-.166a.3.3 0 01.096.016c.032.011.08.032.133.054.18.08.378.144.585.187.213.042.42.064.633.064.336 0 .596-.059.777-.176a.575.575 0 00.277-.508.52.52 0 00-.144-.373c-.095-.102-.276-.193-.537-.278l-.772-.24c-.388-.123-.676-.305-.851-.545a1.275 1.275 0 01-.266-.774c0-.224.048-.422.143-.593.096-.17.224-.32.384-.438.16-.122.34-.213.553-.277.213-.064.436-.091.67-.091.118 0 .24.005.357.021.122.016.234.038.346.06.106.026.208.052.303.085.096.032.17.064.224.096a.461.461 0 01.16.133.289.289 0 01.047.176v.251c0 .112-.042.171-.122.171a.552.552 0 01-.202-.064 2.428 2.428 0 00-1.022-.208c-.303 0-.543.048-.708.15-.165.1-.25.256-.25.475 0 .149.053.277.16.379.106.101.303.202.585.293l.756.24c.383.123.66.294.825.513.165.219.244.47.244.748 0 .23-.047.437-.138.619a1.435 1.435 0 01-.388.47c-.165.133-.362.23-.591.299-.24.075-.49.112-.761.112z" />

                                    <path
                                        fillRule="evenodd"
                                        d="M14.465 11.813c-1.75 1.297-4.294 1.986-6.481 1.986-3.065 0-5.827-1.137-7.913-3.027-.165-.15-.016-.353.18-.235 2.257 1.313 5.04 2.109 7.92 2.109 1.941 0 4.075-.406 6.039-1.239.293-.133.543.192.255.406z"
                                        clipRule="evenodd"
                                    />

                                    <path
                                        fillRule="evenodd"
                                        d="M15.194 10.98c-.223-.287-1.479-.138-2.048-.069-.17.022-.197-.128-.043-.24 1-.705 2.645-.502 2.836-.267.192.24-.053 1.89-.99 2.68-.143.123-.281.06-.217-.1.212-.53.686-1.72.462-2.003z"
                                        clipRule="evenodd"
                                    />
                                </g>
                            </svg>

                            <h3 className="text-2xl portfolio-card-title">
                                AWS
                            </h3>
                            <p className="text-white/50">
                                I have experience using AWS, specifically with
                                S3 buckets for multi-image uploads.
                            </p>
                        </div>
                        <div className="bg-outerSpace w-[220px] laptop:w-[300px] desktop:w-[350px] h-full rounded-lg p-5 tablet:p-10 flex flex-col justify-between portfolio-card-container ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                version="1.1"
                                className="w-8 h-8 text-white portfolio-card-icon bg-none"
                                viewBox="0 0 512 512"
                            >
                                <g id="2069a460dcf28295e231f3111e037552">
                                    <path d="M426.333,0.5H85.667C38.825,0.5,0.5,38.825,0.5,85.667v340.667c0,46.842,38.325,85.167,85.167,85.167   h340.667c46.842,0,85.167-38.325,85.167-85.167V85.667C511.5,38.825,473.175,0.5,426.333,0.5z M245.329,260.524   c-17.736,17.736-45.611,26.065-77.103,26.065c-8.326,0-15.927-0.365-21.72-1.451v91.945h-44.159V136.363   c15.927-2.895,38.009-5.069,68.05-5.069c32.582,0,56.473,6.878,72.039,19.911c14.48,11.947,23.89,31.131,23.89,53.936   C266.325,228.309,259.086,247.492,245.329,260.524z M337.981,380.706c-21.358,0-40.542-5.069-53.574-12.31l8.687-32.216   c10.135,6.154,29.322,12.671,45.249,12.671c19.545,0,28.236-7.964,28.236-19.549c0-11.943-7.239-18.099-28.96-25.7   c-34.391-11.947-48.866-30.769-48.505-51.403c0-31.131,25.7-55.383,66.604-55.383c19.549,0,36.562,5.069,46.695,10.496   l-8.687,31.493c-7.602-4.342-21.721-10.135-37.285-10.135c-15.928,0-24.615,7.602-24.615,18.46c0,11.224,8.326,16.655,30.77,24.618   c31.854,11.582,46.696,27.871,47.058,53.937C409.653,357.539,384.678,380.706,337.981,380.706z M221.8,206.95   c0,28.598-20.273,44.887-53.574,44.887c-9.049,0-16.289-0.362-21.72-1.809v-82.534c4.708-1.085,13.395-2.171,25.704-2.171   C202.979,165.323,221.8,179.803,221.8,206.95z"></path>
                                </g>
                            </svg>
                            <h3 className="text-2xl portfolio-card-title ">
                                Photoshop
                            </h3>
                            <p className="text-white/50">
                                {`I'm proficient in image manipulation using Adobe
                                Photoshop and Affinity.`}
                            </p>
                        </div>
                        <div className="bg-outerSpace w-[220px] laptop:w-[300px] desktop:w-[350px] h-full rounded-lg p-5 tablet:p-10 flex flex-col justify-between portfolio-card-container ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="w-8 h-8 text-white portfolio-card-icon bg-none"
                                viewBox="0 0 512 512"
                            >
                                <g>
                                    <path
                                        display="inline"
                                        d="M510.003,279.642c-2.998-21.097-10.305-41.104-21.724-59.459c-9.96-16.019-22.739-30.266-37.992-42.375   l0.041-0.038L290.133,54.731c-0.133-0.116-0.27-0.224-0.361-0.287c-5.327-4.08-12.538-6.325-20.298-6.325   c-7.769,0-15.262,2.25-21.088,6.337c-6.263,4.375-9.843,10.18-10.093,16.36c-0.229,5.764,2.521,11.311,7.764,15.636   c10.31,8.134,20.598,16.447,30.898,24.768c9.997,8.08,20.298,16.401,30.549,24.502l-196.213-0.133   c-22.439,0-37.718,10.537-40.861,28.178c-1.381,7.727,1.056,16.223,6.504,22.73c5.78,6.899,14.172,10.704,23.629,10.704   l14.958,0.009c20.664,0,41.419-0.05,62.146-0.1l19.766-0.046L19.354,328.812l-0.707,0.516C8.7,336.954,2.188,347.642,0.783,358.653   c-1.065,8.342,0.881,15.965,5.63,22.053c5.66,7.257,14.497,11.249,24.885,11.249c10.205,0,20.618-3.867,29.334-10.908l96.166-78.7   c-0.411,3.843-0.91,9.481-0.853,13.573c0.108,6.479,2.188,19.479,5.481,30.033c6.804,21.691,18.265,41.536,34.063,58.964   c16.438,18.131,36.458,32.508,59.5,42.721c24.361,10.774,50.547,16.243,77.836,16.243h0.253   c27.376-0.066,53.646-5.622,78.085-16.518c23.08-10.334,43.091-24.769,59.467-42.899c15.778-17.516,27.222-37.394,34.013-59.067   c3.356-10.721,5.519-21.82,6.417-33.003C511.899,301.565,511.538,290.545,510.003,279.642z M334.821,383.601   c-60.142,0-108.912-43.627-108.912-97.447c0-53.815,48.771-97.442,108.912-97.442c60.141,0,108.907,43.627,108.907,97.442   C443.729,339.974,394.962,383.601,334.821,383.601z M397.627,277.591c0.886,16.064-5.53,30.978-16.796,42.019   c-11.461,11.248-27.816,18.313-46.102,18.313c-18.281,0-34.637-7.065-46.102-18.313c-11.262-11.041-17.665-25.954-16.784-42.006   c0.865-15.603,8.476-29.376,19.94-39.128c11.273-9.589,26.411-15.44,42.945-15.44c16.538,0,31.671,5.852,42.945,15.44   C389.14,248.228,396.754,261.992,397.627,277.591z"
                                    ></path>
                                </g>
                            </svg>
                            <h3 className="text-2xl portfolio-card-title">
                                Blender
                            </h3>
                            <p className="text-white/50">
                                Experienced in crafting visually engaging assets
                                for both web and creative projects.
                            </p>
                        </div>
                        <div className="bg-outerSpace w-[220px] laptop:w-[300px] desktop:w-[350px] h-full rounded-lg p-5 tablet:p-10 flex flex-col justify-between portfolio-card-container ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8 text-white portfolio-card-icon"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M13.4142 3.82843C12.6332 3.04738 11.3668 3.04738 10.5858 3.82843L9.91421 4.5L11.482 6.06774C11.6472 6.02356 11.8208 6 12 6C13.1046 6 14 6.89543 14 8C14 8.17916 13.9764 8.35282 13.9323 8.51804L15.982 10.5677C16.1472 10.5236 16.3208 10.5 16.5 10.5C17.6046 10.5 18.5 11.3954 18.5 12.5C18.5 13.6046 17.6046 14.5 16.5 14.5C15.3954 14.5 14.5 13.6046 14.5 12.5C14.5 12.3208 14.5236 12.1472 14.5677 11.982L13 10.4142V15.2676C13.5978 15.6134 14 16.2597 14 17C14 18.1046 13.1046 19 12 19C10.8954 19 10 18.1046 10 17C10 16.2597 10.4022 15.6134 11 15.2676V9.73244C10.4022 9.38663 10 8.74028 10 8C10 7.82084 10.0236 7.64718 10.0677 7.48196L8.5 5.91421L3.82843 10.5858C3.04738 11.3668 3.04738 12.6332 3.82843 13.4142L10.5858 20.1716C11.3668 20.9526 12.6332 20.9526 13.4142 20.1716L20.1716 13.4142C20.9526 12.6332 20.9526 11.3668 20.1716 10.5858L13.4142 3.82843ZM9.17157 2.41421C10.7337 0.852115 13.2663 0.852119 14.8284 2.41422L21.5858 9.17157C23.1479 10.7337 23.1479 13.2663 21.5858 14.8284L14.8284 21.5858C13.2663 23.1479 10.7337 23.1479 9.17157 21.5858L2.41421 14.8284C0.852115 13.2663 0.852119 10.7337 2.41422 9.17157L9.17157 2.41421Z"
                                    fill="currentColor"
                                />
                            </svg>
                            <h3 className="text-2xl portfolio-card-title">
                                Git
                            </h3>
                            <p className="text-white/50">
                                {`I'm experienced in handling branches, resolving
                                merge conflicts, and ensuring smooth integration
                                of features in team environments.`}
                            </p>
                        </div>
                    </div>
                )}
                {skillIndex === 3 && (
                    <div className="w-full h-[180px] tablet:h-[250px] flex flex-wrap gap-5 tablet:gap-0 tablet:flex-nowrap tablet:justify-between z-40">
                        <div className="bg-outerSpace w-[220px] laptop:w-[300px] desktop:w-[350px] h-full rounded-lg p-5 tablet:p-10 flex flex-col justify-between portfolio-card-container ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8 text-white/ portfolio-card-icon bg-none"
                                viewBox="0 0 512 512"
                                fill="currentColor"
                            >
                                <g>
                                    <path d="M256.495,96.434c26.632,0,48.213-21.597,48.213-48.205C304.708,21.58,283.128,0,256.495,0   c-26.65,0-48.222,21.58-48.222,48.229C208.274,74.837,229.846,96.434,256.495,96.434z" />
                                    <path d="M298.267,119.279h-42.271h-42.271c-23.362,0-48.779,25.418-48.779,48.788v162.058   c0,11.685,9.463,21.156,21.148,21.156c5.743,0,0,0,14.756,0l8.048,138.206c0,12.434,10.078,22.513,22.513,22.513   c5.244,0,14.923,0,24.585,0c9.671,0,19.35,0,24.593,0c12.434,0,22.513-10.078,22.513-22.513l8.04-138.206   c14.764,0,9.013,0,14.764,0c11.676,0,21.148-9.471,21.148-21.156V168.067C347.054,144.697,321.636,119.279,298.267,119.279z" />
                                    <path d="M104.141,149.083c23.262,0,42.105-18.85,42.105-42.104c0-23.262-18.843-42.112-42.105-42.112   c-23.27,0-42.104,18.851-42.104,42.112C62.037,130.232,80.871,149.083,104.141,149.083z" />
                                    <path d="M408.716,149.083c23.27,0,42.104-18.85,42.104-42.104c0-23.262-18.834-42.112-42.104-42.112   c-23.253,0-42.104,18.851-42.104,42.112C366.612,130.232,385.463,149.083,408.716,149.083z" />
                                    <path d="M137.257,169.024h-33.548h-36.92c-20.398,0-42.595,22.213-42.595,42.612v141.526   c0,10.212,8.264,18.476,18.468,18.476c5.018,0,0,0,12.884,0l7.024,120.704c0,10.852,8.805,19.658,19.666,19.658   c4.577,0,13.024,0,21.473,0c8.439,0,16.895,0,21.472,0c10.861,0,19.666-8.805,19.666-19.658l7.016-120.704v-6.849   c-8.98-8.856-14.606-21.082-14.606-34.664V169.024z" />
                                    <path d="M445.211,169.024h-36.928h-33.54v161.101c0,13.582-5.626,25.808-14.615,34.664v6.849l7.017,120.704   c0,10.852,8.814,19.658,19.674,19.658c4.578,0,13.025,0,21.464,0c8.456,0,16.904,0,21.481,0c10.862,0,19.659-8.805,19.659-19.658   l7.032-120.704c12.883,0,7.865,0,12.883,0c10.204,0,18.468-8.265,18.468-18.476V211.636   C487.806,191.237,465.61,169.024,445.211,169.024z" />
                                </g>
                            </svg>

                            <h3 className="text-2xl portfolio-card-title">
                                Collaboration
                            </h3>
                            <p className="text-white/50">
                                Worked closely with designers and developers to
                                implement features efficiently and ensure a
                                smooth development process.
                            </p>
                        </div>
                        <div className="bg-outerSpace w-[220px] laptop:w-[300px] desktop:w-[350px] h-full rounded-lg p-5 tablet:p-10 flex flex-col justify-between portfolio-card-container ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="w-8 h-8 text-white portfolio-card-icon bg-none"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12,7C7.582,7,4,6.105,4,5s3.582-2,8-2,8,.9,8,2S16.418,7,12,7ZM4,19c0,1.105,3.582,2,8,2s8-.895,8-2V15.19c-2.435.916-6.419,1.018-8,1.018s-5.565-.1-8-1.018Zm0-6c.593.445,3.387,1.208,8,1.208s7.407-.763,8-1.208V7.7C17.845,8.78,14.4,9,12,9S6.155,8.78,4,7.7Z" />
                            </svg>
                            <h3 className="text-2xl portfolio-card-title ">
                                Database
                            </h3>
                            <p className="text-white/50">
                                Experienced with SQL databases, I design
                                efficient schemas and handle data migrations to
                                support robust application features.
                            </p>
                        </div>
                        <div className="bg-outerSpace w-[220px] laptop:w-[300px] desktop:w-[350px] h-full rounded-lg p-5 tablet:p-10 flex flex-col justify-between portfolio-card-container ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="w-8 h-8 text-white portfolio-card-icon bg-none"
                                version="1.1"
                                viewBox="0 0 512 512"
                            >
                                <g>
                                    <g>
                                        <path d="M434.863,126.093V77.137h-48.956V0h-33.391v77.137h-42.083V0h-33.391v77.137h-42.083V0h-33.391v77.137h-42.083V0h-33.391    v77.137H77.137v48.956H0v33.391h77.137v42.083H0v33.391h77.137v42.083H0v33.391h77.137v42.083H0v33.391h77.137v48.956h48.956V512    h33.391v-77.137h42.083V512h33.391v-77.137h42.083V512h33.391v-77.137h42.083V512h33.391v-77.137h48.956v-48.956H512v-33.391    h-77.137v-42.083H512v-33.391h-77.137v-42.083H512v-33.391h-77.137v-42.083H512v-33.39H434.863z M375.773,282.469    c0,23.125-14.251,42.974-34.428,51.253c-1.38,26.928-23.721,48.411-50.986,48.411c-13.221,0-25.283-5.052-34.36-13.325    c-9.077,8.273-21.139,13.325-34.36,13.325c-27.265,0-49.606-21.483-50.986-48.411c-20.177-8.28-34.428-28.129-34.428-51.253    c0-9.366,2.351-18.428,6.742-26.478c-4.296-7.867-6.742-16.883-6.742-26.459c0-22.913,14.194-42.903,34.426-51.239    c1.373-26.935,23.718-48.426,50.987-48.426c13.221,0,25.283,5.052,34.36,13.325c9.077-8.273,21.139-13.325,34.36-13.325    c27.27,0,49.615,21.491,50.987,48.426c20.234,8.336,34.426,28.326,34.426,51.239c0,9.577-2.445,18.593-6.742,26.459    C373.423,264.042,375.773,273.104,375.773,282.469z" />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M221.64,163.258c-9.739,0-17.664,7.924-17.664,17.664c0,7.327,4.606,13.978,11.461,16.549l-11.727,31.264    c-9.613-3.606-17.688-9.991-23.463-18.021c-6.38,3.879-10.631,10.911-10.631,18.817c0,12.127,9.866,21.993,21.992,21.993v33.391    c-7.773,0-15.174-1.617-21.895-4.521c-0.065,0.687-0.098,1.379-0.098,2.076c0,12.127,9.865,21.992,21.992,21.992    c6.29,0,12.081-2.57,16.308-7.237l24.749,22.417c-7.484,8.263-17.258,13.992-27.914,16.604    c2.215,7.227,8.947,12.497,16.889,12.497c9.74,0,17.664-7.924,17.664-17.664V180.922    C239.304,171.182,231.381,163.258,221.64,163.258z" />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M320.391,284.915v-33.391c12.127,0,21.993-9.866,21.993-21.993c0-7.907-4.251-14.939-10.631-18.817    c-5.774,8.031-13.85,14.415-23.463,18.021l-11.727-31.264c6.855-2.571,11.461-9.222,11.461-16.549    c0-9.74-7.924-17.664-17.664-17.664c-9.74,0-17.664,7.924-17.664,17.664v150.156c0,9.74,7.924,17.664,17.664,17.664    c7.943,0,14.673-5.271,16.889-12.497c-10.656-2.612-20.43-8.341-27.914-16.604l24.749-22.417    c4.226,4.667,10.018,7.237,16.307,7.237c12.127,0,21.993-9.866,21.993-21.992c0-0.697-0.033-1.389-0.098-2.076    C335.565,283.297,328.164,284.915,320.391,284.915z" />
                                    </g>
                                </g>
                            </svg>
                            <h3 className="text-2xl portfolio-card-title">
                                AI
                            </h3>
                            <p className="text-white/50">
                                I’m currently learning how to implement machine
                                learning models using PyTorch and TensorFlow.
                            </p>
                        </div>
                        <div className="bg-outerSpace w-[220px] laptop:w-[300px] desktop:w-[350px] h-full rounded-lg p-5 tablet:p-10 flex flex-col justify-between portfolio-card-container ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8 text-white portfolio-card-icon"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M22 12C22 14.7578 20.8836 17.2549 19.0782 19.064M2 12C2 9.235 3.12222 6.73208 4.93603 4.92188M19.1414 5.00003C19.987 5.86254 20.6775 6.87757 21.1679 8.00003M5 19.1415C4.08988 18.2493 3.34958 17.1845 2.83209 16"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M16.2849 8.04397C17.3458 9.05877 18 10.4488 18 11.9822C18 13.5338 17.3302 14.9386 16.2469 15.9564M7.8 16C6.68918 14.9789 6 13.556 6 11.9822C6 10.4266 6.67333 9.01843 7.76162 8"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M13.6563 10.4511C14.5521 11.1088 15 11.4376 15 12C15 12.5624 14.5521 12.8912 13.6563 13.5489C13.4091 13.7304 13.1638 13.9014 12.9384 14.0438C12.7407 14.1688 12.5168 14.298 12.2849 14.4249C11.3913 14.914 10.9444 15.1586 10.5437 14.8878C10.1429 14.617 10.1065 14.0502 10.0337 12.9166C10.0131 12.596 10 12.2817 10 12C10 11.7183 10.0131 11.404 10.0337 11.0834C10.1065 9.94977 10.1429 9.38296 10.5437 9.1122C10.9444 8.84144 11.3913 9.08599 12.2849 9.57509C12.5168 9.70198 12.7407 9.83123 12.9384 9.95619C13.1638 10.0986 13.4091 10.2696 13.6563 10.4511Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                />
                            </svg>
                            <h3 className="text-2xl portfolio-card-title">
                                Live
                            </h3>
                            <p className="text-white/50">
                                Have conducted seamless feature rollouts and
                                quick bug fixes in production environments.
                            </p>
                        </div>
                    </div>
                )}
                <div className="absolute right-5 tablet:right-16 top-[45vh] tablet:top-0 z-40 flex flex-col gap-4 text-white/50 ">
                    <button
                        onClick={() => {
                            setSkillIndex((current) => (current - 1 + 4) % 4);
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 mb-3 hover:text-white ease-in"
                            viewBox="-5 0 24 24"
                            fill="none"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8 3.41421V23C8 23.5523 7.5523 24 7 24C6.4477 24 6 23.5523 6 23V3.41421L1.70711 7.70711C1.31658 8.09763 0.68342 8.09763 0.29289 7.70711C-0.09763 7.31658 -0.09763 6.68342 0.29289 6.29289L6.2929 0.292893C6.6834 -0.0976311 7.3166 -0.0976311 7.7071 0.292893L13.7071 6.29289C14.0976 6.68342 14.0976 7.31658 13.7071 7.70711C13.3166 8.09763 12.6834 8.09763 12.2929 7.70711L8 3.41421z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                    <button
                        className={`${
                            skillIndex === 0 ? 'text-white' : ''
                        } hover:text-white ease-in`}
                        onClick={() => setSkillIndex(0)}
                    >
                        01
                    </button>
                    <button
                        className={`${
                            skillIndex === 1 ? 'text-white' : ''
                        } hover:text-white ease-in`}
                        onClick={() => setSkillIndex(1)}
                    >
                        02
                    </button>
                    <button
                        className={`${
                            skillIndex === 2 ? 'text-white' : ''
                        } hover:text-white ease-in`}
                        onClick={() => setSkillIndex(2)}
                    >
                        03
                    </button>
                    <button
                        className={`${
                            skillIndex === 3 ? 'text-white' : ''
                        } hover:text-white ease-in`}
                        onClick={() => setSkillIndex(3)}
                    >
                        04
                    </button>
                    <button
                        onClick={() => {
                            setSkillIndex((current) => (current + 1) % 4);
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 rotate-180 mt-3 hover:text-white"
                            viewBox="-5 0 24 24"
                            fill="none"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8 3.41421V23C8 23.5523 7.5523 24 7 24C6.4477 24 6 23.5523 6 23V3.41421L1.70711 7.70711C1.31658 8.09763 0.68342 8.09763 0.29289 7.70711C-0.09763 7.31658 -0.09763 6.68342 0.29289 6.29289L6.2929 0.292893C6.6834 -0.0976311 7.3166 -0.0976311 7.7071 0.292893L13.7071 6.29289C14.0976 6.68342 14.0976 7.31658 13.7071 7.70711C13.3166 8.09763 12.6834 8.09763 12.2929 7.70711L8 3.41421z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <h2 className="w-full flex justify-center mt-96 tablet:mt-20 text-5xl ">
                {' '}
                PROJECTS
            </h2>
            <div className="h-[570px] w-full relative mt-20">
                <div
                    className={`absolute flex top-0 left-1/2 -translate-x-[50%]  z-40  justify-center gap-[50px] w-[2500px]`}
                    style={{
                        transform: `translateX(-50%) translateX(${translateX}px)`,
                        transition: 'transform 0.5s ease',
                    }}
                >
                    {/* 0 */}
                    <div
                        className={` bg-outerSpace w-[350px] h-[570px] rounded-xl p-3 flex flex-col justify-between cursor-pointer ${
                            projectIndex === 0
                                ? 'scale-100 opacity-100'
                                : 'scale-90 opacity-70'
                        } ease-in duration-100 shadow-lg`}
                        onClick={() => setProjectIndex(0)}
                        style={
                            projectIndex === 0
                                ? {}
                                : {
                                      filter: 'grayscale(0.3)',
                                  }
                        }
                    >
                        <div className="h-[50%] bg-white w-full rounded-lg flex-shrink-0"></div>

                        <h2 className="text-3xl mt-5">Portfolio</h2>
                        <div className="flex gap-2">
                            <div className="bg-stevenBlue rounded-2xl px-2 text-xs flex justify-center items-center ">
                                Javascript
                            </div>
                            <div className="border-2  rounded-2xl px-2 text-xs flex justify-center items-center ">
                                Blender
                            </div>
                            <div className="border-2  rounded-2xl px-2 text-xs flex justify-center items-center ">
                                R3F
                            </div>
                            <div className="border-2  rounded-2xl px-2 text-xs flex justify-center items-center ">
                                Tailwind CSS
                            </div>
                        </div>
                        <p className="h-[30%] mt-5">
                            Steven-Anderson is an 80s inspired 3D drifting game
                            all custom modeled and built with React Three Fiber.
                        </p>

                        <div className="w-full flex gap-2 mt-2 ">
                            <button className="bg-gray-500 rounded-lg p-2 hover:bg-opacity-70">
                                <a
                                    href="https://github.com/StevenBradleyA/steven-anderson"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-8 h-8"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M11 16L13 8"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M17 15L19.6961 12.3039V12.3039C19.8639 12.1361 19.8639 11.8639 19.6961 11.6961V11.6961L17 9"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M7 9L4.32151 11.6785V11.6785C4.14394 11.8561 4.14394 12.1439 4.32151 12.3215V12.3215L7 15"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                            </button>
                            <button className="bg-stevenBlue w-full rounded-lg hover:bg-opacity-70 ">
                                <a
                                    href="https://www.steven-anderson.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Live View
                                </a>
                            </button>
                        </div>
                    </div>
                    {/* end 0 */}
                    {/* 1 */}
                    <div
                        className={` bg-outerSpace w-[350px] h-[570px] rounded-xl p-3 flex flex-col justify-between cursor-pointer ${
                            projectIndex === 1
                                ? 'scale-100 opacity-100'
                                : 'scale-90 opacity-70'
                        } ease-in duration-100 shadow-lg`}
                        onClick={() => setProjectIndex(1)}
                        style={
                            projectIndex === 1
                                ? {}
                                : {
                                      filter: 'grayscale(0.3)',
                                  }
                        }
                    >
                        <div className="h-[50%] bg-white w-full rounded-lg flex-shrink-0"></div>

                        <h2 className="text-3xl mt-5">Genevieve</h2>
                        <div className="flex gap-2">
                            <div className="bg-stevenBlue rounded-2xl px-2 text-xs flex justify-center items-center ">
                                TypeScript
                            </div>
                            <div className="border-2  rounded-2xl px-2 text-xs flex justify-center items-center ">
                                CSS
                            </div>
                            <div className="border-2  rounded-2xl px-2 text-xs flex justify-center items-center ">
                                Next.js
                            </div>
                            <div className="border-2  rounded-2xl px-2 text-xs flex justify-center items-center ">
                                Three.js
                            </div>
                        </div>
                        <p className="h-[30%] mt-5">
                            Genevieveclare.hair is a full booking site for a
                            Stylist that includes reviews, pricing, showcase,
                            and complex admin features.
                        </p>

                        <div className="w-full flex gap-2 mt-2 ">
                            <button className="bg-gray-500 rounded-lg p-2 hover:bg-opacity-70">
                                <a
                                    href="https://github.com/StevenBradleyA/genevieve-clare-hair"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-8 h-8"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M11 16L13 8"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M17 15L19.6961 12.3039V12.3039C19.8639 12.1361 19.8639 11.8639 19.6961 11.6961V11.6961L17 9"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M7 9L4.32151 11.6785V11.6785C4.14394 11.8561 4.14394 12.1439 4.32151 12.3215V12.3215L7 15"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                            </button>
                            <button className="bg-stevenBlue w-full rounded-lg hover:bg-opacity-70">
                                <a
                                    href="https://www.genevieveclare.hair/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Live View
                                </a>
                            </button>
                        </div>
                    </div>
                    {/* end 1 */}
                    {/* 2 */}
                    <div
                        className={` bg-outerSpace w-[350px] h-[570px] rounded-xl p-3 flex flex-col justify-between cursor-pointer ${
                            projectIndex === 2
                                ? 'scale-100 opacity-100'
                                : 'scale-90 opacity-70'
                        } ease-in duration-100 shadow-lg`}
                        onClick={() => setProjectIndex(2)}
                        style={
                            projectIndex === 2
                                ? {}
                                : {
                                      filter: 'grayscale(0.3)',
                                  }
                        }
                    >
                        <div className="h-[50%] bg-white w-full rounded-lg flex-shrink-0"></div>

                        <h2 className="text-3xl mt-5">Keeby</h2>
                        <div className="flex gap-2">
                            <div className="bg-stevenBlue rounded-2xl px-2 text-xs flex justify-center items-center ">
                                TypeScript
                            </div>
                            <div className="border-2  rounded-2xl px-2 text-xs flex justify-center items-center ">
                                Next.js
                            </div>
                            <div className="border-2  rounded-2xl px-2 text-xs flex justify-center items-center ">
                                CSS
                            </div>
                            <div className="border-2  rounded-2xl px-2 text-xs flex justify-center items-center ">
                                Prisma
                            </div>
                            <div className="border-2  rounded-2xl px-2 text-xs flex justify-center items-center ">
                                tRPC
                            </div>
                        </div>
                        <p className="h-[30%] mt-5">
                            Keeby is a Next.js based typing game, mechanical
                            keyboard marketplace, social media, and shop!
                        </p>

                        <div className="w-full flex gap-2 mt-2 ">
                            <button className="bg-gray-500 rounded-lg p-2 hover:bg-opacity-70">
                                <a
                                    href="https://github.com/StevenBradleyA/keeby.live"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-8 h-8"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M11 16L13 8"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M17 15L19.6961 12.3039V12.3039C19.8639 12.1361 19.8639 11.8639 19.6961 11.6961V11.6961L17 9"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M7 9L4.32151 11.6785V11.6785C4.14394 11.8561 4.14394 12.1439 4.32151 12.3215V12.3215L7 15"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                            </button>
                            <button className="bg-stevenBlue w-full rounded-lg hover:bg-opacity-70">
                                <a
                                    href="https://www.keeby.live/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Live View
                                </a>
                            </button>
                        </div>
                    </div>
                    {/* end 2 */}

                    {/* 3 */}
                    <div
                        className={` bg-outerSpace w-[350px] h-[570px] rounded-xl p-3 flex flex-col justify-between cursor-pointer ${
                            projectIndex === 3
                                ? 'scale-100 opacity-100'
                                : 'scale-90 opacity-70'
                        } ease-in duration-100 shadow-lg`}
                        onClick={() => setProjectIndex(3)}
                        style={
                            projectIndex === 3
                                ? {}
                                : {
                                      filter: 'grayscale(0.3)',
                                  }
                        }
                    >
                        <div className="h-[50%] bg-white w-full rounded-lg flex-shrink-0"></div>

                        <h2 className="text-3xl mt-5">Banter</h2>
                        <div className="flex gap-2">
                            <div className="bg-stevenBlue rounded-2xl px-2 text-xs flex justify-center items-center ">
                                Js
                            </div>
                            <div className="bg-stevenBlue rounded-2xl px-2 text-xs flex justify-center items-center ">
                                Python
                            </div>
                            <div className="border-2  rounded-2xl px-2 text-xs flex justify-center items-center ">
                                React
                            </div>
                            <div className="border-2  rounded-2xl px-2 text-xs flex justify-center items-center ">
                                Flask
                            </div>
                            <div className="border-2  rounded-2xl px-2 text-xs flex justify-center items-center ">
                                WebSockets
                            </div>
                        </div>
                        <p className="h-[30%] mt-5">
                            Banter is a real time chat messenger built on React
                            with a Flask backend. This was an App Academy group
                            project.
                        </p>

                        <div className="w-full flex gap-2 mt-2 ">
                            <button className="bg-gray-500 rounded-lg p-2 hover:bg-opacity-70">
                                <a
                                    href="https://github.com/cleggie66/banter"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-8 h-8"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M11 16L13 8"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M17 15L19.6961 12.3039V12.3039C19.8639 12.1361 19.8639 11.8639 19.6961 11.6961V11.6961L17 9"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M7 9L4.32151 11.6785V11.6785C4.14394 11.8561 4.14394 12.1439 4.32151 12.3215V12.3215L7 15"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                            </button>
                            <button className="bg-stevenBlue w-full rounded-lg hover:bg-opacity-70">
                                <a
                                    href="https://bit-of-banter.onrender.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Live View
                                </a>
                            </button>
                        </div>
                    </div>
                    {/* end 3 */}
                    {/* 4 */}
                    <div
                        className={` bg-outerSpace w-[350px] h-[570px] rounded-xl p-3 flex flex-col justify-between cursor-pointer ${
                            projectIndex === 4
                                ? 'scale-100 opacity-100'
                                : 'scale-90 opacity-70'
                        } ease-in duration-100 shadow-lg`}
                        onClick={() => setProjectIndex(4)}
                        style={
                            projectIndex === 4
                                ? {}
                                : {
                                      filter: 'grayscale(0.3)',
                                  }
                        }
                    >
                        <div className="h-[50%] bg-white w-full rounded-lg flex-shrink-0"></div>

                        <h2 className="text-3xl mt-5">Coming Soon</h2>
                        <div className="flex gap-2">
                            <div className="bg-stevenBlue rounded-2xl px-2 text-xs flex justify-center items-center ">
                                TypeScript
                            </div>
                            <div className="bg-stevenBlue rounded-2xl px-2 text-xs flex justify-center items-center ">
                                Python
                            </div>
                            <div className="border-2  rounded-2xl px-2 text-xs flex justify-center items-center ">
                                Next.js
                            </div>
                            <div className="border-2  rounded-2xl px-2 text-xs flex justify-center items-center ">
                                CSS
                            </div>
                        </div>
                        <p className="h-[30%] mt-5">
                            Currently working on some cool machine learning
                            projects will be here shortly!
                        </p>

                        <div className="w-full flex gap-2 mt-2 ">
                            <button className="bg-gray-500 rounded-lg p-2 hover:bg-opacity-70">
                                <a
                                    href="https://github.com/StevenBradleyA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-8 h-8"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M11 16L13 8"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M17 15L19.6961 12.3039V12.3039C19.8639 12.1361 19.8639 11.8639 19.6961 11.6961V11.6961L17 9"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M7 9L4.32151 11.6785V11.6785C4.14394 11.8561 4.14394 12.1439 4.32151 12.3215V12.3215L7 15"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                            </button>
                            <button className="bg-stevenBlue w-full rounded-lg hover:bg-opacity-70">
                                Live View
                            </button>
                        </div>
                    </div>
                    {/* end 4 */}
                </div>
            </div>

            <div className="flex gap-10 w-full justify-center mb-96 mt-5 ">
                <button
                    className=" z-50"
                    onClick={() => {
                        if (projectIndex > 0) {
                            setProjectIndex((current) => current - 1);
                        }
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-12 h-12  p-1 rounded-full ${
                            projectIndex > 0 ? 'bg-stevenBlue' : 'bg-gray-500'
                        } rotate-180 hover:bg-opacity-70`}
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M6 12H18M18 12L13 7M18 12L13 17"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
                <button
                    className=" z-50"
                    onClick={() => {
                        if (projectIndex < 4) {
                            setProjectIndex((current) => current + 1);
                        }
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-12 h-12  p-1 rounded-full ${
                            projectIndex === 4 ? 'bg-gray-400' : 'bg-stevenBlue'
                        } hover:bg-opacity-70`}
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M6 12H18M18 12L13 7M18 12L13 17"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
            {isMobile ? <MobileFooter /> : <Footer />}
        </div>
    );
}
