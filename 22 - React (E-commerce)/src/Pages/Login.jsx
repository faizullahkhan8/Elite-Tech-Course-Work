/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../Feature/UserSlice";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";
import { motion } from "framer-motion";

const AnimatedLogin = () => {
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
                "https://fakestoreapi.com/auth/login",
                {
                    email,
                    password,
                }
            );

            if (response.status === 200) {
                dispatch(
                    setUser({
                        id: response.data.id,
                        email,
                        wishlist: [],
                    })
                );

                toast.success("User logged in successfully.");
                navigate("/");
            }
        } catch (error) {
            console.log(error.message);
            toast.error("Invalid email or password!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gray min-h-screen flex items-center justify-center p-4">
            {/* Animated Container */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-white shadow-lg p-6 w-full max-w-md rounded-xl border border-primary"
            >
                {/* Title Animation */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl font-bold text-center text-dark mb-2"
                >
                    Login
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-center text-gray-600 text-sm mb-6"
                >
                    Please login using account detail below.
                </motion.p>

                {/* Form Animation */}
                <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >
                    <div>
                        <label className="block text-sm mb-1 text-dark">
                            Email
                        </label>
                        <input
                            type="email"
                            required
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-primary transition"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1 text-dark">
                            Password
                        </label>
                        <input
                            type="password"
                            required
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-primary transition"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            disabled={loading}
                            className="bg-dark text-light px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                            {loading ? (
                                <>
                                    <FaSpinner className="animate-spin text-white mr-2" />
                                    Loading...
                                </>
                            ) : (
                                "Login"
                            )}
                        </motion.button>

                        <Link
                            to="/forgot-password"
                            className="text-sm text-dark hover:text-primary transition-colors"
                        >
                            Forgot your password?
                        </Link>
                    </div>

                    <div className="text-sm mt-4">
                        <Link
                            to="/register"
                            className="text-dark hover:text-primary transition-colors"
                        >
                            Create account
                        </Link>
                    </div>
                </motion.form>
            </motion.div>
        </div>
    );
};

export default AnimatedLogin;
