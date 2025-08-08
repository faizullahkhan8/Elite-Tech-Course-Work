/* eslint-disable no-unused-vars */
import Card from "../Components/Card";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Loading from "../Components/Loading";
import { useSelector } from "react-redux";

const AnimatedCard = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 }); // Trigger when 20% visible

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
        >
            {children}
        </motion.div>
    );
};

const Home = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const category = useSelector((state) => state.Category);

    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                let response;
                if (category.length > 0) {
                    response = await axios.get(
                        `https://fakestoreapi.com/products/category/${category}`,
                        {
                            headers: {
                                "Content-Type": "application/json",
                            },
                        }
                    );

                    console.log(response.data);
                } else {
                    response = await axios.get(
                        "https://fakestoreapi.com/products",
                        {
                            headers: {
                                "Content-Type": "application/json",
                            },
                        }
                    );
                }
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        })();
    }, [category]);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="default-padding">
            <div className="flex flex-col gap-8">
                <div className="text-center">
                    <h3>
                        <strong>New </strong> <i>Collection</i>{" "}
                        <strong>Of Arrivals</strong>
                    </h3>
                    <p>
                        Browse the collection of our new products, You will
                        definitely find what you are looking for
                    </p>
                </div>

                {/* Product Cards */}
                <div className="grid grid-cols-2 max-sm:grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-4">
                    {data.map((product, index) => (
                        <AnimatedCard key={index}>
                            <Card
                                imageUrl={product.image}
                                name={product.title}
                                price={product.price}
                                productId={product.id}
                                description={product.description}
                            />
                        </AnimatedCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
