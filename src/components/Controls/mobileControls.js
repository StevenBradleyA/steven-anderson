'use client';
import { motion, useDragControls } from 'framer-motion';
import { useRef } from 'react';

const MobileControls = () => {
    const controls = useDragControls();

    const constraintsRef = useRef(null);

    const handleDrag = (event, info) => {

        const x = info.offset.x;
        const y = info.offset.y;
        // console.log(`Dragging at x: ${x}, y: ${y}`)
        const threshold = 15; 

        if (x > threshold) {
            console.log('right');
        } else if (x < -threshold) {
            console.log('left');
        }

        if (y > threshold) {
            console.log('backward');
        } else if (y < -threshold) {
            console.log('forward');
        }



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
                />
            </div>
        </>
    );
};

export default MobileControls;
