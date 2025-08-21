/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useTransform,
} from "framer-motion";
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
    const [currentTitle, setCurrentTitle] = useState(0);
    const containerRef = useRef(null);

    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 300], [0, -50]);

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
        }, 3000);
        return () => clearInterval(titleInterval);
    }, [titles.length]);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("faizullahofficial0@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.8, staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    // Background orbs (no mouse tracking)
    const floatingOrbs = useMemo(() => {
        return [...Array(6)].map((_, i) => (
            <motion.div
                key={`orb-${i}`}
                className={`absolute w-4 h-4 rounded-full blur-sm ${
                    i % 3 === 0
                        ? "bg-purple-500/20"
                        : i % 3 === 1
                        ? "bg-pink-500/20"
                        : "bg-blue-500/20"
                }`}
                style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                }}
                animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.6, 0.2] }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                    ease: "easeInOut",
                }}
            />
        ));
    }, []);

    return (
        <motion.div
            ref={containerRef}
            className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Background (mouse-tracked particles removed) */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating Orbs */}
                <motion.div style={{ y: y1 }} className="absolute inset-0">
                    {floatingOrbs}
                </motion.div>

                {/* Center Gradient Orb */}
                <motion.div
                    className="absolute w-96 h-96 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-full blur-3xl pointer-events-none left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <div className="relative z-10 p-8">
                {/* Header Section */}
                <motion.div
                    className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-20 gap-8"
                    variants={itemVariants}
                >
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                        <motion.div
                            className="group relative"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
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
                                <Mail className="w-6 h-6 text-purple-400" />
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
                            },
                            {
                                name: "GitHub",
                                href: "https://github.com/faizullahkhan8",
                                icon: Code,
                            },
                            {
                                name: "Facebook",
                                href: "https://www.facebook.com/faizullahkhan08",
                                icon: Facebook,
                            },
                        ].map((social) => (
                            <motion.a
                                key={social.name}
                                href={social.href}
                                className="group relative p-4 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/20 cursor-pointer"
                                whileHover={{ scale: 1.1, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                            >
                                <social.icon className="relative w-6 h-6 text-white" />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Main Content */}
                <motion.div
                    className="flex flex-col items-center gap-12"
                    variants={containerVariants}
                >
                    {/* Profile + Skills Orbit */}
                    <motion.div
                        className="relative"
                        variants={itemVariants}
                        onHoverStart={() => setIsHovered(true)}
                        onHoverEnd={() => setIsHovered(false)}
                    >
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
                                    whileHover={{ scale: 1.2 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <motion.div
                                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} shadow-2xl flex flex-col items-center justify-center border-2 border-white/20 cursor-pointer group`}
                                    >
                                        <skill.icon className="w-6 h-6 text-white mb-1" />
                                        <span className="text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                            {skill.level}%
                                        </span>
                                    </motion.div>
                                </motion.div>
                            );
                        })}

                        <motion.div
                            className="relative w-48 h-48 rounded-full overflow-hidden border-8 border-white/20 shadow-2xl z-10"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.img
                                src={MyPassportSizePic}
                                alt="Faiz Ullah Khan"
                                className="relative w-full h-full object-cover z-10"
                            />
                            <motion.div
                                className="absolute -inset-8 bg-gradient-to-r from-purple-600/40 via-pink-600/40 to-blue-600/40 rounded-full blur-2xl"
                                animate={{ opacity: isHovered ? 0.8 : 0.4 }}
                                transition={{ duration: 0.4 }}
                            />
                        </motion.div>
                    </motion.div>

                    {/* Name + Rotating Titles */}
                    <motion.div
                        className="text-center space-y-8"
                        variants={itemVariants}
                    >
                        <motion.h1
                            className="text-7xl md:text-8xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            Faiz Ullah Khan
                        </motion.h1>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentTitle}
                                className="relative"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.5 }}
                            >
                                <motion.h2
                                    className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${titles[currentTitle].color} bg-clip-text text-transparent flex items-center justify-center gap-4`}
                                >
                                    {(() => {
                                        const Icon = titles[currentTitle].icon;
                                        return (
                                            <Icon className="w-8 h-8 text-white" />
                                        );
                                    })()}
                                    {titles[currentTitle].text}
                                    <Sparkles className="w-6 h-6 text-yellow-400" />
                                </motion.h2>
                            </motion.div>
                        </AnimatePresence>

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
                            ].map((status) => (
                                <div
                                    key={status.label}
                                    className="flex items-center gap-2"
                                >
                                    <status.icon
                                        className={`w-5 h-5 ${status.color}`}
                                    />
                                    <span className="text-white font-medium">
                                        {status.label}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* CTA */}
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
                            <span className="relative z-10 flex items-center gap-3">
                                <Rocket className="w-6 h-6" />
                                Let's Build Something Epic! 🚀
                            </span>
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Hero;
