import axios from "axios";
import { useEffect, useState } from "react";
import { FaHeart, FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../Feature/CartSlice";
import Loading from "../Components/Loading";
import { toast } from "react-toastify";

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
        <div>
            <div className="default-padding flex max-sm:flex-col gap-16">
                <div>
                    <img src={productData.image} />
                </div>
                <div className="flex flex-col justify-evenly gap-4">
                    <h2 className="text-2xl">{productData.title}</h2>
                    <p className="text-xl">Avilible in Stock : 10</p>
                    <h3 className="text-golden text-2xl">
                        ${productData.price}
                    </h3>
                    <p className="text-lg">{productData.description}</p>
                    <div className="flex flex-col gap-2">
                        <p>Quantity</p>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 border px-3 py-1 rounded">
                                <FaMinus
                                    onClick={() => {
                                        if (quantity > 1) {
                                            setQuantity(quantity - 1);
                                        }
                                    }}
                                />
                                <span className="text-xl">{quantity}</span>
                                <FaPlus
                                    onClick={() => {
                                        setQuantity(quantity + 1);
                                    }}
                                />
                            </div>
                            <button
                                className="cursor-pointer rounded flex items-center gap-2 p-3 sm:p-2 bg-dark text-white"
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
                            </button>
                        </div>
                    </div>
                    <div>
                        <button className="cursor-pointer rounded flex items-center gap-2 p-3 sm:p-2 bg-red-600 text-white">
                            <FaHeart /> Add to wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
