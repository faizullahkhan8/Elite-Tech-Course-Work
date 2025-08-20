/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    Code,
    Zap,
    ChevronRight,
    Cpu,
    Database,
    Globe,
    Layers,
    Server,
} from "lucide-react";

const Technology = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const technologies = [
        {
            id: 1,
            name: "Express.js",
            icon: Server,
            color: "from-gray-600 to-gray-800",
            bgGradient: "from-gray-50 to-gray-100",
            description: "Fast, unopinionated web framework for Node.js",
            skills: ["REST APIs", "Middleware", "Routing"],
            level: 90,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
            id: 2,
            name: "MongoDB",
            icon: Database,
            color: "from-green-500 to-green-700",
            bgGradient: "from-green-50 to-green-100",
            description: "NoSQL database for modern applications",
            skills: ["Aggregation", "Indexing", "Replication"],
            level: 85,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
            id: 3,
            name: "Next.js",
            icon: Globe,
            color: "from-black to-gray-700",
            bgGradient: "from-gray-50 to-gray-100",
            description: "React framework for production applications",
            skills: ["SSR", "Static Generation", "API Routes"],
            level: 88,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
            id: 4,
            name: "Node.js",
            icon: Cpu,
            color: "from-green-600 to-green-800",
            bgGradient: "from-green-50 to-green-100",
            description: "JavaScript runtime for server-side development",
            skills: ["Event Loop", "Streams", "Modules"],
            level: 92,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
            id: 5,
            name: "React.js",
            icon: Layers,
            color: "from-blue-500 to-blue-700",
            bgGradient: "from-blue-50 to-blue-100",
            description: "Library for building user interfaces",
            skills: ["Hooks", "Context", "Components"],
            level: 95,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
    ];

    // Auto-rotate through technologies
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % technologies.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.15,
            },
        },
    };

    const techVariants = {
        hidden: { y: 60, opacity: 0, scale: 0.8 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                type: "spring",
                stiffness: 120,
            },
        },
    };

    const orbitVariants = {
        animate: {
            rotate: 360,
            transition: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
            },
        },
    };

    const pulseVariants = {
        animate: {
            scale: [1, 1.05, 1],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    return (
        <motion.div
            className="w-full min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-2 h-2 rounded-full ${
                            i % 3 === 0
                                ? "bg-blue-400/30"
                                : i % 3 === 1
                                ? "bg-purple-400/30"
                                : "bg-pink-400/30"
                        }`}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            scale: [1, 2, 1],
                            opacity: [0.3, 0.8, 0.3],
                            x: [0, Math.random() * 100 - 50, 0],
                            y: [0, Math.random() * 100 - 50, 0],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 4,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-8">
                {/* Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div className="flex items-center justify-center gap-4 mb-6">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >
                            <Code className="w-10 h-10 text-purple-600" />
                        </motion.div>
                        <h2 className="text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Tech Arsenal
                        </h2>
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >
                            <Zap className="w-10 h-10 text-blue-600" />
                        </motion.div>
                    </motion.div>
                    <motion.p
                        className="text-2xl text-gray-600 font-light max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        Powered by cutting-edge technologies that bring ideas to
                        life
                    </motion.p>
                </motion.div>

                {/* Central Tech Hub */}
                <div className="relative flex items-center justify-center mb-20">
                    {/* Central Circle */}
                    <motion.div
                        className="relative w-80 h-80 flex items-center justify-center"
                        variants={pulseVariants}
                        animate="animate"
                    >
                        {/* Outer Ring */}
                        <motion.div
                            className="absolute inset-0 rounded-full border-4 border-gradient-to-r from-blue-400/30 to-purple-400/30 shadow-2xl"
                            variants={orbitVariants}
                            animate="animate"
                        />

                        {/* Middle Ring */}
                        <motion.div
                            className="absolute inset-8 rounded-full border-2 border-purple-300/50"
                            animate={{ rotate: -360 }}
                            transition={{
                                duration: 15,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />

                        {/* Inner Circle - Current Tech Display */}
                        <motion.div
                            className={`relative w-48 h-48 rounded-full bg-gradient-to-br ${technologies[currentIndex].bgGradient} shadow-2xl border-4 border-white flex flex-col items-center justify-center`}
                            key={currentIndex}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, type: "spring" }}
                        >
                            <motion.img
                                src={technologies[currentIndex].logo}
                                alt={technologies[currentIndex].name}
                                className="w-16 h-16 mb-3"
                                initial={{ rotate: 180, scale: 0 }}
                                animate={{ rotate: 0, scale: 1 }}
                                transition={{ duration: 0.6, type: "spring" }}
                            />
                            <h3 className="text-lg font-bold text-gray-800 text-center">
                                {technologies[currentIndex].name}
                            </h3>
                            <motion.div
                                className={`w-16 h-1 bg-gradient-to-r ${technologies[currentIndex].color} rounded-full mt-2`}
                                initial={{ width: 0 }}
                                animate={{ width: 64 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                            />
                        </motion.div>

                        {/* Orbiting Tech Icons */}
                        {technologies.map((tech, index) => {
                            const angle = (index * 360) / technologies.length;
                            const radius = 140;
                            const x =
                                Math.cos(((angle - 90) * Math.PI) / 180) *
                                radius;
                            const y =
                                Math.sin(((angle - 90) * Math.PI) / 180) *
                                radius;

                            return (
                                <motion.div
                                    key={tech.id}
                                    className="absolute"
                                    style={{
                                        left: "50%",
                                        top: "50%",
                                        x: x - 24,
                                        y: y - 24,
                                    }}
                                    animate={{
                                        rotate: 360,
                                        scale: index === currentIndex ? 1.2 : 1,
                                    }}
                                    transition={{
                                        rotate: {
                                            duration: 20,
                                            repeat: Infinity,
                                            ease: "linear",
                                        },
                                        scale: { duration: 0.3 },
                                    }}
                                    onClick={() => setCurrentIndex(index)}
                                    whileHover={{ scale: 1.3 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <motion.div
                                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${
                                            tech.color
                                        } shadow-lg cursor-pointer flex items-center justify-center border-2 border-white ${
                                            index === currentIndex
                                                ? "ring-4 ring-white/50"
                                                : ""
                                        }`}
                                        whileHover={{
                                            boxShadow:
                                                "0 20px 40px rgba(0,0,0,0.2)",
                                        }}
                                    >
                                        <tech.icon className="w-6 h-6 text-white" />
                                    </motion.div>
                                </motion.div>
                            );
                        })}

                        {/* Connecting Lines */}
                        <motion.div
                            className="absolute inset-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isHovered ? 0.3 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <svg className="w-full h-full">
                                {technologies.map((_, index) => {
                                    const angle =
                                        (index * 360) / technologies.length;
                                    const radius = 140;
                                    const x =
                                        190 +
                                        Math.cos(
                                            ((angle - 90) * Math.PI) / 180
                                        ) *
                                            radius;
                                    const y =
                                        190 +
                                        Math.sin(
                                            ((angle - 90) * Math.PI) / 180
                                        ) *
                                            radius;

                                    return (
                                        <motion.line
                                            key={index}
                                            x1="190"
                                            y1="190"
                                            x2={x}
                                            y2={y}
                                            stroke="url(#gradient)"
                                            strokeWidth="1"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{
                                                duration: 1,
                                                delay: index * 0.1,
                                            }}
                                        />
                                    );
                                })}
                                <defs>
                                    <linearGradient
                                        id="gradient"
                                        x1="0%"
                                        y1="0%"
                                        x2="100%"
                                        y2="100%"
                                    >
                                        <stop offset="0%" stopColor="#6366f1" />
                                        <stop
                                            offset="100%"
                                            stopColor="#a855f7"
                                        />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Tech Details Cards */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16"
                    variants={containerVariants}
                >
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={tech.id}
                            className={`relative group cursor-pointer ${
                                index === currentIndex ? "z-10" : "z-0"
                            }`}
                            variants={techVariants}
                            onClick={() => setCurrentIndex(index)}
                            whileHover={{ y: -10, scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {/* Glow effect */}
                            <motion.div
                                className={`absolute -inset-1 bg-gradient-to-r ${tech.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-40`}
                                animate={{
                                    opacity: index === currentIndex ? 0.3 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                            />

                            <motion.div
                                className={`relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 overflow-hidden ${
                                    index === currentIndex
                                        ? "ring-2 ring-purple-400"
                                        : ""
                                }`}
                                layout
                            >
                                {/* Corner accent */}
                                <motion.div
                                    className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${tech.color} opacity-10 rounded-bl-2xl`}
                                    animate={{
                                        scale: index === currentIndex ? 1.2 : 1,
                                        opacity:
                                            index === currentIndex ? 0.2 : 0.1,
                                    }}
                                />

                                <div className="relative space-y-4">
                                    <div className="flex items-center gap-3">
                                        <motion.div
                                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-lg`}
                                            whileHover={{ rotate: 180 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <tech.icon className="w-6 h-6 text-white" />
                                        </motion.div>
                                        <h4 className="font-bold text-gray-800">
                                            {tech.name}
                                        </h4>
                                    </div>

                                    <p className="text-sm text-gray-600">
                                        {tech.description}
                                    </p>

                                    {/* Skill Level */}
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-xs text-gray-500">
                                            <span>Proficiency</span>
                                            <span>{tech.level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <motion.div
                                                className={`h-2 bg-gradient-to-r ${tech.color} rounded-full`}
                                                initial={{ width: 0 }}
                                                animate={{
                                                    width:
                                                        index === currentIndex
                                                            ? `${tech.level}%`
                                                            : "0%",
                                                }}
                                                transition={{
                                                    duration: 0.8,
                                                    delay: 0.2,
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Skills Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {tech.skills.map(
                                            (skill, skillIndex) => (
                                                <motion.span
                                                    key={skill}
                                                    className={`px-2 py-1 text-xs bg-gradient-to-r ${tech.color} text-white rounded-lg`}
                                                    initial={{
                                                        opacity: 0,
                                                        scale: 0,
                                                    }}
                                                    animate={{
                                                        opacity:
                                                            index ===
                                                            currentIndex
                                                                ? 1
                                                                : 0.7,
                                                        scale:
                                                            index ===
                                                            currentIndex
                                                                ? 1
                                                                : 0.9,
                                                    }}
                                                    transition={{
                                                        delay: skillIndex * 0.1,
                                                        duration: 0.3,
                                                    }}
                                                    whileHover={{ scale: 1.1 }}
                                                >
                                                    {skill}
                                                </motion.span>
                                            )
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Progress Indicators */}
                <motion.div
                    className="flex justify-center gap-3 mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                >
                    {technologies.map((_, index) => (
                        <motion.button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all ${
                                index === currentIndex
                                    ? "bg-purple-600 w-8"
                                    : "bg-gray-300 hover:bg-gray-400"
                            }`}
                            onClick={() => setCurrentIndex(index)}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                        />
                    ))}
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                >
                    <a href="https://github.com/faizullahkhan8" target="_blank">
                        <motion.button
                            className="relative group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-semibold rounded-2xl shadow-xl overflow-hidden"
                            whileHover={{
                                scale: 1.05,
                                boxShadow:
                                    "0 25px 50px rgba(99, 102, 241, 0.4)",
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "0%" }}
                                transition={{ duration: 0.4 }}
                            />
                            <span className="relative z-10 flex items-center gap-2">
                                Explore My Work
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                    }}
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </motion.div>
                            </span>
                        </motion.button>
                    </a>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Technology;
