'use client'
import React from 'react';
import { motion } from 'framer-motion';

const slides = [
    { icon: <img src='https://img.icons8.com/?size=50&id=18818&format=png' /> },
    { icon: <img src='https://img.icons8.com/?size=50&id=18806&format=png' /> },
    { icon: <img src='https://img.icons8.com/?size=50&id=mEccIkjwF5gZ&format=png' /> },
    { icon: <img src='https://img.icons8.com/?size=50&id=58310&format=png' /> },
    { icon: <img src='https://img.icons8.com/?size=48&id=45135&format=png' /> },
    { icon: <img src='https://img.icons8.com/?size=48&id=58805&format=png' /> },
    { icon: <img src='https://img.icons8.com/?size=48&id=58881&format=png' /> },
];

const Brand1 = () => {
    const duplicatedSlides = [...slides, ...slides];

    return (
        <div className="relative h-full overflow-hidden py-12 bg-white mx-auto w-full rounded-md">
            <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:filter after:blur-3"></div>

            <motion.div
                className="flex space-x-4"
                animate={{
                    x: ['0%', '-100%'],
                    transition: {
                        ease: 'linear',
                        duration: 15,
                        repeat: Infinity,
                    }
                }}
            >
                {duplicatedSlides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0" style={{ width: `${100 / slides.length}%`, minWidth: '50px' }}>
                        <div className="flex items-center justify-center h-full p-4">
                            {slide.icon}
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Brand1;
