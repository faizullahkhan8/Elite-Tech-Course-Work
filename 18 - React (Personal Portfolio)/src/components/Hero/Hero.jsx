/* eslint-disable no-unused-vars */
import React, {
    useState,
    useEffect,
    useRef,
    useMemo,
    useCallback,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Mail,
    Download,
    ExternalLink,
    Sparkles,
    Code,
    Zap,
    Star,
    Rocket,
    Globe,
    Crown,
    Flame,
    Trophy,
    Target,
    Facebook,
} from "lucide-react";

// Using placeholder since we can't access your actual image
import MyPassportSizePic from "../../assets/Passport Size Faiz Ullah.png";

const Hero = () => {
    const [copied, setCopied] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    // Removed mousePosition state for better performance
    const [currentTitle, setCurrentTitle] = useState(0);
    const [isTyping, setIsTyping] = useState(false);
    // Removed containerRef for better performance

    // Removed scroll and spring animations for better performance

    const titles = useMemo(
        () => [
            {
                text: "Full Stack Developer",
                icon: Code,
                color: "from-blue-500 to-purple-600",
            },
            {
                text: "React Specialist",
                icon: Zap,
                color: "from-purple-500 to-pink-600",
            },
            {
                text: "UI/UX Enthusiast",
                icon: Star,
                color: "from-pink-500 to-red-600",
            },
            {
                text: "Problem Solver",
                icon: Target,
                color: "from-red-500 to-orange-600",
            },
            {
                text: "Tech Innovator",
                icon: Rocket,
                color: "from-orange-500 to-yellow-600",
            },
        ],
        []
    );

    const skills = useMemo(
        () => [
            {
                name: "React",
                level: 95,
                icon: Zap,
                color: "from-blue-400 to-blue-600",
            },
            {
                name: "Node.js",
                level: 90,
                icon: Zap,
                color: "from-green-400 to-green-600",
            },
            {
                name: "MongoDB",
                level: 85,
                icon: Globe,
                color: "from-emerald-400 to-emerald-600",
            },
            {
                name: "Next.js",
                level: 88,
                icon: Rocket,
                color: "from-purple-400 to-purple-600",
            },
            {
                name: "Express",
                level: 87,
                icon: Crown,
                color: "from-pink-400 to-pink-600",
            },
        ],
        []
    );

    useEffect(() => {
        const titleInterval = setInterval(() => {
            setCurrentTitle((prev) => (prev + 1) % titles.length);
        }, 2500);
        return () => clearInterval(titleInterval);
    }, [titles.length]);

    // Removed mouse move handler for better performance

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("faizullahofficial0@gmail.com");
        setCopied(true);
        setIsTyping(true);
        setTimeout(() => setCopied(false), 3000);
        setTimeout(() => setIsTyping(false), 1000);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 100, opacity: 0, scale: 0.8 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
            },
        },
    };

    const floatingVariants = {
        initial: { y: 0, rotate: 0 },
        animate: {
            y: [-20, 20, -20],
            rotate: [-3, 3, -3],
            transition: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    const orbitalVariants = {
        animate: (i) => ({
            rotate: 360,
            transition: {
                duration: 20 + i * 2,
                repeat: Infinity,
                ease: "linear",
            },
        }),
    };

    return (
        <motion.div
            className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Removed background animations for better performance */}

            <div className="relative z-10 p-8">
                {/* Enhanced Header Section */}
                <motion.div
                    className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-20 gap-8"
                    variants={itemVariants}
                >
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                        <motion.div
                            className="group relative"
                            whileHover={{ scale: 1.05 }}
                        >
                            <motion.div
                                className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-60"
                                transition={{ duration: 0.3 }}
                            />
                            <a
                                href="mailto:faizullahofficial0@gmail.com?subject=Job Opportunity&body=Hello Faiz,"
                                target="_blank"
                                className="relative flex items-center gap-4 bg-black/40 backdrop-blur-xl rounded-3xl px-8 py-4 border border-white/10"
                            >
                                <motion.div
                                    animate={{
                                        rotate: 360,
                                        scale: [1, 1.2, 1],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                    }}
                                >
                                    <Mail className="w-6 h-6 text-purple-400" />
                                </motion.div>
                                <span className="font-semibold text-white">
                                    faizullahofficial0@gmail.com
                                </span>
                            </a>
                        </motion.div>

                        <motion.button
                            className="relative group px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white rounded-3xl font-bold shadow-2xl overflow-hidden"
                            onClick={handleCopyEmail}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "0%" }}
                                transition={{ duration: 0.5 }}
                            />
                            <AnimatePresence mode="wait">
                                {copied ? (
                                    <motion.span
                                        key="copied"
                                        className="relative z-10 flex items-center gap-2"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                    >
                                        <Trophy className="w-5 h-5" />
                                        Downloaded! 🎉
                                    </motion.span>
                                ) : (
                                    <motion.a
                                        href="/public/Faiz Ullah Khan resume.pdf"
                                        download="FaizUllahKhanResume.pdf"
                                        key="copy"
                                        className="relative z-10 flex items-center gap-2"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                    >
                                        <Download className="w-5 h-5" />
                                        Download CV
                                    </motion.a>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>

                    <motion.div className="flex gap-6">
                        {[
                            {
                                name: "LinkedIn",
                                href: "https://www.linkedin.com/in/faizullahkhan8/",
                                icon: ExternalLink,
                                color: "from-blue-600 to-blue-800",
                            },
                            {
                                name: "GitHub",
                                href: "https://github.com/faizullahkhan8",
                                icon: Code,
                                color: "from-gray-600 to-gray-800",
                            },
                            {
                                name: "Facebook",
                                href: "https://www.facebook.com/faizullahkhan08",
                                icon: Facebook,
                                color: "from-purple-600 to-purple-800",
                            },
                        ].map((social) => (
                            <motion.a
                                key={social.name}
                                href={social.href}
                                className="group relative p-4 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/20 cursor-pointer"
                                whileHover={{ scale: 1.1, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.div
                                    className={`absolute -inset-1 bg-gradient-to-r ${social.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-60`}
                                    transition={{ duration: 0.3 }}
                                />
                                <social.icon className="relative w-6 h-6 text-white" />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Revolutionary Main Content */}
                <motion.div
                    className="flex flex-col items-center gap-12"
                    variants={containerVariants}
                >
                    {/* Orbital Profile Section */}
                    <motion.div
                        className="relative"
                        variants={itemVariants}
                        onHoverStart={() => setIsHovered(true)}
                        onHoverEnd={() => setIsHovered(false)}
                    >
                        {/* Orbital Rings */}
                        {[...Array(3)].map((_, ringIndex) => (
                            <motion.div
                                key={ringIndex}
                                className={`absolute inset-0 rounded-full border-2 border-dashed ${
                                    ringIndex === 0
                                        ? "border-purple-400/30"
                                        : ringIndex === 1
                                        ? "border-pink-400/30"
                                        : "border-blue-400/30"
                                }`}
                                style={{
                                    width: `${300 + ringIndex * 80}px`,
                                    height: `${300 + ringIndex * 80}px`,
                                    left: "50%",
                                    top: "50%",
                                    marginLeft: `-${150 + ringIndex * 40}px`,
                                    marginTop: `-${150 + ringIndex * 40}px`,
                                }}
                                variants={orbitalVariants}
                                animate="animate"
                                custom={ringIndex}
                            />
                        ))}

                        {/* Orbiting Skills */}
                        {skills.map((skill, index) => {
                            const angle = (index * 72 * Math.PI) / 180;
                            const radius = 180;
                            const x = Math.cos(angle) * radius;
                            const y = Math.sin(angle) * radius;

                            return (
                                <motion.div
                                    key={skill.name}
                                    className="absolute"
                                    style={{
                                        left: "50%",
                                        top: "50%",
                                        x: x - 32,
                                        y: y - 32,
                                    }}
                                    animate={{
                                        rotate: -360,
                                        scale: isHovered ? 1.2 : 1,
                                    }}
                                    transition={{
                                        rotate: {
                                            duration: 20,
                                            repeat: Infinity,
                                            ease: "linear",
                                        },
                                        scale: { duration: 0.3 },
                                    }}
                                    whileHover={{ scale: 1.5 }}
                                >
                                    <motion.div
                                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} shadow-2xl flex flex-col items-center justify-center border-2 border-white/20 cursor-pointer group`}
                                        whileHover={{
                                            boxShadow:
                                                "0 25px 50px rgba(0,0,0,0.3)",
                                            rotate: 360,
                                        }}
                                    >
                                        <skill.icon className="w-6 h-6 text-white mb-1" />
                                        <span className="text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                            {skill.level}%
                                        </span>
                                    </motion.div>
                                </motion.div>
                            );
                        })}

                        {/* Central Profile Image */}
                        <motion.div
                            className="relative w-48 h-48 rounded-full overflow-hidden border-8 border-white/20 shadow-2xl z-10"
                            variants={floatingVariants}
                            initial="initial"
                            animate="animate"
                        >
                            <motion.div
                                className="absolute -inset-8 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur-2xl opacity-60"
                                animate={{
                                    scale: isHovered ? 1.3 : 1,
                                    opacity: isHovered ? 0.8 : 0.4,
                                }}
                                transition={{
                                    scale: { duration: 0.4 },
                                    opacity: { duration: 0.4 },
                                }}
                            />
                            <motion.img
                                src={MyPassportSizePic}
                                alt="Faiz Ullah Khan"
                                className="relative w-full h-full object-cover z-10"
                                loading="lazy"
                                whileHover={{
                                    scale: 1.1,
                                    filter: "brightness(1.2) contrast(1.1)",
                                }}
                                transition={{ duration: 0.3 }}
                            />

                            {/* Sparkle effects around image */}
                            {[...Array(12)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
                                    style={{
                                        left: `${
                                            50 +
                                            Math.cos((i * 30 * Math.PI) / 180) *
                                                130
                                        }%`,
                                        top: `${
                                            50 +
                                            Math.sin((i * 30 * Math.PI) / 180) *
                                                130
                                        }%`,
                                    }}
                                    animate={
                                        isHovered
                                            ? {
                                                  scale: [0, 1, 0],
                                                  rotate: [0, 360],
                                                  opacity: [0, 1, 0],
                                              }
                                            : { scale: 0 }
                                    }
                                    transition={{
                                        duration: 2,
                                        delay: i * 0.1,
                                        repeat: isHovered ? Infinity : 0,
                                        ease: "easeInOut",
                                    }}
                                />
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Dynamic Name and Title */}
                    <motion.div
                        className="text-center space-y-8"
                        variants={itemVariants}
                    >
                        <motion.h1
                            className="text-7xl md:text-8xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
                            animate={{
                                backgroundPosition: ["0%", "100%", "0%"],
                                scale: isTyping ? [1, 1.05, 1] : 1,
                            }}
                            transition={{
                                backgroundPosition: {
                                    duration: 3,
                                    repeat: Infinity,
                                },
                                scale: { duration: 0.3 },
                            }}
                            whileHover={{ scale: 1.05 }}
                        >
                            Faiz Ullah Khan
                        </motion.h1>

                        {/* Animated Rotating Titles */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentTitle}
                                className="relative"
                                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                exit={{ opacity: 0, y: -50, rotateX: 90 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <motion.h2
                                    className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${titles[currentTitle].color} bg-clip-text text-transparent flex items-center justify-center gap-4`}
                                >
                                    <motion.div
                                        animate={{
                                            rotate: 360,
                                            scale: [1, 1.2, 1],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                        }}
                                    >
                                        {React.createElement(
                                            titles[currentTitle].icon,
                                            { className: "w-8 h-8 text-white" }
                                        )}
                                    </motion.div>
                                    {titles[currentTitle].text}
                                    <motion.div
                                        animate={{
                                            rotate: -360,
                                            scale: [1, 1.2, 1],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: 1,
                                        }}
                                    >
                                        <Sparkles className="w-6 h-6 text-yellow-400" />
                                    </motion.div>
                                </motion.h2>
                            </motion.div>
                        </AnimatePresence>

                        {/* Status Indicators */}
                        <motion.div
                            className="flex items-center justify-center gap-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.6 }}
                        >
                            {[
                                {
                                    icon: Flame,
                                    label: "Available",
                                    color: "text-green-400",
                                },
                                {
                                    icon: Target,
                                    label: "Focused",
                                    color: "text-blue-400",
                                },
                                {
                                    icon: Zap,
                                    label: "Fast",
                                    color: "text-yellow-400",
                                },
                            ].map((status, index) => (
                                <motion.div
                                    key={status.label}
                                    className="flex items-center gap-2"
                                    animate={{
                                        scale: [1, 1.1, 1],
                                        opacity: [0.7, 1, 0.7],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: index * 0.5,
                                    }}
                                >
                                    <status.icon
                                        className={`w-5 h-5 ${status.color}`}
                                    />
                                    <span className="text-white font-medium">
                                        {status.label}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Epic CTA Section */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-center gap-6"
                        variants={itemVariants}
                    >
                        <motion.a
                            href="mailto:faizullahofficial0@gmail.com?subject=Job Opportunity&body=Hello Faiz,"
                            target="_blank"
                            className="group relative px-16 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white text-xl font-black rounded-3xl shadow-2xl overflow-hidden"
                            whileHover={{
                                scale: 1.05,
                                boxShadow:
                                    "0 25px 50px rgba(147, 51, 234, 0.5)",
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "0%" }}
                                transition={{ duration: 0.5 }}
                            />
                            <motion.span
                                className="relative z-10 flex items-center gap-3"
                                whileHover={{ y: -3 }}
                            >
                                <Rocket className="w-6 h-6" />
                                Let's Build Something Epic!
                                <motion.div
                                    animate={{
                                        x: [0, 10, 0],
                                        rotate: [0, 15, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                    }}
                                >
                                    🚀
                                </motion.div>
                            </motion.span>

                            {/* Epic shine effect */}
                            <motion.div
                                className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                                animate={{
                                    x: ["-100%", "100%"],
                                    opacity: [0, 0.4, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatDelay: 2,
                                }}
                            />
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Hero;
