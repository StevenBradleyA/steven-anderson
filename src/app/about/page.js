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

            <div className="px-5 laptop:px-10 desktop:px-40 w-full tablet:mt-40 desktop:mt-60">
                <div className="flex w-full gap-20 justify-between relative ">
                    <h2 className="text-6xl font-orbitron">Portfolio</h2>
                    {skillIndex === 0 && (
                        <ul className="flex gap-x-5 gap-y-3 w-96 flex-wrap text-lg absolute right-0 top-0">
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
                        <ul className="flex gap-x-5 gap-y-3 w-[45rem] desktop:w-[60rem] absolute top-0 right-0 flex-wrap text-lg ">
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
                        <ul className="flex gap-x-5 gap-y-3 absolute top-0 right-0 w-[40rem] flex-wrap text-lg ">
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
                        <ul className="flex gap-x-5 gap-y-3  w-[45rem] desktop:w-[55rem] absolute top-0 right-0 flex-wrap text-lg ">
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
            <div className="flex w-full justify-between px-5 laptop:px-10 desktop:px-40 relative text-white mt-28 text-sm ">
                {skillIndex === 0 && (
                    <div className="w-full h-[250px] flex justify-between z-40">
                        <div className="bg-outerSpace w-[150px] laptop:w-[300px] desktop:w-[350px] h-full rounded-lg p-10 flex flex-col justify-between portfolio-card-container ">
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

                            <h3 className="text-2xl portfolio-card-title">
                                TypeScript
                            </h3>
                            <p className="text-white/50">
                                Safer, more predicatble code is why I rely on
                                TypeScript for my front-end development.
                            </p>
                        </div>
                        <div className="bg-outerSpace w-[150px] laptop:w-[300px] desktop:w-[350px] h-full rounded-lg p-10 flex flex-col justify-between portfolio-card-container">
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
                        <div className="bg-outerSpace w-[150px] laptop:w-[300px] desktop:w-[350px] h-full rounded-lg p-10 flex flex-col justify-between portfolio-card-container">
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
                        <div className="bg-outerSpace w-[150px] laptop:w-[300px] desktop:w-[350px] h-full rounded-lg p-10 flex flex-col justify-between portfolio-card-container">
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
                    <div className="w-full h-[250px] flex justify-between z-40">
                        <div className="bg-outerSpace w-[150px] laptop:w-[300px] desktop:w-[350px] h-full rounded-lg p-10 flex flex-col justify-between portfolio-card-container ">
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

                            <h3 className="text-2xl portfolio-card-title">
                                TypeScript
                            </h3>
                            <p className="text-white/50">
                                Safer, more predicatble code is why I rely on
                                TypeScript for my front-end development.
                            </p>
                        </div>
                        <div className="bg-outerSpace w-[150px] laptop:w-[300px] desktop:w-[350px] h-full rounded-lg p-10 flex flex-col justify-between portfolio-card-container">
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
                        <div className="bg-outerSpace w-[150px] laptop:w-[300px] desktop:w-[350px] h-full rounded-lg p-10 flex flex-col justify-between portfolio-card-container">
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
                        <div className="bg-outerSpace w-[150px] laptop:w-[300px] desktop:w-[350px] h-full rounded-lg p-10 flex flex-col justify-between portfolio-card-container">
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
                {skillIndex === 2 && (
                    <div className="w-full h-[250px] flex justify-between z-40">
                        <div className="bg-outerSpace w-[150px] laptop:w-[300px] desktop:w-[350px] h-full rounded-lg p-10 flex flex-col justify-between portfolio-card-container ">
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

                            <h3 className="text-2xl portfolio-card-title">
                                TypeScript
                            </h3>
                            <p className="text-white/50">
                                Safer, more predicatble code is why I rely on
                                TypeScript for my front-end development.
                            </p>
                        </div>
                        <div className="bg-outerSpace w-[150px] laptop:w-[300px] desktop:w-[350px] h-full rounded-lg p-10 flex flex-col justify-between portfolio-card-container">
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
                        <div className="bg-outerSpace w-[150px] laptop:w-[300px] desktop:w-[350px] h-full rounded-lg p-10 flex flex-col justify-between portfolio-card-container">
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
                        <div className="bg-outerSpace w-[150px] laptop:w-[300px] desktop:w-[350px] h-full rounded-lg p-10 flex flex-col justify-between portfolio-card-container">
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
                {skillIndex === 3 && (
                    <div className="w-full h-[250px] flex justify-between z-40">
                        <div className="bg-outerSpace w-[150px] laptop:w-[300px] desktop:w-[350px] h-full rounded-lg p-10 flex flex-col justify-between portfolio-card-container ">
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

                            <h3 className="text-2xl portfolio-card-title">
                                TypeScript
                            </h3>
                            <p className="text-white/50">
                                Safer, more predicatble code is why I rely on
                                TypeScript for my front-end development.
                            </p>
                        </div>
                        <div className="bg-outerSpace w-[150px] laptop:w-[300px] desktop:w-[350px] h-full rounded-lg p-10 flex flex-col justify-between portfolio-card-container">
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
                        <div className="bg-outerSpace w-[150px] laptop:w-[300px] desktop:w-[350px] h-full rounded-lg p-10 flex flex-col justify-between portfolio-card-container">
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
                        <div className="bg-outerSpace w-[150px] laptop:w-[300px] desktop:w-[350px] h-full rounded-lg p-10 flex flex-col justify-between portfolio-card-container">
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
                <div className="absolute right-16 top-0 z-40 flex flex-col gap-4 text-white/50 ">
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
            <h2 className="w-full flex justify-center mt-20 text-5xl ">
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
                                <a
                                    href="https://github.com/StevenBradleyA"
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
