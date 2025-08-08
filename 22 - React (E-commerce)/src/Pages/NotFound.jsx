/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AnimatedNotFound = () => {
    return (
        <div className="bg-gray min-h-screen flex flex-col items-center justify-center text-center p-6 overflow-hidden">
            {/* 404 Number Animation */}
            <motion.h1
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-9xl font-extrabold text-golden mb-4"
            >
                404
            </motion.h1>

            {/* Heading Animation */}
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-2xl md:text-4xl font-bold text-dark mb-2"
            >
                Oops! Page Not Found
            </motion.h2>

            {/* Description Animation */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-gray-600 max-w-md mb-6"
            >
                The page you're looking for doesn't exist or has been moved.
                Let's get you back on track.
            </motion.p>

            {/* Button Animation */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
            >
                <Link
                    to="/"
                    className="bg-dark text-light px-6 py-3 rounded-lg text-lg font-semibold hover:bg-golden hover:text-dark transition-colors duration-300"
                >
                    Return Home
                </Link>
            </motion.div>

            {/* Emoji Animation */}
            <motion.div
                className="mt-10"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
            >
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200 200"
                    className="w-48 h-48 mx-auto opacity-70"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 4,
                        ease: "easeInOut",
                    }}
                >
                    <circle cx="100" cy="100" r="90" fill="#f4f4f4" />
                    <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        fill="#cfa663"
                        fontSize="40"
                        fontWeight="bold"
                        dy=".3em"
                    >
                        😕
                    </text>
                </motion.svg>
            </motion.div>
        </div>
    );
};

export default AnimatedNotFound;
