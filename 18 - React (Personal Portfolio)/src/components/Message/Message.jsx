/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
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
    const frameRef = useRef(null);

    const highlightWords = [
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
        { word: "PROJECT", icon: Rocket, color: "from-pink-500 to-red-600" },
        { word: "RANK", icon: Trophy, color: "from-yellow-500 to-orange-600" },
    ];

    const achievements = [
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
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentWord((prev) => (prev + 1) % highlightWords.length);
        }, 2500);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleMouseMove = (e) => {
        if (frameRef.current) cancelAnimationFrame(frameRef.current);
        frameRef.current = requestAnimationFrame(() => {
            const rect = e.currentTarget.getBoundingClientRect();
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        });
    };

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.4, ease: "easeOut" },
        },
    };

    const glowVariants = {
        animate: {
            scale: [1, 1.15, 1],
            opacity: [0.5, 0.8, 0.5],
            transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
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
                {/* Floating particles (reduced from 20 to 8) */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-1.5 h-1.5 rounded-full will-change-transform ${
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
                            y: [0, -80, -160],
                            opacity: [0, 1, 0],
                            scale: [0.8, 1, 0.8],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                            ease: "easeOut",
                        }}
                    />
                ))}

                {/* Gradient orb following mouse */}
                <motion.div
                    className="absolute w-80 h-80 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl will-change-transform"
                    style={{
                        left: mousePosition.x - 160,
                        top: mousePosition.y - 160,
                    }}
                    transition={{ type: "spring", stiffness: 40, damping: 20 }}
                />

                {/* Background gradient orbs (reduced to 2) */}
                {[...Array(2)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-64 h-64 rounded-full blur-2xl will-change-transform ${
                            i === 0
                                ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                                : "bg-gradient-to-r from-pink-500/10 to-yellow-500/10"
                        }`}
                        style={{
                            left: `${25 + i * 30}%`,
                            top: `${15 + i * 25}%`,
                        }}
                        animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 180, 360],
                            opacity: [0.08, 0.15, 0.08],
                        }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            delay: i * 2,
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
                            className="relative will-change-transform"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: index * 0.5,
                                ease: "easeInOut",
                            }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-lg opacity-50"
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
                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        #GIVE AN{" "}
                        <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                            OPPORTUNITY
                        </span>
                    </motion.h1>
                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mt-4"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        AND SEE YOUR{" "}
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            NEXT PROJECT
                        </span>
                    </motion.h1>

                    <motion.div
                        className="mt-8 relative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <motion.h1
                            className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent"
                            animate={{ scale: [1, 1.03, 1] }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            RANK #1
                        </motion.h1>
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
                            className="relative group cursor-pointer will-change-transform"
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
                                        animate={{ scale: [1, 1.08, 1] }}
                                        transition={{
                                            duration: 2.5,
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
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <a
                        href="mailto:faizullahofficial0@gmail.com?subject=Job Opportunity&body=Hello Faiz,"
                        target="_blank"
                    >
                        <motion.button
                            className="relative group px-12 py-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-black text-xl font-black rounded-2xl shadow-2xl overflow-hidden"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 20px 40px rgba(251,191,36,0.4)",
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
                                    animate={{ x: [0, 8, 0] }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                    }}
                                >
                                    <Rocket className="w-6 h-6" />
                                </motion.div>
                            </span>
                        </motion.button>
                    </a>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Message;
