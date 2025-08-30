/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900 z-[9999]">
            {/* Simple animated spinner */}
            <motion.div
                className="w-16 h-16 border-4 border-gray-700 border-t-blue-500 rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Loading text with simple fade */}
            <motion.p
                className="mt-6 text-lg text-gray-300 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Loading...
            </motion.p>

            {/* Simple progress dots */}
            <div className="flex space-x-1 mt-4">
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className="w-2 h-2 bg-blue-500 rounded-full"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.2,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default LoadingScreen;
