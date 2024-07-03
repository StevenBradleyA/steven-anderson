'use client';
import NightSky from '@/components/Background/nightSky';
import { useState } from 'react';
import Link from 'next/link';

export default function NotFound() {
    const script = [
        'Seems you got lost, can I take you back?',
        'Wow, I mean okay. Just stay here.',
        "Like I'm not even mad about it.",
        'But seriously, we should find our way back right?',
        "The path isn't always clear, is it?",
        'Hmmmmmmmmmm...',
        'Forgive me',
        'I was absorbed in thought...',
        'Sometimes getting lost is part of the journey.',
        "It's often in the moments of being lost that we find our true direction.",
        'Do you feel ready to continue?',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="night-sky fixed top-0 left-0 right-0 bottom-0 text-white">
            <NightSky />
            <div className="relative z-10 h-[88vh] w-full overflow-hidden mt-32">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2"
                    version="1.1"
                    viewBox="0 0 512 512"
                >
                    <g>
                        <g>
                            <path
                                fill="#F0EEDB"
                                d="M90.822,60.408c105.574-92.296,264.984-76,357.28,29.574s84.138,262.286-21.436,354.583    S158.688,529.26,66.392,423.687S-14.752,152.704,90.822,60.408z"
                            />
                            <path
                                fill="#EBE9D2"
                                d="M107.702,89.331c99.918-87.352,248.823-74.176,333.823,23.051s75.389,243.385-24.528,330.736    c-99.918,87.352-251.733,82.319-336.733-14.909S7.784,176.683,107.702,89.331z"
                            />
                            <g>
                                <path
                                    fill="#D4D5B1"
                                    d="M244.034,141.578C226.114,178.849,181.001,192.92,143.73,175     c-37.271-17.92-53.236-61.358-35.316-98.629c17.92-37.271,62.836-54.047,100.107-36.127     C245.792,58.164,261.954,104.307,244.034,141.578z"
                                />
                                <path
                                    fill="#040000"
                                    opacity={0.06}
                                    d="M128.089,97.737c17.92-37.271,62.836-54.047,100.107-36.127     c4.127,1.984,7.995,4.316,11.586,6.943c-7.335-11.909-17.951-21.909-31.261-28.309c-37.271-17.92-82.187-1.144-100.107,36.127     c-15.805,32.873-5.247,70.539,23.036,91.267C118.965,147.179,116.792,121.234,128.089,97.737z"
                                />
                            </g>
                            <path
                                fill="#D4D5B1"
                                d="M217.126,218.456c-1.17-5.733,2.71-11.178,8.442-12.348c5.733-1.17,11.248,2.359,12.418,8.092    s-2.456,11.466-8.189,12.636C224.065,228.005,218.296,224.189,217.126,218.456z"
                            />
                            <path
                                fill="#ffffff"
                                opacity={0.5}
                                d="M363.159,97.031c-1.17-5.733,2.71-11.178,8.442-12.348s11.248,2.359,12.418,8.092    c1.17,5.733-2.456,11.466-8.189,12.636C370.097,106.581,364.328,102.764,363.159,97.031z"
                            />
                            <path
                                fill="#D4D5B1"
                                d="M282.758,398.482c8.691-7.598,21.813-6.256,29.411,2.434c7.598,8.691,6.926,21.591-1.765,29.189    c-8.691,7.598-22.06,6.972-29.658-1.719C273.149,419.697,274.067,406.08,282.758,398.482z"
                            />
                            <path
                                fill="#ffffff"
                                opacity={0.5}
                                d="M58.328,221.051c-1.17-5.733,2.71-11.178,8.442-12.348    c5.733-1.17,11.248,2.359,12.418,8.092c1.17,5.733-2.456,11.466-8.189,12.636C65.267,230.6,59.498,226.784,58.328,221.051z"
                            />
                            <path
                                fill="#D4D5B1"
                                d="M468.957,281.792c-3.725,36.65-37.257,62.1-73.907,58.374c-36.65-3.725-63.179-35.28-59.453-71.93    c3.725-36.65,36.273-64.306,72.923-60.581C445.17,211.381,472.683,245.142,468.957,281.792z"
                            />
                            <g>
                                <path
                                    fill="#D4D5B1"
                                    d="M173.243,331.228c14.631,25.328,4.867,57.296-20.461,71.927     c-25.328,14.631-57.072,6.642-71.703-18.687c-14.631-25.328-6.526-58.259,18.802-72.89     C125.209,296.946,158.611,305.899,173.243,331.228z"
                                />
                                <path
                                    fill="#D4D5B1"
                                    opacity={0.06}
                                    d="M112.82,324.421c18.464-10.666,41.211-8.787,57.856,2.82     c-15.693-22.239-46.848-29.497-70.796-15.664c-25.328,14.631-33.433,47.562-18.802,72.89c4.04,6.993,9.388,12.657,15.541,16.895     c-0.915-1.299-1.789-2.644-2.602-4.052C79.387,371.983,87.492,339.052,112.82,324.421z"
                                />
                            </g>
                            <path
                                fill="#D4D5B1"
                                opacity={0.06}
                                d="M349.708,282.184c3.725-36.65,36.272-64.306,72.923-60.581    c12.217,1.242,23.416,5.824,32.783,12.736c-11.007-14.534-27.695-24.731-46.895-26.682c-36.65-3.725-69.197,23.931-72.922,60.581    c-2.465,24.248,8.316,46.262,26.507,59.465C352.784,315.151,347.977,299.219,349.708,282.184z"
                            />
                        </g>
                        <path
                            fill="#D4D5B1"
                            opacity={0.06}
                            d="M254.816,381.8c-105.36,0-198.423-52.065-254.726-131.657   C-2.613,349.865,55.643,444.482,154.03,486.89c128.776,55.508,279.654,1.534,335.162-127.242   c15.267-35.419,21.657-72.749,20.289-109.419C453.171,329.772,360.138,381.8,254.816,381.8z"
                        />
                    </g>
                </svg>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="textWhite absolute right-[25%] top-44 z-20  h-[100px] w-[100px]"
                    fill="currentColor"
                    viewBox="0 0 128 128"
                >
                    <path d="M24.33,40.26a1,1,0,0,0,.25,0,1,1,0,0,0,.24,0A39.76,39.76,0,0,0,44.17,29l.48-.51a1,1,0,0,0,.25-.44,16.8,16.8,0,0,0-1.85-12.79A17.06,17.06,0,0,0,20.64,9a16.87,16.87,0,0,0,3.69,31.25ZM14.22,19.89a14.79,14.79,0,0,1,7.35-9.12,14.55,14.55,0,0,1,6.85-1.69,15.06,15.06,0,0,1,12.91,7.23,14.77,14.77,0,0,1,1.69,11l-.3.32A37.79,37.79,0,0,1,24.59,38.26,14.87,14.87,0,0,1,14.22,19.89Z" />
                    <path d="M37.21,24.26a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1c-.26-5.92-6.64-10.9-6.91-11.11a1,1,0,0,0-1.41.19,1,1,0,0,0,.19,1.4C31.13,14.69,37,19.27,37.21,24.26Z" />
                    <path d="M58.5,47.72a6.36,6.36,0,0,0-8.69-2.22L36.66,53.29A6.35,6.35,0,0,0,34.44,62L41,73.08A6.35,6.35,0,0,0,49.7,75.3l13.15-7.79a6.34,6.34,0,0,0,2.23-8.68Zm5.32,15.41a4.3,4.3,0,0,1-2,2.66L48.68,73.58a4.34,4.34,0,0,1-5.94-1.52l-2.46-4.14L48,63.35A1,1,0,0,0,48.35,62,1,1,0,0,0,47,61.63L39.27,66.2l-2.34-3.94,13.15-7.78a1,1,0,0,0,.35-1.37,1,1,0,0,0-1.37-.35L36,60.51A4.32,4.32,0,0,1,37.68,55l13.15-7.79a4.36,4.36,0,0,1,6,1.52l6.57,11.11A4.28,4.28,0,0,1,63.82,63.13Z" />
                    <path d="M46.53,40.38a1,1,0,0,0-1.41-.14c-6.72,5.52-11.95,6.49-12,6.5a1,1,0,0,0,.17,2l.16,0c.24,0,5.78-1,13-6.93A1,1,0,0,0,46.53,40.38Z" />
                    <path d="M55.55,58.89a3.2,3.2,0,0,0-1.12,4.37,3.16,3.16,0,0,0,2,1.47,3.08,3.08,0,0,0,.8.1,3.15,3.15,0,0,0,1.62-.45,3.22,3.22,0,0,0,1.47-1.95A3.15,3.15,0,0,0,59.93,60,3.2,3.2,0,0,0,55.55,58.89Zm2.79,3a1.16,1.16,0,0,1-.55.73,1.19,1.19,0,0,1-.9.13,1.19,1.19,0,0,1-.32-2.18,1.13,1.13,0,0,1,.61-.17,1.2,1.2,0,0,1,1.16,1.49Z" />
                    <path d="M7.3,42.19C5.12,45.84,5,49.55,6.89,52.94L17.36,70.63a52.67,52.67,0,0,0,5.26,18.58,1,1,0,0,0,.23.31L24.43,93a7,7,0,0,0,3.94,3.65,7.2,7.2,0,0,0,2.45.44,7,7,0,0,0,6.56-4.58,7,7,0,0,0,.43-2.06l4.44-2.63,15.63,26.4a6.68,6.68,0,0,0-1.09,8.17l.56,1a6.62,6.62,0,0,0,4.09,3,6.33,6.33,0,0,0,1.67.22,6.67,6.67,0,0,0,3.38-.93L78,118.83A3.57,3.57,0,0,0,79.22,114l-2.14-3.62-.21-.31-12-20.23a2.28,2.28,0,0,1-.25-1.73,2.32,2.32,0,0,1,1.06-1.41,2.3,2.3,0,0,1,3.13.81L80.76,107.6c.08.16.16.32.25.48l2.15,3.62a3.55,3.55,0,0,0,3.07,1.74A3.62,3.62,0,0,0,88,113h0l11.48-6.81A6.69,6.69,0,0,0,101.86,97l-.56-.94a6.68,6.68,0,0,0-7.68-3L78.08,66.86l4-2.39a7.14,7.14,0,0,0,3.43.9,7,7,0,0,0,5.63-11.2l-2.86-3.89h0A52.45,52.45,0,0,0,73.43,36l0,0L69,28.47a12,12,0,0,0,5.09-.78c.62-.21,1.23-.45,1.84-.69a18.24,18.24,0,0,1,4.4-1.32,8.61,8.61,0,0,1,5.58,1.21,18.17,18.17,0,0,1,2.48,1.94,13.59,13.59,0,0,0,4.46,2.94,7.44,7.44,0,0,0,2.31.37c3.79,0,7.46-2.88,9.46-6.27.36-.63.71-1.29,1.06-1.95,1.29-2.43,2.5-4.73,4.72-5.47a9.65,9.65,0,0,1,3.48-.25c.57,0,1.13.05,1.7,0,2.73,0,4.79-1.18,5.51-3a1,1,0,0,0-1.86-.72c-.49,1.26-2.23,1.74-3.69,1.76-.52,0-1,0-1.57,0a11.21,11.21,0,0,0-4.21.34c-3,1-4.5,3.89-5.85,6.44-.33.63-.66,1.26-1,1.86-2,3.39-5.86,6.2-9.4,5a11.69,11.69,0,0,1-3.78-2.55,20.82,20.82,0,0,0-2.75-2.14,10.78,10.78,0,0,0-6.88-1.49,19.75,19.75,0,0,0-4.87,1.45c-.59.23-1.18.46-1.78.66-2.46.86-4.38.94-5.86.26h0l-4-6.69c-4.43-7.47-11.34-5.75-13.83-4.81-.27-.56-.54-1.12-.86-1.66A23.35,23.35,0,0,0,18.22,4,23.13,23.13,0,0,0,9,36.32c.43.71.89,1.4,1.38,2.06A17.74,17.74,0,0,0,7.3,42.19ZM33.08,83,24,87.44A51,51,0,0,1,19.5,72l4.2-.42a1,1,0,0,0,.89-1.07,60.2,60.2,0,0,1,.31-10.4,1,1,0,0,0-.24-.79,1,1,0,0,0-.75-.33H19.75a52.67,52.67,0,0,1,1.59-6.92c1.95,1,7.08,4.26,7.19,13C28.6,70.87,32,80.13,33.08,83ZM19.48,61h3.31a62.37,62.37,0,0,0-.25,8.69L19.31,70A46.92,46.92,0,0,1,19.48,61Zm16,30.77a5,5,0,0,1-2.61,2.82,5,5,0,0,1-6.65-2.46l-1.34-2.91,9-4.39,1.43,3.11A5,5,0,0,1,35.51,91.76Zm2.07-3.55a6.82,6.82,0,0,0-.4-1.12L35.32,83a1,1,0,0,0-.19-.26,87.45,87.45,0,0,1-4.22-14.13L41.23,86.05ZM77,117.11h0l-11.48,6.8a4.69,4.69,0,0,1-6.4-1.64l-.56-1a4.63,4.63,0,0,1,1.14-6l.05,0s.06-.06.09-.09.23-.18.36-.26L69,109.71a4.64,4.64,0,0,1,2.36-.65,4.77,4.77,0,0,1,1.18.15,4.63,4.63,0,0,1,2.74,2l1.21,2a.76.76,0,0,0,.08.11l1,1.63A1.56,1.56,0,0,1,77,117.11Zm-9-32.64a4.29,4.29,0,0,0-4.76,6.34l3.4,5.75-7.92,4.69a1,1,0,0,0-.35,1.37,1,1,0,0,0,.86.49,1,1,0,0,0,.51-.14l7.92-4.69,5.32,9a6.6,6.6,0,0,0-5,.73l-8.44,5L30.61,64.2a1.5,1.5,0,0,0-.11-.13,16.58,16.58,0,0,0-4.62-11.15A13.93,13.93,0,0,0,22,50.16l.23-.65a6.87,6.87,0,0,1,1.71-2.67l6.4-2.09a39.49,39.49,0,0,0,14.22-8.19L50.74,31a28.57,28.57,0,0,1,3.48.23,13.76,13.76,0,0,0,.54,4.61c.82,2.82,2.94,6.82,8.4,9.91l.19.07a.75.75,0,0,0,.08.24L91.8,93.94l-8.45,5a6.59,6.59,0,0,0-3,4l-4-6.67,7.82-4.63a1,1,0,0,0-1-1.73l-7.81,4.63-2.51-4.23,4-2.39a1,1,0,1,0-1-1.72l-4,2.39-1.28-2.15A4.21,4.21,0,0,0,67.93,84.47ZM95.55,94.8a4.67,4.67,0,0,1,4,2.28l.56,1a4.68,4.68,0,0,1-1.64,6.39L87,111.22a1.56,1.56,0,0,1-2.14-.54l-2.11-3.56a.56.56,0,0,0,0-.12l-.11-.18a4.66,4.66,0,0,1,1.75-6.15l8.81-5.22A4.68,4.68,0,0,1,95.55,94.8ZM67.25,48.56a105.4,105.4,0,0,1,9.66,9.9l3,4.08a7.49,7.49,0,0,0,.51.61l-3.36,2ZM90.5,59.08a5,5,0,0,1-9,2.27L79.1,58.07l8.19-5.81,2.28,3.1A4.94,4.94,0,0,1,90.5,59.08Zm-4.39-8.44L77.86,56.5c-2-2.32-8.56-9.64-13.52-12.61a1,1,0,0,0-.56-.12c-7.19-4.24-7.68-10.09-7.58-12.28a44.09,44.09,0,0,1,8.47,2.37l-2,3.65a1,1,0,0,0,1.76,1l2.08-3.84,1.28.6L66.64,37a1,1,0,0,0,.3,1.38,1,1,0,0,0,.54.16,1,1,0,0,0,.84-.46l1.29-2A49.3,49.3,0,0,1,86.11,50.64ZM61.86,20.39,69.93,34a46.36,46.36,0,0,0-6.53-2.79A41.5,41.5,0,0,0,51.57,29a22.9,22.9,0,0,0-1-12.6C52.57,15.6,58.18,14.18,61.86,20.39ZM8.59,18.75A20.94,20.94,0,0,1,19.15,5.8a20.58,20.58,0,0,1,9.59-2.34A21.33,21.33,0,0,1,47.16,13.91a21,21,0,0,1,2.29,15.54l-6.27,5.62a37.69,37.69,0,0,1-13.51,7.78l-6.32,2.06A21.11,21.11,0,0,1,8.59,18.75Zm13,27.69a8.76,8.76,0,0,0-1.29,2.4A54.48,54.48,0,0,0,17.6,60s0,0,0,0h0a48.81,48.81,0,0,0-.43,6.37L8.62,51.94c-3.08-5.46,1.26-10.35,3-12A22.9,22.9,0,0,0,21.59,46.44Z" />
                    <path d="M108.36,81.24a1,1,0,0,0,1-.7,10.6,10.6,0,0,1,7-7,1,1,0,0,0,.7-1,1,1,0,0,0-.7-1,10.64,10.64,0,0,1-7-7,1,1,0,0,0-1-.71,1,1,0,0,0-1,.71,10.66,10.66,0,0,1-7,7,1,1,0,0,0-.71,1,1,1,0,0,0,.71,1,10.62,10.62,0,0,1,7,7A1,1,0,0,0,108.36,81.24Zm-5.11-8.69a12.64,12.64,0,0,0,5.11-5.11,12.66,12.66,0,0,0,5.12,5.11,12.62,12.62,0,0,0-5.12,5.12A12.6,12.6,0,0,0,103.25,72.55Z" />
                    <path d="M117.86,50.2a1,1,0,0,0-1-.71,1,1,0,0,0-1,.71,5.88,5.88,0,0,1-3.88,3.88,1,1,0,0,0-.7,1,1,1,0,0,0,.7,1A5.84,5.84,0,0,1,116,59.87a1,1,0,0,0,1,.71,1,1,0,0,0,1-.71A5.88,5.88,0,0,1,121.75,56a1,1,0,0,0,.7-1,1,1,0,0,0-.7-1A5.9,5.9,0,0,1,117.86,50.2Zm-1,7.06A8,8,0,0,0,114.68,55a7.86,7.86,0,0,0,2.23-2.22A7.82,7.82,0,0,0,119.13,55,8,8,0,0,0,116.91,57.26Z" />
                    <path d="M15.27,117.28a1,1,0,0,0,1.91,0,5.52,5.52,0,0,1,3.64-3.64,1,1,0,0,0,.71-1,1,1,0,0,0-.71-1,5.5,5.5,0,0,1-3.64-3.64,1,1,0,0,0-1.91,0,5.5,5.5,0,0,1-3.64,3.64,1,1,0,0,0-.71,1,1,1,0,0,0,.71,1A5.52,5.52,0,0,1,15.27,117.28Zm1-6.6a7.39,7.39,0,0,0,2,2,7.26,7.26,0,0,0-2,2,7.43,7.43,0,0,0-2-2A7.57,7.57,0,0,0,16.23,110.68Z" />
                </svg>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 128 128"
                    className="textWhite absolute left-[18%] top-10 z-20  h-[200px] w-[200px]"
                >
                    <title />
                    <path d="M119.61,41.59a1,1,0,0,0,1.42,0l2.12-2.12a1,1,0,0,0,0-1.41,1,1,0,0,0-1.41,0l-2.13,2.12A1,1,0,0,0,119.61,41.59Z" />
                    <path d="M112.4,48.81a1,1,0,0,0-1.41,0l-42,42a1,1,0,0,0,1.41,1.42l42-42A1,1,0,0,0,112.4,48.81Z" />
                    <path d="M35.32,60.14a1,1,0,0,0,1.42,0L91.63,5.25a1,1,0,0,0-1.42-1.42L35.32,58.72A1,1,0,0,0,35.32,60.14Z" />
                    <path d="M86,57.91,67.17,76.75a1,1,0,0,0,1.41,1.42L87.42,59.33a1,1,0,0,0,0-1.42A1,1,0,0,0,86,57.91Z" />
                    <path d="M88.57,22.38a1,1,0,0,0-1.41,0L50,59.56A1,1,0,0,0,51.39,61L88.57,23.79A1,1,0,0,0,88.57,22.38Z" />
                    <path d="M109.43,65A1,1,0,0,0,108,65L59.83,113.2a31.61,31.61,0,1,1-44.7-44.7L61.62,22a1,1,0,0,0,0-1.41,1,1,0,0,0-1.42,0L13.72,67.08a33.61,33.61,0,1,0,47.53,47.53l48.18-48.18A1,1,0,0,0,109.43,65Z" />
                    <path d="M71.37,12.26l5.55-5.55a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L70,10.85a1,1,0,1,0,1.42,1.41Z" />
                    <path d="M21.11,107.22a24.25,24.25,0,1,0,0-34.29A24.17,24.17,0,0,0,21.11,107.22ZM38.26,67.84a22.24,22.24,0,1,1-15.73,6.51A22.18,22.18,0,0,1,38.26,67.84Z" />
                    <path d="M106.73,23h0l3.42-3.42a1,1,0,0,0,0-1.41,1,1,0,0,0-1.42,0L103,23.93,63.12,63.8a1,1,0,0,0,1.41,1.42Z" />
                    <path d="M22.29,84.7a2.56,2.56,0,1,1,0,3.62,1,1,0,0,0-1.41,1.41,4.56,4.56,0,1,0,0-6.45,1,1,0,0,0,0,1.42A1,1,0,0,0,22.29,84.7Z" />
                    <path d="M41.24,106a6.16,6.16,0,1,0-.59-12.29,1,1,0,1,0,.19,2,4.16,4.16,0,1,1-2.54,7.08,1,1,0,0,0-1.41,1.41A6.11,6.11,0,0,0,41.24,106Z" />
                    <path d="M46.19,86.59a6.13,6.13,0,0,0,3,.8A6.31,6.31,0,0,0,51.43,87,1,1,0,0,0,52,85.69a1,1,0,0,0-1.29-.58,4.16,4.16,0,1,1,.56-7.5,1,1,0,0,0,1-1.74,6.16,6.16,0,1,0-6.06,10.72Z" />
                    <path d="M20.13,31.19a5,5,0,1,0,5-5A5,5,0,0,0,20.13,31.19Zm8,0a3,3,0,1,1-3-3A3,3,0,0,1,28.13,31.19Z" />
                    <path d="M119.13,79.69a5,5,0,1,0-5-5A5,5,0,0,0,119.13,79.69Zm0-8a3,3,0,1,1-3,3A3,3,0,0,1,119.13,71.69Z" />
                    <path d="M97.46,92.86a3,3,0,1,0,3-3A3,3,0,0,0,97.46,92.86Zm4,0a1,1,0,1,1-1-1A1,1,0,0,1,101.46,92.86Z" />
                    <path d="M37.46,5.53a3,3,0,1,0,3,3A3,3,0,0,0,37.46,5.53Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,37.46,9.53Z" />
                    <path d="M36.63,24.69a3,3,0,1,0,3,3A3,3,0,0,0,36.63,24.69Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,36.63,28.69Z" />
                </svg>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    className="absolute right-[32%] top-[500px] z-30 h-40 w-40 text-black "
                    viewBox="0 0 64 40"
                    stroke="currentColor"
                    fill="#F3E5AB"
                >
                    <g>
                        <g transform="translate(1.000000, 1.000000)">
                            <path
                                strokeWidth=".5"
                                d="M0,36c0,1.104,0.896,2,2,2h58    c1.104,0,2-0.896,2-2V2c0-1.104-0.896-2-2-2H2C0.896,0,0,0.896,0,2V36L0,36z"
                            />
                            <path
                                strokeWidth=".5"
                                d="M62,2    c0-1.104-31,22.032-31,22.032S0,1.144,0,2"
                            />
                            <path strokeWidth=".5" d="M61,37L37,20" />
                            <path strokeWidth=".5" d="M1,37l24-17" />
                        </g>
                    </g>
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    className="absolute right-[31%] top-[485px] z-30 h-40 w-40 text-black "
                    viewBox="0 0 64 40"
                    stroke="currentColor"
                    fill="#F3E5AB"
                >
                    <g>
                        <g transform="translate(1.000000, 1.000000)">
                            <path
                                strokeWidth=".5"
                                d="M0,36c0,1.104,0.896,2,2,2h58    c1.104,0,2-0.896,2-2V2c0-1.104-0.896-2-2-2H2C0.896,0,0,0.896,0,2V36L0,36z"
                            />
                            <path
                                strokeWidth=".5"
                                d="M62,2    c0-1.104-31,22.032-31,22.032S0,1.144,0,2"
                            />
                            <path strokeWidth=".5" d="M61,37L37,20" />
                            <path strokeWidth=".5" d="M1,37l24-17" />
                        </g>
                    </g>
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    className="absolute right-[30%] top-[470px] z-30 h-40 w-40 text-black "
                    viewBox="0 0 64 40"
                    stroke="currentColor"
                    fill="#F3E5AB"
                >
                    <g>
                        <g transform="translate(1.000000, 1.000000)">
                            <path
                                strokeWidth=".5"
                                d="M0,36c0,1.104,0.896,2,2,2h58    c1.104,0,2-0.896,2-2V2c0-1.104-0.896-2-2-2H2C0.896,0,0,0.896,0,2V36L0,36z"
                            />
                            <path
                                strokeWidth=".5"
                                d="M62,2    c0-1.104-31,22.032-31,22.032S0,1.144,0,2"
                            />
                            <path strokeWidth=".5" d="M61,37L37,20" />
                            <path strokeWidth=".5" d="M1,37l24-17" />
                        </g>
                    </g>
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    className="absolute right-[29%] top-[455px] z-30 h-40 w-40 text-black "
                    viewBox="0 0 64 40"
                    stroke="currentColor"
                    fill="#F3E5AB"
                >
                    <g>
                        <g transform="translate(1.000000, 1.000000)">
                            <path
                                strokeWidth=".5"
                                d="M0,36c0,1.104,0.896,2,2,2h58    c1.104,0,2-0.896,2-2V2c0-1.104-0.896-2-2-2H2C0.896,0,0,0.896,0,2V36L0,36z"
                            />
                            <path
                                strokeWidth=".5"
                                d="M62,2    c0-1.104-31,22.032-31,22.032S0,1.144,0,2"
                            />
                            <path strokeWidth=".5" d="M61,37L37,20" />
                            <path strokeWidth=".5" d="M1,37l24-17" />
                        </g>
                    </g>
                </svg>
                <div className="absolute right-10 top-[200px] flex flex-col items-center font-retro text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1024 1024"
                        className="-mb-2 w-28"
                        version="1.1"
                        stroke="black"
                    >
                        <path
                            d="M853.333333 256H469.333333l-85.333333-85.333333H170.666667c-46.933333 0-85.333333 38.4-85.333334 85.333333v170.666667h853.333334v-85.333334c0-46.933333-38.4-85.333333-85.333334-85.333333z"
                            fill="#E1D295"
                            strokeWidth="2px"
                        />
                        <path
                            d="M853.333333 256H170.666667c-46.933333 0-85.333333 38.4-85.333334 85.333333v426.666667c0 46.933333 38.4 85.333333 85.333334 85.333333h682.666666c46.933333 0 85.333333-38.4 85.333334-85.333333V341.333333c0-46.933333-38.4-85.333333-85.333334-85.333333z"
                            strokeWidth="2px"
                            fill="#F3E5AB"
                        />
                    </svg>
                    <div>404 stufff</div>
                </div>
                <div className="absolute right-10 top-[50px] flex flex-col items-center font-retro text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1024 1024"
                        className="-mb-2 w-28"
                        version="1.1"
                        stroke="black"
                    >
                        <path
                            d="M853.333333 256H469.333333l-85.333333-85.333333H170.666667c-46.933333 0-85.333333 38.4-85.333334 85.333333v170.666667h853.333334v-85.333334c0-46.933333-38.4-85.333333-85.333334-85.333333z"
                            fill="#E1D295"
                            strokeWidth="2px"
                        />
                        <path
                            d="M853.333333 256H170.666667c-46.933333 0-85.333333 38.4-85.333334 85.333333v426.666667c0 46.933333 38.4 85.333333 85.333334 85.333333h682.666666c46.933333 0 85.333333-38.4 85.333334-85.333333V341.333333c0-46.933333-38.4-85.333333-85.333334-85.333333z"
                            strokeWidth="2px"
                            fill="#F3E5AB"
                        />
                    </svg>
                    <div>New Folder</div>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-1/3 top-5  h-16 w-16 text-yellow-200"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M12 3L13.4302 8.31181C13.6047 8.96 13.692 9.28409 13.8642 9.54905C14.0166 9.78349 14.2165 9.98336 14.451 10.1358C14.7159 10.308 15.04 10.3953 15.6882 10.5698L21 12L15.6882 13.4302C15.04 13.6047 14.7159 13.692 14.451 13.8642C14.2165 14.0166 14.0166 14.2165 13.8642 14.451C13.692 14.7159 13.6047 15.04 13.4302 15.6882L12 21L10.5698 15.6882C10.3953 15.04 10.308 14.7159 10.1358 14.451C9.98336 14.2165 9.78349 14.0166 9.54905 13.8642C9.28409 13.692 8.96 13.6047 8.31181 13.4302L3 12L8.31181 10.5698C8.96 10.3953 9.28409 10.308 9.54905 10.1358C9.78349 9.98336 9.98336 9.78349 10.1358 9.54905C10.308 9.28409 10.3953 8.96 10.5698 8.31181L12 3Z" />
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-[10%] top-[250px]  h-12 w-12 text-yellow-200"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M12 3L13.4302 8.31181C13.6047 8.96 13.692 9.28409 13.8642 9.54905C14.0166 9.78349 14.2165 9.98336 14.451 10.1358C14.7159 10.308 15.04 10.3953 15.6882 10.5698L21 12L15.6882 13.4302C15.04 13.6047 14.7159 13.692 14.451 13.8642C14.2165 14.0166 14.0166 14.2165 13.8642 14.451C13.692 14.7159 13.6047 15.04 13.4302 15.6882L12 21L10.5698 15.6882C10.3953 15.04 10.308 14.7159 10.1358 14.451C9.98336 14.2165 9.78349 14.0166 9.54905 13.8642C9.28409 13.692 8.96 13.6047 8.31181 13.4302L3 12L8.31181 10.5698C8.96 10.3953 9.28409 10.308 9.54905 10.1358C9.78349 9.98336 9.98336 9.78349 10.1358 9.54905C10.308 9.28409 10.3953 8.96 10.5698 8.31181L12 3Z" />
                </svg>
                <div className="mid-grid absolute z-20"></div>

                <div className="absolute left-[25%] top-[300px] z-50 w-[500px]  overflow-hidden rounded-xl border-[1px] border-black font-retro text-black">
                    <div className="flex h-10 w-full justify-between rounded-t-xl border-b-[1px] border-black bg-[#FBC1CC] px-4 py-2">
                        <div>Status: Page Not Found</div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="h-5 w-5 border-[1px] border-black bg-gray-100 p-[3px] text-black "
                            viewBox="0 0 16 16"
                        >
                            <path d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z" />
                        </svg>
                    </div>
                    <div className="bg-gray-100 p-9 ">
                        <div className="flex items-center justify-center gap-5">
                            <div className="w-1/4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-20 rounded-full  text-[#FBC1CC]"
                                    fill="currentColor"
                                    viewBox="0 0 32 32"
                                >
                                    <path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2ZM9,16.41,7.59,15l2-2-2-2L9,9.59l2,2,2-2L14.41,11l-2,2,2,2L13,16.41l-2-2ZM16,25a3,3,0,1,1,3-3A3,3,0,0,1,16,25Zm8.41-10L23,16.41l-2-2-2,2L17.59,15l2-2-2-2L19,9.59l2,2,2-2L24.41,11l-2,2Z" />
                                </svg>
                            </div>

                            <h1 className="text-lg w-3/4">
                                404 - {script[currentIndex]}
                            </h1>
                        </div>
                        <div className="mt-5 flex justify-center gap-10">
                            <Link
                                className="border border-gray-400 border-l-gray-100 border-t-gray-100 bg-gray-200 hover:bg-gray-300 px-4 py-2 text-black shadow-inner active:border-b-gray-400 active:border-l-gray-200 active:border-r-gray-400 active:border-t-gray-200"
                                href={'/'}
                                aria-label="home"
                            >
                                Yes, Please
                            </Link>
                            <button
                                className="border border-gray-400 border-l-gray-100 border-t-gray-100 bg-gray-200 hover:bg-gray-300 px-4 py-2 text-black shadow-inner active:border-b-gray-400 active:border-l-gray-200 active:border-r-gray-400 active:border-t-gray-200"
                                onClick={() =>
                                    setCurrentIndex(
                                        (prev) => (prev + 1) % script.length
                                    )
                                }
                            >
                                No, Thank You
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
