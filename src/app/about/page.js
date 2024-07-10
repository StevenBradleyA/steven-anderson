'use client';
import NightSky from '@/components/Background/nightSky';
import { useState } from 'react';

export default function AboutPage() {
    const [projectIndex, setProjectIndex] = useState(2);

    console.log(projectIndex);
    return (
        <div className="w-full min-h-screen flex flex-col px-40  mt-60 z-50">
            <NightSky />
            {/* <div className=" mt-72 w-1/2 rounded-lg bg-outerSpace bg-opacity-30  p-5 h-96 z-10">
                about
            </div> */}

            <h1 className="text-5xl font-orbitron z-40">
                Full-Stack Web Developer
            </h1>
            <h2 className="text-9xl mt-5 z-40">Steven</h2>
            <h2 className="text-9xl z-40">Anderson</h2>

            <p className="border-l-2 border-white px-5 w-96 text-3xl mt-10 z-40">
                {' '}
                I'm a full-stack web developer from the Seattle area.{' '}
            </p>

            <div className="mt-60 text-5xl font-orbitron">Skills</div>

            <div className="mt-60 text-5xl font-orbitron z-40">
                Some things I've Built
            </div>
            <div className="h-[570px] w-full relative mt-96">
                <div
                    className={`absolute flex top-0 left-1/2 -translate-x-[35%]  z-40 bg-white/20 justify-center gap-10 w-[2500px]`}
                >
                    {/* 1 */}
                    <div className=" bg-outerSpace w-[350px] h-[570px] rounded-xl p-3 flex flex-col justify-between">
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
                            <button className="bg-gray-500 rounded-lg p-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-8 h-8 "
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                            <button className="bg-stevenBlue w-full rounded-lg ">
                                Live View
                            </button>
                        </div>
                    </div>
                    {/* end 1 */}
                    {/* 2 */}
                    <div className=" bg-outerSpace w-[350px] h-[570px] rounded-xl p-3 flex flex-col justify-between">
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
                            <button className="bg-gray-500 rounded-lg p-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-8 h-8 "
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                            <button className="bg-stevenBlue w-full rounded-lg ">
                                Live View
                            </button>
                        </div>
                    </div>
                    {/* end 2 */}
                    {/* 3 */}
                    <div className=" bg-outerSpace w-[350px] h-[570px] rounded-xl p-3 flex flex-col justify-between">
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
                            <button className="bg-gray-500 rounded-lg p-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-8 h-8 "
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                            <button className="bg-stevenBlue w-full rounded-lg ">
                                Live View
                            </button>
                        </div>
                    </div>
                    {/* end 3 */}

                    {/* 4 */}
                    <div className=" bg-outerSpace w-[350px] h-[570px] rounded-xl p-3 flex flex-col justify-between">
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
                            <button className="bg-gray-500 rounded-lg p-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-8 h-8 "
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                            <button className="bg-stevenBlue w-full rounded-lg ">
                                Live View
                            </button>
                        </div>
                    </div>
                    {/* end 4 */}
                    {/* 5 */}
                    <div className=" bg-outerSpace w-[350px] h-[570px] rounded-xl p-3 flex flex-col justify-between">
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
                            <button className="bg-gray-500 rounded-lg p-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-8 h-8 "
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                            <button className="bg-stevenBlue w-full rounded-lg ">
                                Live View
                            </button>
                        </div>
                    </div>
                    {/* end 5 */}
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
                            projectIndex > 0 ? 'bg-stevenBlue' : 'bg-gray-300'
                        } rotate-180`}
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
                        } `}
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
        </div>
    );
}
