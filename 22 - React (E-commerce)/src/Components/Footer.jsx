/* eslint-disable no-unused-vars */
import {
    FaAndroid,
    FaApple,
    FaGoogle,
    FaInstagram,
    FaLinkedin,
    FaMailBulk,
    FaPinterest,
    FaTwitter,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const FadeInSection = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

const Footer = () => {
    return (
        <FadeInSection>
            <div>
                {/* Top Footer Section */}
                <div className="bg-dark w-full min-h-max px-[5rem] py-[3rem] text-white">
                    <div className="flex gap-4 justify-between w-full max-sm:flex-wrap">
                        <div className="w-full flex flex-col gap-4">
                            <div>
                                <h3 className="text-lg font-semibold">
                                    Need Help?
                                </h3>
                                <p className="text-gray-300">
                                    Call: +92 3328753452
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">
                                    Products & Sales
                                </h3>
                                <p className="text-gray-300">
                                    Call: +92 3328753452
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">
                                    Check Order Status
                                </h3>
                                <p className="text-gray-300">
                                    Call: +92 3328753452
                                </p>
                            </div>
                        </div>

                        <div className="w-full flex flex-col gap-4">
                            <h3 className="text-lg font-semibold">Products</h3>
                            <p className="text-gray-300">New and sale badge</p>
                            <p className="text-gray-300">Countdown product</p>
                            <p className="text-gray-300">Variable product</p>
                            <p className="text-gray-300">Soldout product</p>
                            <p className="text-gray-300">Simple product</p>
                            <p className="text-gray-300">
                                Simple affiliate product
                            </p>
                        </div>

                        <div className="w-full flex flex-col gap-4">
                            <h3 className="text-lg font-semibold">
                                Our Company
                            </h3>
                            <p className="text-gray-300">About</p>
                            <p className="text-gray-300">Size Chart</p>
                            <p className="text-gray-300">Shipping Policy</p>
                            <p className="text-gray-300">All Products</p>
                            <p className="text-gray-300">Whishlist</p>
                            <p className="text-gray-300">Contact</p>
                        </div>

                        <div className="w-full flex flex-col gap-4">
                            <h3 className="text-lg font-semibold">
                                Newsletter
                            </h3>
                            <div className="flex items-center justify-center border-b p-1">
                                <input
                                    type="text"
                                    className="outline-none w-full h-full"
                                    placeholder="Enter your email"
                                />
                                <FaMailBulk className="text-xl" />
                            </div>
                            <h3 className="text-lg font-semibold">Address</h3>
                            <p className="text-gray-300">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing
                            </p>
                            <p className="text-gray-300">Pakistan</p>
                        </div>
                    </div>
                </div>

                {/* Middle Section */}
                <div className="bg-dark w-full default-padding min-h-max border-y border-white/50 text-white flex items-center justify-between max-sm:flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <p>Free Apps:</p>
                        <div className="flex items-center gap-2 py-1 px-2 rounded bg-gray-600 max-sm:flex-col text-center">
                            <FaApple />
                            Apple Store
                        </div>
                        <div className="flex items-center gap-2 py-1 px-2 rounded bg-green-500 max-sm:flex-col text-center">
                            <FaAndroid />
                            Google Play
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <p>Follow Us:</p>
                        <div className="flex items-center justify-center gap-2">
                            <FaTwitter />
                            <FaInstagram />
                            <FaGoogle />
                            <FaLinkedin />
                            <FaPinterest />
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="bg-dark w-full px-[5rem] py-[4rem] min-h-max text-white flex flex-col items-center justify-center gap-2">
                    <div className="w-max flex max-sm:flex-col gap-4">
                        <p>About</p>
                        <p>Blog</p>
                        <p>Elit Policy</p>
                        <p>Account</p>
                        <p>Whishlist</p>
                        <p>Contact</p>
                    </div>
                    <div className="text-center">
                        Copyright @ {new Date().getFullYear()} Elite All Rights
                        Reserved.
                    </div>
                    <div className="text-center">
                        Made with <span className="text-red-500">❤</span> by
                        <Link
                            to={"https://faiz-ullah-khan-portfolio.vercel.app/"}
                            className="text-golden font-semibold"
                        >
                            {" "}
                            Faiz Ullah Khan
                        </Link>
                        <br />
                        <Link
                            to={
                                "https://wa.me/923328753452?text=" +
                                encodeURIComponent("Assalam-u-ghalikum!")
                            }
                            className="text-golden font-semibold"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                        >
                            Send AOA to WhatsApp
                        </Link>
                    </div>
                </div>
            </div>
        </FadeInSection>
    );
};

export default Footer;
