/* eslint-disable no-unused-vars */
import { useDispatch } from "react-redux";
import { addItem } from "../Feature/CartSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Card = ({
    imageUrl,
    name,
    price,
    isSale = true,
    discount = 15,
    productId,
    description,
}) => {
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(
            addItem({
                id: productId,
                quantity: 1,
                title: name,
                price: price,
                image: imageUrl,
                description,
            })
        );

        toast.success("Item added to cart");
    };
    return (
        <div className="min-h-max relative flex flex-col gap-2 hover:shadow transition-shadow duration-300">
            {isSale && (
                <div className="absolute top-2 left-2 bg-dark text-white w-14 text-sm text-center">
                    Sale
                </div>
            )}
            {discount > 0 && (
                <div className="absolute top-[2rem] left-2 bg-golden w-14 text-sm text-center">
                    -15%
                </div>
            )}

            <Link to={`/product/${productId}`}>
                <img src={imageUrl} className="w-full h-[12rem] rounded" />
            </Link>
            <h1 className="text-xl font-semibold w-full p-2">{name}</h1>
            <div className="flex items-center justify-between p-2">
                <p className="text-golden">$ {price}</p>
                <motion.div
                    className="relative overflow-hidden cursor-pointer rounded w-[7rem] text-center flex items-center justify-center gap-2 group"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <button
                        onClick={handleAddToCart}
                        className="relative z-30 px-4 py-2 inline-block transition-all duration-300"
                    >
                        {/* Text that ghosts on hover */}
                        <span className="block transition-opacity duration-300 group-hover:opacity-100">
                            Add to cart
                        </span>
                    </button>

                    {/* circle background (pointer-events-none so it doesn't block clicks) */}
                    <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span
                            className="
              absolute w-14 h-14 rounded-full transform scale-0
              group-hover:scale-[6] group-hover:-translate-y-3
              transition-all duration-700 ease-out
              bg-golden
            "
                        />
                    </span>
                </motion.div>
            </div>
        </div>
    );
};

export default Card;
