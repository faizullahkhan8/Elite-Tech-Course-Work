/* eslint-disable no-unused-vars */
import { useState, useEffect, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import {
    Zap,
    Star,
    Target,
    Rocket,
    ArrowRight,
    Crown,
    Trophy,
    Flame,
} from "lucide-react";

const Message = () => {
    const [currentWord, setCurrentWord] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    // Removed mouse tracking for better performance

    const highlightWords = useMemo(
        () => [
            {
                word: "OPPORTUNITY",
                icon: Target,
                color: "from-blue-500 to-purple-600",
            },
            {
                word: "NEXT",
                icon: ArrowRight,
                color: "from-purple-500 to-pink-600",
            },
            {
                word: "PROJECT",
                icon: Rocket,
                color: "from-pink-500 to-red-600",
            },
            {
                word: "RANK",
                icon: Trophy,
                color: "from-yellow-500 to-orange-600",
            },
        ],
        []
    );

    const achievements = useMemo(
        () => [
            {
                icon: Crown,
                label: "#1 RANKING",
                color: "from-yellow-400 to-yellow-600",
            },
            {
                icon: Trophy,
                label: "TOP RESULTS",
                color: "from-purple-400 to-purple-600",
            },
            {
                icon: Flame,
                label: "VIRAL GROWTH",
                color: "from-red-400 to-red-600",
            },
            {
                icon: Star,
                label: "5-STAR RATING",
                color: "from-blue-400 to-blue-600",
            },
        ],
        []
    );

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentWord((prev) => (prev + 1) % highlightWords.length);
        }, 2000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Removed mouse move handler for better performance

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const wordVariants = {
        hidden: { scale: 0, opacity: 0, rotateX: -90 },
        visible: {
            scale: 1,
            opacity: 1,
            rotateX: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                type: "spring",
                stiffness: 200,
            },
        },
    };

    const glowVariants = {
        animate: {
            scale: 1.1,
            opacity: 0.7,
            transition: {
                duration: 1,
                ease: "easeInOut",
            },
        },
    };

    return (
        <motion.div
            className="relative w-full min-h-[60vh] overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl shadow-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Removed background animations for better performance */}

            <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] px-8 py-12">
                {/* Header Icons */}
                <motion.div
                    className="flex items-center gap-4 mb-8"
                    variants={itemVariants}
                >
                    {[Zap, Crown, Flame].map((Icon, index) => (
                        <motion.div key={index} className="relative">
                            <Icon className="relative w-8 h-8 text-yellow-400" />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Main Message */}
                <motion.div
                    className="text-center mb-12"
                    variants={itemVariants}
                >
                    <motion.div className="relative inline-block">
                        <motion.h1
                            className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            #GIVE AN{" "}
                            <motion.span
                                className="relative inline-block"
                                whileHover={{ scale: 1.05 }}
                            >
                                <motion.span
                                    className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent font-black"
                                    animate={{
                                        backgroundPosition: "100%",
                                    }}
                                    transition={{
                                        duration: 1.2,
                                        ease: "easeInOut",
                                    }}
                                >
                                    OPPORTUNITY
                                </motion.span>
                                <motion.div
                                    className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 blur-xl rounded-lg"
                                    animate={{
                                        scale: 1.1,
                                        opacity: 0.6,
                                    }}
                                    transition={{
                                        duration: 1.2,
                                    }}
                                />
                            </motion.span>
                        </motion.h1>

                        <motion.h1
                            className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mt-4"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            AND SEE YOUR{" "}
                            <motion.span
                                className="relative inline-block"
                                whileHover={{ scale: 1.05 }}
                            >
                                <motion.span
                                    className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-black"
                                    animate={{
                                        backgroundPosition: "100%",
                                    }}
                                    transition={{
                                        duration: 1.2,
                                        ease: "easeInOut",
                                        delay: 0.5,
                                    }}
                                >
                                    NEXT PROJECT
                                </motion.span>
                                <motion.div
                                    className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl rounded-lg"
                                    animate={{
                                        scale: [1, 1.1, 1],
                                        opacity: [0.3, 0.6, 0.3],
                                    }}
                                    transition={{
                                        duration: 2,
                                        delay: 0.5,
                                    }}
                                />
                            </motion.span>
                        </motion.h1>

                        <motion.div
                            className="mt-8 relative"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.6,
                                type: "spring",
                            }}
                        >
                            <motion.h1
                                className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent"
                                animate={{
                                    scale: [1, 1.05, 1],
                                    rotateZ: [0, 1, -1, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    ease: "easeInOut",
                                }}
                            >
                                RANK #1
                            </motion.h1>

                            {/* Removed sparkle effects for better performance */}
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Achievement Badges */}
                <motion.div
                    className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
                    variants={containerVariants}
                >
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            className="relative group cursor-pointer"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                className={`absolute -inset-1 bg-gradient-to-r ${achievement.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-40`}
                                transition={{ duration: 0.3 }}
                            />
                            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                                <div className="flex flex-col items-center gap-2">
                                    <motion.div
                                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${achievement.color} flex items-center justify-center shadow-lg`}
                                        animate={{
                                            rotate: [0, 10, -10, 0],
                                            scale: [1, 1.1, 1],
                                        }}
                                        transition={{
                                            duration: 2,
                                            delay: index * 0.3,
                                        }}
                                    >
                                        <achievement.icon className="w-6 h-6 text-white" />
                                    </motion.div>
                                    <span className="text-white font-bold text-sm text-center">
                                        {achievement.label}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to Action Button */}
                <motion.div
                    variants={itemVariants}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <a
                        href="mailto:faizullahofficial0@gmail.com?subject=Job Opportunity&body=Hello Faiz,"
                        target="_blank"
                    >
                        <motion.button
                            className="relative group px-12 py-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-black text-xl font-black rounded-2xl shadow-2xl overflow-hidden"
                            whileHover={{
                                scale: 1.05,
                                boxShadow:
                                    "0 25px 50px rgba(251, 191, 36, 0.5)",
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "0%" }}
                                transition={{ duration: 0.4 }}
                            />
                            <span className="relative z-10 flex items-center gap-3">
                                LET'S DOMINATE TOGETHER
                                <motion.div
                                    animate={{ x: [0, 10, 0] }}
                                    transition={{
                                        duration: 1.5,
                                    }}
                                >
                                    <Rocket className="w-6 h-6" />
                                </motion.div>
                            </span>

                            {/* Removed button shine effect for better performance */}
                        </motion.button>
                    </a>
                </motion.div>

                {/* Bottom decorative elements */}
                {/* Removed bottom decorative elements for better performance */}
            </div>
        </motion.div>
    );
};

export default Message;
