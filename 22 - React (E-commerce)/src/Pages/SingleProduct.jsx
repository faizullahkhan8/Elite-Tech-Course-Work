/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { FaHeart, FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../Feature/CartSlice";
import Loading from "../Components/Loading";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const SingleProduct = () => {
    const [productData, setProductData] = useState({});
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const params = useParams();
    const productId = params.id;
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(
                    `https://fakestoreapi.com/products/${productId}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                setProductData(response.data);
                setLoading(false);
            } catch (error) {
                console.log("Error fetching product data:", error);
            }
        })();
    }, [productId]);

    if (loading) {
        return <Loading />;
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="default-padding flex max-sm:flex-col gap-16">
                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.img
                        src={productData.image}
                        alt={productData.title}
                        className="max-w-xs rounded-lg shadow-lg"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                    />
                </motion.div>

                {/* Product Details */}
                <motion.div
                    className="flex flex-col justify-evenly gap-4"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl font-bold">{productData.title}</h2>
                    <p className="text-xl text-gray-600">
                        Available in Stock : 10
                    </p>
                    <h3 className="text-golden text-2xl font-semibold">
                        ${productData.price}
                    </h3>
                    <p className="text-lg text-gray-700">
                        {productData.description}
                    </p>

                    {/* Quantity Selector */}
                    <motion.div
                        className="flex flex-col gap-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <p>Quantity</p>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 border px-3 py-1 rounded">
                                <FaMinus
                                    className="cursor-pointer hover:text-golden"
                                    onClick={() => {
                                        if (quantity > 1) {
                                            setQuantity(quantity - 1);
                                        }
                                    }}
                                />
                                <span className="text-xl">{quantity}</span>
                                <FaPlus
                                    className="cursor-pointer hover:text-golden"
                                    onClick={() => {
                                        setQuantity(quantity + 1);
                                    }}
                                />
                            </div>

                            {/* Add to cart */}
                            <motion.button
                                className="cursor-pointer rounded flex items-center gap-2 p-3 sm:p-2 bg-dark text-white hover:bg-golden hover:text-dark transition-colors"
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {
                                    const payload = {
                                        id: productId,
                                        quantity,
                                        title: productData.title,
                                        price: productData.price,
                                        image: productData.image,
                                        description: productData.description,
                                    };
                                    dispatch(addItem(payload));
                                    toast.success("Item added to cart");
                                }}
                            >
                                Add to cart
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Wishlist */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <button className="cursor-pointer rounded flex items-center gap-2 p-3 sm:p-2 bg-red-600 text-white hover:bg-red-500 transition-colors">
                            <FaHeart /> Add to wishlist
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default SingleProduct;
