'use client';
import { useState } from 'react';
import ModalDialog from '../Modal';
import { useGlobalState } from '../Context/stateContext';
import bonfire from '@public/images/bonfire.png';
import Image from 'next/image';

export default function SiegmeyerPopup() {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const { setModalPopup } = useGlobalState();

    const closeModal = () => {
        setIsModalOpen(false);
        setModalPopup('');
    };

    return (
        <ModalDialog isOpen={isModalOpen} onClose={closeModal}>
            <div className="w-[550px] relative ">
                <h1 className=" w-full text-4xl ">Gaming with the boys</h1>
                <div className="flex justify-center w-full mt-2 ">
                    <div className="bg-stevenBlue rounded-full px-12 py-6 ">
                        <Image
                            alt="bonfire"
                            src={bonfire}
                            className=" w-32 object-cover "
                        />
                    </div>
                </div>
                <div className="w-full flex gap-10 relative mt-1">
                    <p className="w-3/4">
                        {`When I'm not coding, I'm usually gaming with friends.
                        Video games have always been a medium for creating
                        everlasting memories and inspiring my passion for
                        development!`}
                    </p>
                    <ul className="font-bebas w-1/4 text-blue-500/50 absolute -right-10 bottom-0">
                        <li className="hover:text-stevenBlue ease-in">
                            Rocket League
                        </li>
                        <li className="hover:text-stevenBlue ease-in">Elden Ring</li>

                        <li className="hover:text-stevenBlue ease-in">Dark Souls</li>

                        <li className="hover:text-stevenBlue ease-in">
                            Dark Souls II{' '}
                        </li>
                        <li className="hover:text-stevenBlue ease-in">
                            Dark Souls III{' '}
                        </li>
                        <li className="hover:text-stevenBlue ease-in">
                            Sea of Thieves
                        </li>
                        <li className="hover:text-stevenBlue ease-in">Valheim</li>
                    </ul>
                </div>
            </div>
        </ModalDialog>
    );
}
