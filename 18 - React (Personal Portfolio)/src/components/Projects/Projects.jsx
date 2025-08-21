/* eslint-disable no-unused-vars */
import { useState, useMemo, useCallback } from "react";
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

    // Memoize the projects array so it's not recreated on every render
    const projects = useMemo(
        () => [
            {
                id: 1,
                title: "Let's Connekt",
                description:
                    "A mini social media app inspired from FACEBOOK desktop.",
                image: projectImages.letsConnekt,
                github: "https://github.com/faizullahkhan8/Elite-Tech-Course-Work/tree/master/23%20-%20Full%20Stack%20Social%20Media%20App",
                liveUrl: "https://lets-connekt.surge.sh",
                tags: ["React", "Imagekit.io", "Firebase"],
                category: "fullstack",
                color: "from-blue-500 to-purple-600",
            },
            {
                id: 2,
                title: "Elite E-Commerce",
                description:
                    "An E-Commerce app with the funtions that are normally founded in the traditional apps",
                image: projectImages.eliteEcommerce,
                github: "https://github.com/faizullahkhan8/Elite-Tech-Course-Work/",
                liveUrl: "https://elite-ecommerce-store.vercel.app/",
                tags: ["React", "fakeapi"],
                category: "fullstack",
                color: "from-green-500 to-teal-600",
            },
            {
                id: 3,
                title: "Student Management System",
                description: "Basic SMS that has basic CRUD opertions.",
                image: projectImages.studentMangementSystem,
                tags: ["React", "React-Redux", "Tailwind"],
                github: "https://github.com/faizullahkhan8/Elite-Tech-Course-Work/",
                liveUrl:
                    "https://student-management-system-eight-lovat.vercel.app/",
                category: "frontend",
                color: "from-orange-500 to-red-600",
            },
            {
                id: 4,
                title: "E-Medicine Pakistan",
                description:
                    "My FYP project that has more advanced funtions. Its under-progress and you can see only its code.",
                image: projectImages.EMedicine,
                github: "https://github.com/faizullahkhan8/EMedicine",
                tags: [
                    "Next.js",
                    "MongoDb",
                    "Socket.io",
                    "Nodejs",
                    "Express",
                    "Formik & Yup",
                    "Redux",
                    "Tailwind",
                ],
                category: "fullstack",
                color: "from-pink-500 to-purple-600",
            },
            {
                id: 5,
                title: "Learning Mangement System",
                description:
                    "A fullstack LMS with all the funtions. Following Youtube(Becodemy) course and create along. This project is underprogress ",
                image: projectImages.LMS,
                github: "https://github.com/faizullahkhan8/learning-management-system",
                tags: [
                    "Next.js",
                    "MongoDb",
                    "Socket.io",
                    "Nodejs",
                    "Express",
                    "Formik & Yup",
                    "Redux",
                    "Tailwind",
                ],
                category: "fullstack",
                color: "from-pink-500 to-purple-600",
            },
            {
                id: 6,
                title: "Currency Exchange App",
                description:
                    "A very basic level app. I create this in the begging of the coding journey.",
                image: projectImages.CurrencyExchangeApp,
                github: "https://github.com/faizullahkhan8/Elite-Tech-Course-Work/",
                liveUrl: "https://currency-exchange-by-faizullah.surge.sh",
                tags: ["React", "Redux", "Tailwind", "External API"],
                category: "frontend",
                color: "from-pink-500 to-purple-600",
            },
            {
                id: 7,
                title: "Simple Weather App",
                description:
                    "A very basic level app. I create this in the begging of the coding journey.",
                image: projectImages.weatherAppImage,
                github: "https://github.com/faizullahkhan8/Elite-Tech-Course-Work/",
                liveUrl: "https://weather-app-by-faizullah.surge.sh",
                tags: ["React", "Tailwind", "External API"],
                category: "frontend",
                color: "from-pink-500 to-purple-600",
            },
        ],
        []
    );

    // Memoize filtered projects if filtering is used
    const filteredProjects = useMemo(() => {
        if (activeFilter === "all") return projects;
        return projects.filter((p) => p.category === activeFilter);
    }, [projects, activeFilter]);

    // Memoize handlers
    const handleMouseEnter = useCallback((id) => setHoveredCard(id), []);
    const handleMouseLeave = useCallback(() => setHoveredCard(null), []);
    const handleFilterChange = useCallback(
        (filter) => setActiveFilter(filter),
        []
    );

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

    const cardVariants = {
        hidden: { y: 60, opacity: 0, scale: 0.95 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
            },
        },
    };

    const titleVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const backgroundVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 0.1,
            transition: { duration: 1.2, ease: "easeOut" },
        },
    };

    return (
        <motion.div
            className="w-full min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 p-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-64 h-64 rounded-full bg-gradient-to-r ${
                            i % 2 === 0
                                ? "from-blue-200/20 to-purple-200/20"
                                : "from-pink-200/20 to-orange-200/20"
                        } blur-3xl`}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        variants={backgroundVariants}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.2, 0.1],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: 10 + Math.random() * 10,
                            repeat: Infinity,
                            delay: Math.random() * 5,
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
                                duration: 3,
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
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >
                            <Sparkles className="w-8 h-8 text-purple-500" />
                        </motion.div>
                    </motion.div>
                    <motion.p
                        className="text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        Crafting digital experiences that make me
                        <motion.span
                            className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold"
                            animate={{
                                backgroundPosition: ["0%", "100%", "0%"],
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            {" "}
                            stand out from the crowd
                        </motion.span>
                    </motion.p>
                </motion.div>

                {/* Filter Buttons */}
                <motion.div
                    className="flex justify-center gap-4 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    {["all", "fullstack", "frontend"].map((filter) => (
                        <motion.button
                            key={filter}
                            className={`px-6 py-3 rounded-2xl font-medium transition-all capitalize ${
                                activeFilter === filter
                                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                                    : "bg-white/70 backdrop-blur-sm text-gray-700 hover:bg-white/90"
                            }`}
                            onClick={() => handleFilterChange(filter)}
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
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="group relative"
                                variants={cardVariants}
                                layout
                                onHoverStart={() =>
                                    handleMouseEnter(project.id)
                                }
                                onHoverEnd={handleMouseLeave}
                                whileHover={{ y: -10 }}
                            >
                                {/* Glow Effect */}
                                <motion.div
                                    className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30`}
                                    transition={{ duration: 0.4 }}
                                />

                                {/* Main Card */}
                                <motion.div
                                    className="relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-white/20"
                                    whileHover={{
                                        boxShadow:
                                            "0 25px 50px rgba(0,0,0,0.15)",
                                        scale: 1.02,
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Image Container */}
                                    <div className="relative overflow-hidden h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                                        <motion.img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.4 }}
                                        />

                                        {/* Overlay on hover */}
                                        <motion.div
                                            className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4"
                                            initial={{ opacity: 0 }}
                                            animate={{
                                                opacity:
                                                    hoveredCard === project.id
                                                        ? 1
                                                        : 0,
                                            }}
                                            transition={{ duration: 0.3 }}
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

                                        {/* Floating particles */}
                                        {hoveredCard === project.id &&
                                            [...Array(5)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="absolute w-1 h-1 bg-white rounded-full"
                                                    style={{
                                                        left: `${
                                                            Math.random() * 100
                                                        }%`,
                                                        top: `${
                                                            Math.random() * 100
                                                        }%`,
                                                    }}
                                                    animate={{
                                                        y: [-20, -60],
                                                        opacity: [1, 0],
                                                        scale: [1, 0],
                                                    }}
                                                    transition={{
                                                        duration: 1.5,
                                                        repeat: Infinity,
                                                        delay: i * 0.2,
                                                    }}
                                                />
                                            ))}
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
                                                                0.1 * tagIndex,
                                                            duration: 0.3,
                                                            type: "spring",
                                                        }}
                                                        whileHover={{
                                                            scale: 1.1,
                                                        }}
                                                    >
                                                        {tag}
                                                    </motion.span>
                                                )
                                            )}
                                        </motion.div>

                                        {/* Action Buttons - Mobile Fallback */}
                                        <div className="flex items-center justify-between pt-2 md:hidden">
                                            <motion.button
                                                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Eye className="w-4 h-4" />
                                                Live Demo
                                            </motion.button>
                                            <motion.button
                                                className="flex items-center gap-2 text-gray-600 hover:text-gray-700 font-medium"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Github className="w-4 h-4" />
                                                Github
                                            </motion.button>
                                        </div>
                                    </div>

                                    {/* Corner Accent */}
                                    <motion.div
                                        className={`absolute top-4 right-4 w-3 h-3 bg-gradient-to-r ${project.color} rounded-full`}
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            opacity: [0.7, 1, 0.7],
                                        }}
                                        transition={{
                                            duration: 2,
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
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
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
                                    "0 25px 50px rgba(59, 130, 246, 0.4)",
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
