/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../Feature/UserSlice";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const AnimatedRegister = () => {
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            const response = await axios.post(
                "https://fakestoreapi.com/users",
                {
                    name: fullName,
                    username,
                    email,
                    password,
                }
            );

            if (response.status === 201) {
                dispatch(
                    setUser({
                        id: response.data.id,
                        fullName,
                        email,
                        wishlist: [],
                    })
                );

                toast.success("User registered successfully.");
                navigate("/");
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    };

    // Motion variants
    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="bg-gray min-h-screen flex items-center justify-center p-4 overflow-hidden">
            <motion.div
                className="bg-white shadow-lg p-6 w-full max-w-md rounded-xl border border-primary"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <motion.h2
                    className="text-2xl font-bold text-center text-dark mb-2"
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.1 }}
                >
                    Create Account
                </motion.h2>
                <motion.p
                    className="text-center text-gray-600 text-sm mb-6"
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.2 }}
                >
                    Please register using account details below.
                </motion.p>

                <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.1 } },
                    }}
                >
                    <motion.div variants={fadeUp}>
                        <label className="block text-sm mb-1 text-dark">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-primary"
                        />
                    </motion.div>

                    <motion.div variants={fadeUp}>
                        <label className="block text-sm mb-1 text-dark">
                            Username
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-primary"
                        />
                    </motion.div>

                    <motion.div variants={fadeUp}>
                        <label className="block text-sm mb-1 text-dark">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-primary"
                        />
                    </motion.div>

                    <motion.div variants={fadeUp}>
                        <label className="block text-sm mb-1 text-dark">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-primary"
                        />
                    </motion.div>

                    <motion.button
                        type="submit"
                        className="bg-dark text-light px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed w-full"
                        disabled={loading}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {loading ? (
                            <div className="flex items-center justify-center">
                                <FaSpinner className="animate-spin text-2xl text-white" />
                                <span className="ml-3 text-lg font-semibold text-white">
                                    Loading...
                                </span>
                            </div>
                        ) : (
                            "Create"
                        )}
                    </motion.button>

                    <motion.div
                        className="text-sm mt-4 text-center"
                        variants={fadeUp}
                    >
                        <Link
                            to="/login"
                            className="text-dark hover:text-primary"
                        >
                            Already have an account?
                        </Link>
                    </motion.div>
                </motion.form>
            </motion.div>
        </div>
    );
};

export default AnimatedRegister;
