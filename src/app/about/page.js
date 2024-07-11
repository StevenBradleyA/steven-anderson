'use client';
import NightSky from '@/components/Background/nightSky';
import Footer from '@/components/Footer/footer';
import { useState, useEffect } from 'react';

export default function AboutPage() {
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
        <div className="w-full min-h-screen flex flex-col   mt-60 z-50">
            <NightSky />

            <div className="px-40">
                <h1 className="text-5xl font-orbitron z-40 ">
                    Full-Stack Web Developer
                </h1>
                <h2 className="text-9xl mt-5 z-40">Steven</h2>
                <h2 className="text-9xl z-40">Anderson</h2>

                <p className="border-l-2 border-white px-5 w-96 text-3xl mt-10 z-40">
                    {' '}
                    I'm a full-stack web developer from the Seattle area.{' '}
                </p>
            </div>

            <div className="mt-60  flex w-full justify-between px-40  relative ">
                <h2 className="text-6xl font-orbitron">Portfolio</h2>
                {skillIndex === 0 && (
                    <ul className="flex gap-x-5 gap-y-3 w-96 flex-wrap text-lg ">
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
                    <ul className="flex gap-x-5 gap-y-3 w-[60rem] flex-wrap text-lg ">
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
                    <ul className="flex gap-x-5 gap-y-3 w-[40rem] flex-wrap text-lg ">
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
                    <ul className="flex gap-x-5 gap-y-3 w-[55rem] flex-wrap text-lg ">
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
            <div className="flex w-full justify-between  px-40 relative text-white/50 mt-20 ">
                <div className="w-full h-[250px] flex justify-between z-40">
                    <div className="bg-outerSpace w-[150px] laptop:w-[250px] desktop:w-[350px] h-full rounded-lg"></div>
                    <div className="bg-outerSpace w-[150px] laptop:w-[250px] desktop:w-[350px] h-full rounded-lg"></div>
                    <div className="bg-outerSpace w-[150px] laptop:w-[250px] desktop:w-[350px] h-full rounded-lg"></div>
                    <div className="bg-outerSpace w-[150px] laptop:w-[250px] desktop:w-[350px] h-full rounded-lg"></div>
                </div>
                <div className="absolute right-16 top-0 z-40 flex flex-col gap-4 ">
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

            <div className="h-[570px] w-full relative mt-60">
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

                        <h2 className="text-3xl mt-5">Keeby</h2>
                        <div className="flex gap-2">
                            <div className="bg-stevenBlue rounded-2xl px-2 text-xs flex justify-center items-center ">
                                TypeScript
                            </div>
                            <div className="border-2  rounded-2xl px-2 text-xs flex justify-center items-center ">
                                HTML
                            </div>
                            <div className="border-2  rounded-2xl px-2 text-xs flex justify-center items-center ">
                                CSS
                            </div>
                        </div>
                        <p className="h-[30%] mt-5">
                            Keeby is a mechanical keyboard marketplace, typing
                            game, and social media!
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
                            <button className="bg-stevenBlue w-full rounded-lg hover:bg-opacity-70 ">
                                Live View
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

                        <h2 className="text-3xl mt-5">Keeby</h2>
                        <div className="flex gap-2">
                            <div className="bg-stevenBlue rounded-2xl px-2 text-xs flex justify-center items-center ">
                                TypeScript
                            </div>
                            <div className="border-2  rounded-2xl px-2 text-xs flex justify-center items-center ">
                                HTML
                            </div>
                            <div className="border-2  rounded-2xl px-2 text-xs flex justify-center items-center ">
                                CSS
                            </div>
                        </div>
                        <p className="h-[30%] mt-5">
                            Keeby is a mechanical keyboard marketplace, typing
                            game, and social media!
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
                                    href="https://www.keeby.live"
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
                            Keeby is a mechanical keyboard marketplace, typing
                            game, and social media.
                        </p>

                        <div className="w-full flex gap-2 mt-2 ">
                            <button className="bg-gray-500 rounded-lg p-2 hover:bg-opacity-70">
                                <a
                                    href="https://www.keeby.live"
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

                        <h2 className="text-3xl mt-5">Keeby</h2>
                        <div className="flex gap-2">
                            <div className="bg-stevenBlue rounded-2xl px-2 text-xs flex justify-center items-center ">
                                TypeScript
                            </div>
                            <div className="border-2  rounded-2xl px-2 text-xs flex justify-center items-center ">
                                HTML
                            </div>
                            <div className="border-2  rounded-2xl px-2 text-xs flex justify-center items-center ">
                                CSS
                            </div>
                        </div>
                        <p className="h-[30%] mt-5">
                            Keeby is a mechanical keyboard marketplace, typing
                            game, and social media!
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

                        <h2 className="text-3xl mt-5">Keeby</h2>
                        <div className="flex gap-2">
                            <div className="bg-stevenBlue rounded-2xl px-2 text-xs flex justify-center items-center ">
                                TypeScript
                            </div>
                            <div className="border-2  rounded-2xl px-2 text-xs flex justify-center items-center ">
                                HTML
                            </div>
                            <div className="border-2  rounded-2xl px-2 text-xs flex justify-center items-center ">
                                CSS
                            </div>
                        </div>
                        <p className="h-[30%] mt-5">
                            Keeby is a mechanical keyboard marketplace, typing
                            game, and social media!
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
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
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
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </button>
            </div>
            <Footer />
        </div>
    );
}
