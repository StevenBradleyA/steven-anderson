'use client';
import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { useGlobalState } from '../Context/stateContext';

const MobileControls = () => {
    const constraintsRef = useRef(null);

    const { setKeysPressed } = useGlobalState();



    
    const handleDrag = (event, info) => {
        const x = info.offset.x;
        const y = info.offset.y;
        // console.log(`Dragging at x: ${x}, y: ${y}`)
        const threshold = 15;

        setKeysPressed((prevKeys) => ({
            ...prevKeys,
            f: x > threshold,
            s: x < -threshold,
            d: y > threshold,
            e: y < -threshold,
        }));
    };
    const handleDragEnd = () => {
        setKeysPressed((prevKeys) => ({
            ...prevKeys,
            f: false,
            s: false,
            d: false,
            e: false,
        }));
    };

    return (
        <>
            <div className="absolute  bottom-10 left-10 z-50">
                <motion.div
                    className="drag-area z-50 w-[100px] h-[100px] rounded-full bg-white/50 absolute bottom-0 left-0"
                    ref={constraintsRef}
                />
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    className="z-50 w-[50px] h-[50px] rounded-full bg-white absolute bottom-[25px] left-[25px]"
                    dragSnapToOrigin
                    dragElastic={0.25}
                    onDrag={handleDrag}
                    onDragEnd={handleDragEnd}
                />
            </div>
        </>
    );
};

export default MobileControls;
