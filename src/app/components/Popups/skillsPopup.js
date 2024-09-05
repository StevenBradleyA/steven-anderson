'use client';
import { useState } from 'react';
import ModalDialog from '../Modal';
import { useGlobalState } from '../Context/stateContext';
import Link from 'next/link';

export default function SkillsPopup() {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const { setModalPopup } = useGlobalState();

    const closeModal = () => {
        setIsModalOpen(false);
        setModalPopup('');
    };
    return (
        <ModalDialog isOpen={isModalOpen} onClose={closeModal}>
            <div className="w-[750px] relative ">
                <h1 className="text-4xl w-full">Developer Skills</h1>
                <div className="flex justify-center w-full mt-2 ">
                    <div className="bg-stevenBlue rounded-full p-4 ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="white"
                            className="w-16"
                            viewBox="0 0 24 24"
                        >
                            <path d="M1.293,11.293l4-4A1,1,0,1,1,6.707,8.707L3.414,12l3.293,3.293a1,1,0,1,1-1.414,1.414l-4-4A1,1,0,0,1,1.293,11.293Zm17.414-4a1,1,0,1,0-1.414,1.414L20.586,12l-3.293,3.293a1,1,0,1,0,1.414,1.414l4-4a1,1,0,0,0,0-1.414ZM13.039,4.726l-4,14a1,1,0,0,0,.686,1.236A1.053,1.053,0,0,0,10,20a1,1,0,0,0,.961-.726l4-14a1,1,0,1,0-1.922-.548Z" />
                        </svg>
                    </div>
                </div>
                <div className="w-full flex gap-10 relative mt-3">
                    <p className="w-3/4">
                        {`After attending App Academy, I learned how to code in
                        JavaScript and Python on the React framework. Following
                        that, I delved into TypeScript and Next.js, building
                        full-stack applications and constantly challenging
                        myself to grow. Currently, I'm a web developer with a
                        passion for UI/UX design, but I'm also planning to learn
                        C# and Java to dive into more technical coding. I've built projects like
                        a full stylist booking app, a custom typing game / marketplace / social media 
                        utilizing tools like Prisma and tRPC. I enjoy working with version
                        control through Git and thrive in collaborative
                        environments. I plan on expanding my knowledge on machine learning
                        and backend systems, and am excited to build even more
                        complex, innovative projects.`}{' '}
                        To learn more about my skills checkout the{' '}
                        <Link
                            href={'/about'}
                            aria-label="learn about me"
                            className="text-stevenBlue hover:opacity-80"
                        >
                            about
                        </Link>{' '}
                        Page.
                    </p>
                    <ul className="font-bebas w-1/4 text-blue-500/50 absolute -right-10 bottom-0">
                        <li className="hover:text-stevenBlue ease-in">
                            {`Skills`}
                        </li>
                        <li className="hover:text-stevenBlue ease-in">
                            Javascript
                        </li>
                        <li className="hover:text-stevenBlue ease-in">
                            Typescript
                        </li>
                        <li className="hover:text-stevenBlue ease-in">
                            Python
                        </li>
                        <li className="hover:text-stevenBlue ease-in">SQL</li>
                        <li className="hover:text-stevenBlue ease-in">HTML</li>
                        <li className="hover:text-stevenBlue ease-in">CSS</li>
                        <li className="hover:text-stevenBlue ease-in">AWS</li>
                        <li className="hover:text-stevenBlue ease-in">
                            React
                        </li>
                        <li className="hover:text-stevenBlue ease-in">
                            Redux
                        </li>
                        <li className="hover:text-stevenBlue ease-in">
                            Three.js
                        </li>
                        <li className="hover:text-stevenBlue ease-in">
                            Next.js
                        </li>
                        <li className="hover:text-stevenBlue ease-in">
                            Express
                        </li>
                        <li className="hover:text-stevenBlue ease-in">
                            Flask
                        </li>
                    </ul>
                </div>
            </div>
        </ModalDialog>
    );
}
