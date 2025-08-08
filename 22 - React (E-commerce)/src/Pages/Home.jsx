/* eslint-disable no-unused-vars */
import Card from "../Components/Card";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import axios from "axios";

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

    useState(() => {
        (async () => {
            const response = await axios.get(
                "https://fakestoreapi.com/products"
            );

            setData(response.data);
        })();
    }, []);

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
                            />
                        </AnimatedCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
