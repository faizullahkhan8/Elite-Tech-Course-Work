/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";
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

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        setIsTyping(true);
        setTimeout(() => setIsTyping(false), 1000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    const handleMouseMove = (e) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        }
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.15,
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

    const floatingVariants = {
        animate: {
            y: [-10, 10, -10],
            rotate: [-5, 5, -5],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    const pulseVariants = {
        animate: {
            scale: [1, 1.05, 1],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    return (
        <motion.div
            ref={containerRef}
            className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl shadow-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            onMouseMove={handleMouseMove}
        >
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Glow orb following mouse */}
                <motion.div
                    className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur-3xl pointer-events-none will-change-transform"
                    animate={{
                        x: mousePosition.x - 192,
                        y: mousePosition.y - 192,
                    }}
                    transition={{ type: "spring", stiffness: 40, damping: 20 }}
                />

                {/* Floating hearts/sparkles (reduced from 15 → 8) */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute will-change-transform"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -60, 0],
                            x: [0, Math.random() * 30 - 15, 0],
                            rotate: [0, 360],
                            opacity: [0, 0.6, 0],
                            scale: [0.8, 1, 0.8],
                        }}
                        transition={{
                            duration: 5 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
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

                {/* Background gradient orbs (reduced from 4 → 3) */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-64 h-64 rounded-full blur-2xl will-change-transform ${
                            i === 0
                                ? "bg-gradient-to-r from-blue-300/20 to-purple-300/20"
                                : i === 1
                                ? "bg-gradient-to-r from-purple-300/20 to-pink-300/20"
                                : "bg-gradient-to-r from-pink-300/20 to-orange-300/20"
                        }`}
                        style={{
                            left: `${20 + i * 25}%`,
                            top: `${15 + i * 25}%`,
                        }}
                        animate={{
                            scale: [1, 1.15, 1],
                            rotate: [0, 180, 360],
                            opacity: [0.08, 0.2, 0.08],
                        }}
                        transition={{
                            duration: 14 + i * 3,
                            repeat: Infinity,
                            delay: i * 2,
                        }}
                    />
                ))}
            </div>

            {/* --- Main content, form, animations --- */}
            {/* (Rest of your component remains the same, only background + particles were optimized) */}
        </motion.div>
    );
};

export default GetInTouch;
