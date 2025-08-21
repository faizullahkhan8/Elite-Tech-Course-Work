/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Rocket, Zap, Sparkles } from "lucide-react";

const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 z-[9999] overflow-hidden">
            {/* Outer rotating dashed rings */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    className={`absolute rounded-full border-2 border-dashed ${
                        i === 0
                            ? "border-purple-400/30"
                            : i === 1
                            ? "border-pink-400/30"
                            : "border-blue-400/30"
                    }`}
                    style={{
                        width: `${200 + i * 80}px`,
                        height: `${200 + i * 80}px`,
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 10 + i * 4,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}

            {/* Central glowing orb */}
            <motion.div
                className="relative w-32 h-32 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 shadow-2xl flex items-center justify-center"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <Rocket className="w-10 h-10 text-white drop-shadow-lg" />
            </motion.div>

            {/* Orbiting sparkles */}
            {[...Array(8)].map((_, i) => {
                const angle = (i * 45 * Math.PI) / 180;
                const radius = 100;
                return (
                    <motion.div
                        key={i}
                        className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg"
                        style={{
                            left: `calc(50% + ${Math.cos(angle) * radius}px)`,
                            top: `calc(50% + ${Math.sin(angle) * radius}px)`,
                        }}
                        animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0] }}
                        transition={{
                            duration: 2,
                            delay: i * 0.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                );
            })}

            {/* Loading Text */}
            <motion.h1
                className="mt-48 text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                Loading Portfolio...
            </motion.h1>
        </div>
    );
};

export default LoadingScreen;
