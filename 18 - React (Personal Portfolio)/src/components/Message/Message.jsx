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
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

    const handleMouseMove = useCallback((e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    }, []);

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
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
            transition: {
                duration: 2,
                repeat: Infinity,
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
            onMouseMove={handleMouseMove}
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating particles */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-1 h-1 rounded-full ${
                            i % 4 === 0
                                ? "bg-blue-400"
                                : i % 4 === 1
                                ? "bg-purple-400"
                                : i % 4 === 2
                                ? "bg-pink-400"
                                : "bg-yellow-400"
                        }`}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                            y: [0, -100, -200],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                            ease: "easeOut",
                        }}
                    />
                ))}

                {/* Gradient orbs */}
                <motion.div
                    className="absolute w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"
                    style={{
                        left: mousePosition.x - 192,
                        top: mousePosition.y - 192,
                    }}
                    transition={{ type: "spring", stiffness: 50, damping: 15 }}
                />

                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-64 h-64 rounded-full blur-2xl ${
                            i === 0
                                ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                                : i === 1
                                ? "bg-gradient-to-r from-purple-500/10 to-pink-500/10"
                                : "bg-gradient-to-r from-pink-500/10 to-yellow-500/10"
                        }`}
                        style={{
                            left: `${20 + i * 30}%`,
                            top: `${10 + i * 20}%`,
                        }}
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 180, 360],
                            opacity: [0.1, 0.2, 0.1],
                        }}
                        transition={{
                            duration: 8 + i * 2,
                            repeat: Infinity,
                            delay: i * 1,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] px-8 py-12">
                {/* Header Icons */}
                <motion.div
                    className="flex items-center gap-4 mb-8"
                    variants={itemVariants}
                >
                    {[Zap, Crown, Flame].map((Icon, index) => (
                        <motion.div
                            key={index}
                            className="relative"
                            animate={{
                                rotate: [0, 360],
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: index * 0.5,
                                ease: "easeInOut",
                            }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-lg opacity-60"
                                variants={glowVariants}
                                animate="animate"
                            />
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
                                        backgroundPosition: [
                                            "0%",
                                            "100%",
                                            "0%",
                                        ],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                >
                                    OPPORTUNITY
                                </motion.span>
                                <motion.div
                                    className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 blur-xl rounded-lg"
                                    animate={{
                                        scale: [1, 1.1, 1],
                                        opacity: [0.3, 0.6, 0.3],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
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
                                        backgroundPosition: [
                                            "0%",
                                            "100%",
                                            "0%",
                                        ],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 1,
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
                                        repeat: Infinity,
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
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                RANK #1
                            </motion.h1>

                            {/* Sparkle effects around RANK */}
                            {[...Array(8)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-3 h-3 bg-yellow-400 rounded-full"
                                    style={{
                                        left: `${
                                            10 +
                                            Math.cos((i * 45 * Math.PI) / 180) *
                                                120
                                        }px`,
                                        top: `${
                                            30 +
                                            Math.sin((i * 45 * Math.PI) / 180) *
                                                60
                                        }px`,
                                    }}
                                    animate={{
                                        scale: [0, 1, 0],
                                        rotate: [0, 180, 360],
                                        opacity: [0, 1, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.2,
                                        ease: "easeInOut",
                                    }}
                                />
                            ))}
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
                                            repeat: Infinity,
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
                                        repeat: Infinity,
                                    }}
                                >
                                    <Rocket className="w-6 h-6" />
                                </motion.div>
                            </span>

                            {/* Button shine effect */}
                            <motion.div
                                className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                                animate={{
                                    x: ["-100%", "100%"],
                                    opacity: [0, 0.3, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatDelay: 1,
                                }}
                            />
                        </motion.button>
                    </a>
                </motion.div>

                {/* Bottom decorative elements */}
                <motion.div
                    className="flex items-center gap-4 mt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                >
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.2,
                            }}
                        />
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Message;
