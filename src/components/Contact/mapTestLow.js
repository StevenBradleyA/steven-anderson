import { motion } from 'framer-motion';

export default function MapTestLow({ letter, firstWordIndex, index }) {
    const bottomLetter = {
        initial: {
            y: 150,
            opacity: 100,
        },
        animate: {
            y: 0,
            opacity: 100,
            transition: { duration: 1.2, ease: 'easeInOut' },
            transitionEnd: {
                y: 150,
            },
        },
    };
    const fixed = {
        initial: {
            y: 0,
        },
        animate: {
            y: 0,
            transition: { duration: 1.2, ease: 'easeInOut' },
        },
    };

    console.log(firstWordIndex)

    return (
        <>
            <motion.div
                key={index}
                variants={firstWordIndex === index ? bottomLetter : fixed}
            >
                {letter}
            </motion.div>
        </>
    );
}
