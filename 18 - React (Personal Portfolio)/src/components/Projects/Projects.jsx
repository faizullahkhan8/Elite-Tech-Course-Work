/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Eye, Sparkles, ArrowUpRight, Play } from "lucide-react";
import EMedicineImage from "../../assets/emedicine-screenshot.png";
import ECommerceImage from "../../assets/elite-ecommerce-app-screenshot.png";
import StudentMangementSystemImage from "../../assets/student-mangement-system-screenshot.png";
import CurrencyExchangeAppImage from "../../assets/currency-exchange-app-screenshot.png";
import LMSImage from "../../assets/lms-screenshot.png";
import BlogApp from "../../assets/website-blog.jpg";
import letConnektScreenShot from "../../assets/lets-connekt-app-screenshot.png";
import quizAppImage from "../../assets/quiz-app-screenshot.png";
import weatherAppImage from "../../assets/weather-app-screenshot.png";

// Using placeholder images since we can't access the originals
const projectImages = {
    letsConnekt: letConnektScreenShot,
    eliteEcommerce: ECommerceImage,
    studentMangementSystem: StudentMangementSystemImage,
    CurrencyExchangeApp: CurrencyExchangeAppImage,
    EMedicine: EMedicineImage,
    quizAppImage,
    LMS: LMSImage,
    WebsiteBlog: BlogApp,
    weatherAppImage,
};

const Projects = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [activeFilter, setActiveFilter] = useState("all");

    const projects = [
        // ... same project data as before
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut",
            },
        },
    };

    const titleVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    const backgroundVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 0.08,
            transition: { duration: 1, ease: "easeOut" },
        },
    };

    return (
        <motion.div
            className="w-full min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 p-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Animated background elements (reduced to 4 for performance) */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-64 h-64 rounded-full bg-gradient-to-r ${
                            i % 2 === 0
                                ? "from-blue-200/20 to-purple-200/20"
                                : "from-pink-200/20 to-orange-200/20"
                        } blur-3xl will-change-transform`}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        variants={backgroundVariants}
                        animate={{
                            scale: [1, 1.15, 1],
                            opacity: [0.08, 0.15, 0.08],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header Section */}
                <motion.div
                    className="text-center mb-16"
                    variants={titleVariants}
                >
                    <motion.div className="flex items-center justify-center gap-3 mb-6">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >
                            <Sparkles className="w-8 h-8 text-yellow-500" />
                        </motion.div>
                        <h1 className="text-6xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                            My Projects
                        </h1>
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >
                            <Sparkles className="w-8 h-8 text-purple-500" />
                        </motion.div>
                    </motion.div>
                    <motion.p
                        className="text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Crafting digital experiences that make me
                        <motion.span
                            className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold"
                            animate={{
                                backgroundPosition: ["0%", "100%", "0%"],
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                        >
                            {" "}
                            stand out from the crowd
                        </motion.span>
                    </motion.p>
                </motion.div>

                {/* Filter Buttons */}
                <motion.div
                    className="flex justify-center gap-4 mb-12"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                >
                    {["all", "fullstack", "frontend"].map((filter) => (
                        <motion.button
                            key={filter}
                            className={`px-6 py-3 rounded-2xl font-medium transition-all capitalize ${
                                activeFilter === filter
                                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                                    : "bg-white/70 backdrop-blur-sm text-gray-700 hover:bg-white/90"
                            }`}
                            onClick={() => setActiveFilter(filter)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {filter === "all" ? "All Projects" : filter}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                >
                    <AnimatePresence>
                        {projects
                            .filter(
                                (project) =>
                                    activeFilter === "all" ||
                                    project.category === activeFilter
                            )
                            .map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    className="group relative will-change-transform"
                                    variants={cardVariants}
                                    layout
                                    onHoverStart={() =>
                                        setHoveredCard(project.id)
                                    }
                                    onHoverEnd={() => setHoveredCard(null)}
                                    whileHover={{ y: -6 }}
                                >
                                    {/* Glow Effect */}
                                    <motion.div
                                        className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30`}
                                        transition={{ duration: 0.3 }}
                                    />

                                    {/* Main Card */}
                                    <motion.div
                                        className="relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-white/20"
                                        whileHover={{
                                            boxShadow:
                                                "0 12px 30px rgba(0,0,0,0.12)",
                                            scale: 1.01,
                                        }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        {/* Image Container */}
                                        <div className="relative overflow-hidden h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                                            <motion.img
                                                src={project.image}
                                                alt={project.title}
                                                loading="lazy"
                                                className="w-full h-full object-cover"
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.3 }}
                                            />

                                            {/* Overlay on hover */}
                                            <motion.div
                                                className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4"
                                                initial={{ opacity: 0 }}
                                                animate={{
                                                    opacity:
                                                        hoveredCard ===
                                                        project.id
                                                            ? 1
                                                            : 0,
                                                }}
                                                transition={{ duration: 0.25 }}
                                            >
                                                {project.liveUrl && (
                                                    <motion.a
                                                        href={project.liveUrl}
                                                        target="_blank"
                                                        className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-white/30 transition-colors"
                                                        whileHover={{
                                                            scale: 1.05,
                                                        }}
                                                        whileTap={{
                                                            scale: 0.95,
                                                        }}
                                                    >
                                                        <Play className="w-4 h-4" />
                                                        Live Demo
                                                    </motion.a>
                                                )}
                                                <motion.a
                                                    href={project.github}
                                                    target="_blank"
                                                    className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-white/30 transition-colors"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <Github className="w-4 h-4" />
                                                    Code
                                                </motion.a>
                                            </motion.div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 space-y-4">
                                            <motion.h4
                                                className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors"
                                                layout
                                            >
                                                {project.title}
                                            </motion.h4>

                                            <motion.p
                                                className="text-gray-600 text-sm leading-relaxed"
                                                layout
                                            >
                                                {project.description}
                                            </motion.p>

                                            {/* Tags */}
                                            <motion.div
                                                className="flex flex-wrap gap-2"
                                                layout
                                            >
                                                {project.tags.map(
                                                    (tag, tagIndex) => (
                                                        <motion.span
                                                            key={tag}
                                                            className={`px-3 py-1 text-xs font-medium bg-gradient-to-r ${project.color} text-white rounded-full`}
                                                            initial={{
                                                                opacity: 0,
                                                                scale: 0,
                                                            }}
                                                            animate={{
                                                                opacity: 1,
                                                                scale: 1,
                                                            }}
                                                            transition={{
                                                                delay:
                                                                    0.05 *
                                                                    tagIndex,
                                                                duration: 0.25,
                                                            }}
                                                            whileHover={{
                                                                scale: 1.05,
                                                            }}
                                                        >
                                                            {tag}
                                                        </motion.span>
                                                    )
                                                )}
                                            </motion.div>
                                        </div>

                                        {/* Corner Accent */}
                                        <motion.div
                                            className={`absolute top-4 right-4 w-3 h-3 bg-gradient-to-r ${project.color} rounded-full`}
                                            animate={{
                                                scale: [1, 1.15, 1],
                                                opacity: [0.6, 1, 0.6],
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                delay: index * 0.2,
                                            }}
                                        />
                                    </motion.div>
                                </motion.div>
                            ))}
                    </AnimatePresence>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <a
                        href="https://github.com/faizullahkhan8?tab=repositories"
                        target="_blank"
                    >
                        <motion.button
                            className="relative group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-2xl shadow-xl overflow-hidden"
                            whileHover={{
                                scale: 1.05,
                                boxShadow:
                                    "0 20px 40px rgba(59, 130, 246, 0.3)",
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
                                View All Projects
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                    }}
                                >
                                    <ArrowUpRight className="w-5 h-5" />
                                </motion.div>
                            </span>
                        </motion.button>
                    </a>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Projects;
