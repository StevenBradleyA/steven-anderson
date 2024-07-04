import { motion } from 'framer-motion';

export default function MapTest({ letter, firstWordIndex, index }) {
    const topLetter = {
        initial: {
            y: 0,
        },
        animate: {
            y: -150,
            transition: { duration: 1.2, ease: 'easeInOut' },
            transitionEnd: {
                y: 0,
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

    return (
        <>
            <motion.div
                key={index}
                variants={firstWordIndex === index ? topLetter : fixed}
            >
                {letter}
            </motion.div>
        </>
    );
}
