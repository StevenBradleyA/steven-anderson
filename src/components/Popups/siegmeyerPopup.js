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
            <div className="w-[500px] ">
                <div className="flex justify-center w-full ">
                    <Image
                        alt="bonfire"
                        src={bonfire}
                        className=" w-20 object-cover"
                    />
                </div>

                <h2 className="text-xl font-bold">Gaming </h2>
                <p className="mt-4">
                    Video games have always been a medium for creating
                    everlasting memories with friends for me. They have also
                    greatly inspired my passion for development. My favorite
                    games are the Fromsoft Souls series (Elden Ring, Darksouls I
                    II III) and Rocket League.
                </p>
            </div>
        </ModalDialog>
    );
}
