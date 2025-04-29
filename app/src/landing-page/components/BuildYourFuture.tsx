import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import FadeInWhenVisible from './FadeInWhenVisible';

const steps = [
    "Clarify Your Dream",
    "Focus on One Step Today",
    "Stack Small Wins",
    "Stay Consistent",
    "Become Unstoppable",
];

export default function BuildYourFuture() {
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
        }, 1200); // adjust for pace
        return () => clearInterval(interval);
    }, []);

    return (
        <FadeInWhenVisible>
        <section className="mx-auto mt-32 max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                Build Your Future — One Focused Day at a Time
            </h2>

            <p className="mt-6 text-xl leading-8 text-gray-600 dark:text-white max-w-2xl mx-auto">
                <span className="text-yellow-500 font-bold">No</span> <span className="line-through decoration-1">flashy hacks.</span><br />
                <span className="text-yellow-500 font-bold">No</span> <span className="line-through decoration-1">fake promises.</span><br />

                <span className='text-yellow-500 font-bold underline'>Just</span> small, relentless steps toward who <span className='underline decoration-2 decoration-yellow-500 '>you want to become.</span>
            </p>

            <div className="mt-20 flex flex-col items-center relative min-h-[320px]">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        className="relative z-10 flex items-center space-x-6 mb-10"
                        animate={{
                            scale: activeStep === index ? 1.1 : 1,
                            opacity: activeStep === index ? 1 : 0.4,
                        }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-400 text-black font-bold text-lg shadow-md">
                            {index + 1}
                        </div>
                        <p className="text-xl text-gray-700 dark:text-white text-left">{step}</p>
                    </motion.div>
                ))}
            </div>

            <p className="mt-12 text-xl leading-7 text-gray-600 dark:text-white max-w-2xl mx-auto">
                MindFrame keeps you on track — even when life tries to pull you off.
            </p>
        </section>
        </FadeInWhenVisible>
    );
}
