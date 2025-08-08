/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { FaBars, FaChevronDown, FaHeart, FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCategory } from "../Feature/CategorySlice";
import axios from "axios";

const navLinks = ["Home", "Shop", "Product", "Blog", "Contact"];

const Navbar = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const cartItems = useSelector((state) => state.Cart);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            try {
                const response = await axios(
                    "https://fakestoreapi.com/products/categories"
                );
                console.log(response.data);
                setCategories(response.data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        })();
    }, []);

    const sidebarVariants = {
        hidden: { opacity: 0, x: "100%" },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
        exit: { opacity: 0, x: "100%", transition: { duration: 0.3 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div>
            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isSideBarOpen && (
                    <motion.div
                        className="fixed w-full z-50 h-screen flex items-center flex-col gap-4 justify-center bg-white"
                        variants={sidebarVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <button
                            onClick={() => setIsSideBarOpen(false)}
                            className="absolute top-4 right-4 text-3xl"
                        >
                            &times;
                        </button>

                        <motion.div
                            className="flex items-center justify-center gap-4"
                            variants={itemVariants}
                        >
                            <FaHeart className="text-2xl cursor-pointer text-red-600" />
                            <Link to="/cart">
                                <FaCartShopping className="text-2xl cursor-pointer" />
                            </Link>
                            <div className="flex flex-col items-center">
                                <p className="flex items-center justify-center rounded-full w-6 h-6 bg-golden text-white">
                                    {cartItems.length}
                                </p>
                                <p className="text-sm">My cart</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="shadow shadow-black/40 rounded flex items-center justify-between py-2 px-4 w-[80%] sm:w-[40%]"
                            variants={itemVariants}
                        >
                            <input
                                type="text"
                                placeholder="Search..."
                                className="outline-none text-xl w-full"
                            />
                            <FaSearch className="text-xl cursor-pointer" />
                        </motion.div>

                        <motion.ul
                            className="flex flex-col items-center gap-2 text-xl"
                            variants={sidebarVariants}
                        >
                            {navLinks.map((item, index) => (
                                <motion.li
                                    key={index}
                                    className="shadow shadow-black/50 cursor-pointer p-1 rounded w-[7rem] text-center flex items-center justify-center gap-2"
                                    variants={itemVariants}
                                >
                                    {item}
                                    {["Home", "Shop", "Product"].includes(
                                        item
                                    ) && <FaChevronDown />}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Top Bar */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray default-padding"
            >
                <div className="flex flex-col sm:flex-row text-center sm:text-left gap-2 sm:gap-4 justify-between">
                    <p>Welcome to Elite-Ecommerce Shopping Store</p>
                    <div className="flex items-center justify-center gap-4">
                        <select className="outline-none border rounded p-1">
                            <option>My Account 1</option>
                            <option>My Account 2</option>
                        </select>
                        <p>USD</p>
                    </div>
                </div>
            </motion.div>

            {/* Main Navbar */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white default-padding flex flex-col gap-2 mt-2"
            >
                {/* Top Row */}
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <span>LOGO</span>
                        <span className="text-xl ml-2 font-bold">
                            Elite-Ecommerce
                        </span>
                    </motion.div>

                    {/* Search */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                        className="shadow shadow-black/40 rounded items-center justify-between py-2 px-4 w-[40%] hidden sm:flex"
                    >
                        <input
                            type="text"
                            placeholder="Search..."
                            className="outline-none text-xl w-full"
                        />
                        <FaSearch className="text-xl cursor-pointer" />
                    </motion.div>

                    {/* Right Icons */}
                    <motion.div
                        className="flex items-center justify-center gap-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <FaHeart className="text-2xl cursor-pointer text-red-600 hidden sm:block" />
                        <Link to="/cart">
                            <FaCartShopping className="text-2xl cursor-pointer" />
                        </Link>
                        <div className="flex-col items-center hidden sm:flex">
                            <p className="flex items-center justify-center rounded-full w-6 h-6 bg-golden text-white">
                                {cartItems.length}
                            </p>
                            <p className="text-sm">My cart</p>
                        </div>
                        <button
                            onClick={() => setIsSideBarOpen((prev) => !prev)}
                            className="block sm:hidden"
                        >
                            <FaBars className="text-xl cursor-pointer" />
                        </button>
                    </motion.div>
                </div>

                {/* Bottom Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="flex items-center gap-4 justify-between"
                >
                    <div
                        onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                        className="cursor-pointer rounded relative flex items-center gap-2 p-3 sm:p-2 bg-dark text-white"
                    >
                        <FaBars />
                        Categories
                        <FaChevronDown />
                        {isCategoryOpen && (
                            <ul className="absolute z-40 left-0 top-full mt-2 bg-white text-dark shadow-md w-48 rounded p-2 space-y-1">
                                {categories.map((category, index) => (
                                    <li
                                        key={index}
                                        onClick={() => {
                                            dispatch(addCategory(category));
                                            setIsCategoryOpen(false);
                                        }}
                                        className="cursor-pointer hover:text-golden capitalize"
                                    >
                                        {category}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className="hidden md:block">
                        <ul className="flex items-center gap-2 text-xl">
                            {navLinks.map((item, index) => (
                                <motion.li
                                    key={index}
                                    className="shadow shadow-black/50 cursor-pointer p-1 rounded w-[7rem] text-center flex items-center justify-center gap-2"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 + index * 0.1 }}
                                >
                                    {item}
                                    {["Home", "Shop", "Product"].includes(
                                        item
                                    ) && <FaChevronDown />}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Navbar;
