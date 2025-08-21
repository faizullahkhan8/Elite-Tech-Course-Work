/* eslint-disable no-unused-vars */
import { useState, useRef, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Send,
    Mail,
    User,
    MessageSquare,
    Heart,
    Sparkles,
    Star,
    Phone,
    MapPin,
    Calendar,
    CheckCircle,
} from "lucide-react";

const GetInTouch = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [focusedField, setFocusedField] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isTyping, setIsTyping] = useState(false);
    const containerRef = useRef(null);

    const handleInputChange = useCallback((field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        setIsTyping(true);
        setTimeout(() => setIsTyping(false), 1000);
    }, []);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
    }, []);

    const handleMouseMove = useCallback(
        (e) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setMousePosition({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                });
            }
        },
        [containerRef]
    );

    const containerVariants = useMemo(
        () => ({
            hidden: { opacity: 0, y: 50 },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.8,
                    staggerChildren: 0.15,
                },
            },
        }),
        []
    );

    const itemVariants = useMemo(
        () => ({
            hidden: { y: 30, opacity: 0 },
            visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.6, ease: "easeOut" },
            },
        }),
        []
    );

    const floatingVariants = useMemo(
        () => ({
            animate: {
                y: [-10, 10, -10],
                rotate: [-5, 5, -5],
                transition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                },
            },
        }),
        []
    );

    const pulseVariants = useMemo(
        () => ({
            animate: {
                scale: [1, 1.05, 1],
                transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                },
            },
        }),
        []
    );

    return (
        <motion.div
            ref={containerRef}
            className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl shadow-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            onMouseMove={handleMouseMove}
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Interactive glow orb following mouse */}
                <motion.div
                    className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur-3xl pointer-events-none"
                    animate={{
                        x: mousePosition.x - 192,
                        y: mousePosition.y - 192,
                    }}
                    transition={{ type: "spring", stiffness: 50, damping: 15 }}
                />

                {/* Floating hearts and sparkles */}
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -50, 0],
                            x: [0, Math.random() * 30 - 15, 0],
                            rotate: [0, 360],
                            scale: [0, 1, 0],
                            opacity: [0, 0.6, 0],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                        }}
                    >
                        {i % 3 === 0 ? (
                            <Heart className="w-4 h-4 text-pink-400" />
                        ) : i % 3 === 1 ? (
                            <Star className="w-3 h-3 text-yellow-400" />
                        ) : (
                            <Sparkles className="w-3 h-3 text-purple-400" />
                        )}
                    </motion.div>
                ))}

                {/* Background gradient orbs */}
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-64 h-64 rounded-full blur-2xl ${
                            i === 0
                                ? "bg-gradient-to-r from-blue-300/20 to-purple-300/20"
                                : i === 1
                                ? "bg-gradient-to-r from-purple-300/20 to-pink-300/20"
                                : i === 2
                                ? "bg-gradient-to-r from-pink-300/20 to-orange-300/20"
                                : "bg-gradient-to-r from-orange-300/20 to-yellow-300/20"
                        }`}
                        style={{
                            left: `${20 + i * 20}%`,
                            top: `${10 + i * 25}%`,
                        }}
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 180, 360],
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: 10 + i * 2,
                            repeat: Infinity,
                            delay: i * 2,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 flex flex-col items-center p-8 min-h-screen justify-center">
                {/* Header Section */}
                <motion.div
                    className="text-center mb-16"
                    variants={itemVariants}
                >
                    <motion.div className="flex items-center justify-center gap-4 mb-6">
                        <motion.div
                            animate={{
                                rotate: [0, 20, -20, 0],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <span className="text-6xl">👋</span>
                        </motion.div>
                        <motion.h1
                            className="text-5xl md:text-7xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                            animate={{
                                backgroundPosition: ["0%", "100%", "0%"],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            Get in Touch
                        </motion.h1>
                        <motion.div
                            animate={{
                                rotate: [0, -20, 20, 0],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5,
                            }}
                        >
                            <Heart className="w-12 h-12 text-pink-500 fill-current" />
                        </motion.div>
                    </motion.div>
                    <motion.p
                        className="text-xl text-gray-600 font-light max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        Let's create something amazing together! Drop me a
                        message and let's turn your vision into reality.
                    </motion.p>
                </motion.div>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row items-center gap-16 w-full max-w-7xl">
                    {/* Animated Character/Image Section */}
                    <motion.div
                        className="flex-1 flex justify-center"
                        variants={itemVariants}
                    >
                        <motion.div
                            className="relative w-80 h-80 bg-gradient-to-br from-white/80 to-gray-100/80 backdrop-blur-sm rounded-full shadow-2xl border border-white/40 flex items-center justify-center overflow-hidden"
                            variants={floatingVariants}
                            animate="animate"
                            whileHover={{ scale: 1.05 }}
                        >
                            {/* Placeholder character - could be replaced with actual image */}
                            <motion.div
                                className="text-9xl"
                                animate={
                                    isTyping
                                        ? {
                                              rotate: [0, 5, -5, 0],
                                              scale: [1, 1.1, 1],
                                          }
                                        : {}
                                }
                                transition={{ duration: 0.5 }}
                            >
                                {isSubmitted ? "🎉" : isTyping ? "⌨️" : "💻"}
                            </motion.div>

                            {/* Orbiting icons */}
                            {[Mail, Phone, MapPin, Calendar].map(
                                (Icon, index) => {
                                    const angle = (index * 90 * Math.PI) / 180;
                                    const radius = 120;
                                    const x = Math.cos(angle) * radius;
                                    const y = Math.sin(angle) * radius;

                                    return (
                                        <motion.div
                                            key={index}
                                            className="absolute w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
                                            style={{
                                                left: "50%",
                                                top: "50%",
                                                x: x - 24,
                                                y: y - 24,
                                            }}
                                            animate={{
                                                rotate: 360,
                                                scale: [1, 1.1, 1],
                                            }}
                                            transition={{
                                                rotate: {
                                                    duration: 20,
                                                    repeat: Infinity,
                                                    ease: "linear",
                                                },
                                                scale: {
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    delay: index * 0.5,
                                                },
                                            }}
                                            whileHover={{ scale: 1.3 }}
                                        >
                                            <Icon className="w-6 h-6 text-white" />
                                        </motion.div>
                                    );
                                }
                            )}

                            {/* Glow effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur-xl"
                                variants={pulseVariants}
                                animate="animate"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Form Section */}
                    <motion.div
                        className="flex-1 w-full max-w-md"
                        variants={itemVariants}
                    >
                        <AnimatePresence>
                            {!isSubmitted ? (
                                <motion.form
                                    onSubmit={handleSubmit}
                                    className="space-y-8"
                                    initial={{ opacity: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Name Input */}
                                    <motion.div
                                        className="relative"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <motion.div
                                            className={`absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-lg opacity-0 transition-opacity duration-300 ${
                                                focusedField === "name"
                                                    ? "opacity-30"
                                                    : ""
                                            }`}
                                        />
                                        <div className="relative">
                                            <User className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                                            <input
                                                type="text"
                                                placeholder="Your awesome name..."
                                                value={formData.name}
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        "name",
                                                        e.target.value
                                                    )
                                                }
                                                onFocus={() =>
                                                    setFocusedField("name")
                                                }
                                                onBlur={() =>
                                                    setFocusedField(null)
                                                }
                                                className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border border-white/40 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/90 transition-all duration-300 text-gray-800 placeholder-gray-500 shadow-lg"
                                            />
                                            <motion.div
                                                className="absolute right-4 top-4"
                                                animate={
                                                    formData.name
                                                        ? {
                                                              scale: [
                                                                  0, 1.2, 1,
                                                              ],
                                                              rotate: [0, 360],
                                                          }
                                                        : { scale: 0 }
                                                }
                                                transition={{ duration: 0.5 }}
                                            >
                                                <CheckCircle className="w-5 h-5 text-green-500" />
                                            </motion.div>
                                        </div>
                                    </motion.div>

                                    {/* Email Input */}
                                    <motion.div
                                        className="relative"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <motion.div
                                            className={`absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur-lg opacity-0 transition-opacity duration-300 ${
                                                focusedField === "email"
                                                    ? "opacity-30"
                                                    : ""
                                            }`}
                                        />
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                                            <input
                                                type="email"
                                                placeholder="your.email@awesome.com"
                                                value={formData.email}
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        "email",
                                                        e.target.value
                                                    )
                                                }
                                                onFocus={() =>
                                                    setFocusedField("email")
                                                }
                                                onBlur={() =>
                                                    setFocusedField(null)
                                                }
                                                className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border border-white/40 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/90 transition-all duration-300 text-gray-800 placeholder-gray-500 shadow-lg"
                                            />
                                            <motion.div
                                                className="absolute right-4 top-4"
                                                animate={
                                                    formData.email
                                                        ? {
                                                              scale: [
                                                                  0, 1.2, 1,
                                                              ],
                                                              rotate: [0, 360],
                                                          }
                                                        : { scale: 0 }
                                                }
                                                transition={{ duration: 0.5 }}
                                            >
                                                <CheckCircle className="w-5 h-5 text-green-500" />
                                            </motion.div>
                                        </div>
                                    </motion.div>

                                    {/* Message Input */}
                                    <motion.div
                                        className="relative"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <motion.div
                                            className={`absolute -inset-1 bg-gradient-to-r from-pink-400 to-orange-400 rounded-2xl blur-lg opacity-0 transition-opacity duration-300 ${
                                                focusedField === "message"
                                                    ? "opacity-30"
                                                    : ""
                                            }`}
                                        />
                                        <div className="relative">
                                            <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                                            <textarea
                                                placeholder="Tell me about your amazing project idea..."
                                                rows="5"
                                                value={formData.message}
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        "message",
                                                        e.target.value
                                                    )
                                                }
                                                onFocus={() =>
                                                    setFocusedField("message")
                                                }
                                                onBlur={() =>
                                                    setFocusedField(null)
                                                }
                                                className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border border-white/40 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/90 transition-all duration-300 text-gray-800 placeholder-gray-500 shadow-lg resize-none"
                                            />
                                            <motion.div
                                                className="absolute right-4 top-4"
                                                animate={
                                                    formData.message
                                                        ? {
                                                              scale: [
                                                                  0, 1.2, 1,
                                                              ],
                                                              rotate: [0, 360],
                                                          }
                                                        : { scale: 0 }
                                                }
                                                transition={{ duration: 0.5 }}
                                            >
                                                <CheckCircle className="w-5 h-5 text-green-500" />
                                            </motion.div>
                                        </div>
                                    </motion.div>

                                    {/* Submit Button */}
                                    <motion.button
                                        type="submit"
                                        className="relative group w-full py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-lg font-bold rounded-2xl shadow-xl overflow-hidden"
                                        whileHover={{
                                            scale: 1.02,
                                            boxShadow:
                                                "0 25px 50px rgba(139, 92, 246, 0.4)",
                                        }}
                                        whileTap={{ scale: 0.98 }}
                                        disabled={
                                            !formData.name ||
                                            !formData.email ||
                                            !formData.message
                                        }
                                    >
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-500"
                                            initial={{ x: "-100%" }}
                                            whileHover={{ x: "0%" }}
                                            transition={{ duration: 0.4 }}
                                        />
                                        <span className="relative z-10 flex items-center justify-center gap-3">
                                            Send My Message
                                            <motion.div
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{
                                                    duration: 1.5,
                                                    repeat: Infinity,
                                                }}
                                            >
                                                <Send className="w-5 h-5" />
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
                                                repeatDelay: 2,
                                            }}
                                        />
                                    </motion.button>
                                </motion.form>
                            ) : (
                                <motion.div
                                    className="text-center space-y-8 py-16"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <motion.div
                                        animate={{
                                            rotate: [0, 360],
                                            scale: [1, 1.2, 1],
                                        }}
                                        transition={{
                                            duration: 1,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        <span className="text-8xl">🎉</span>
                                    </motion.div>
                                    <motion.h3
                                        className="text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent"
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        Message Sent Successfully!
                                    </motion.h3>
                                    <motion.p
                                        className="text-gray-600 text-lg"
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        Thanks for reaching out! I'll get back
                                        to you within 24 hours. Let's build
                                        something amazing together! 🚀
                                    </motion.p>

                                    {/* Celebration particles */}
                                    {[...Array(12)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute"
                                            style={{
                                                left: "50%",
                                                top: "50%",
                                                x:
                                                    Math.cos(
                                                        (i * 30 * Math.PI) / 180
                                                    ) * 100,
                                                y:
                                                    Math.sin(
                                                        (i * 30 * Math.PI) / 180
                                                    ) * 100,
                                            }}
                                            animate={{
                                                scale: [0, 1, 0],
                                                rotate: [0, 720],
                                                opacity: [0, 1, 0],
                                            }}
                                            transition={{
                                                duration: 2,
                                                delay: i * 0.1,
                                                ease: "easeOut",
                                            }}
                                        >
                                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>

                {/* Contact Info Cards */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 w-full max-w-4xl"
                    variants={containerVariants}
                >
                    {[
                        {
                            icon: Mail,
                            label: "Email Me",
                            value: "faizullahofficial0@gmail.com",
                            color: "from-blue-500 to-purple-500",
                        },
                        {
                            icon: Phone,
                            label: "Call Me",
                            value: "+92 332 87 53 453",
                            color: "from-purple-500 to-pink-500",
                        },
                        {
                            icon: MapPin,
                            label: "Visit Me",
                            value: "Bannu, Pakistan",
                            color: "from-pink-500 to-orange-500",
                        },
                    ].map((contact, index) => (
                        <motion.div
                            key={index}
                            className="relative group cursor-pointer"
                            variants={itemVariants}
                            whileHover={{ y: -10, scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                className={`absolute -inset-1 bg-gradient-to-r ${contact.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-30`}
                                transition={{ duration: 0.3 }}
                            />
                            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/40 text-center shadow-lg">
                                <motion.div
                                    className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r ${contact.color} flex items-center justify-center shadow-lg`}
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <contact.icon className="w-6 h-6 text-white" />
                                </motion.div>
                                <h4 className="font-bold text-gray-800 mb-2">
                                    {contact.label}
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    {contact.value}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default GetInTouch;
