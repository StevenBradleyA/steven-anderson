'use client';
import { useState } from 'react';
import ModalDialog from '../Modal';
import { useGlobalState } from '../Context/stateContext';

export default function SkillsPopup() {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const { setModalPopup } = useGlobalState();

    const closeModal = () => {
        setIsModalOpen(false);
        setModalPopup('');
    };
    return (
        <ModalDialog isOpen={isModalOpen} onClose={closeModal}>
            <div className="w-[500px] ">
                <h2 className="text-xl font-bold">Skills </h2>
                <p className="mt-4">Javascript, trypscript, python ...</p>
            </div>
        </ModalDialog>
    );
}
