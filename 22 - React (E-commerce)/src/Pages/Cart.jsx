import { useSelector, useDispatch } from "react-redux";
import { FaMinus, FaPlus } from "react-icons/fa";
import { clearCart, removeItem, updateQuantity } from "../Feature/CartSlice";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.Cart);
    const navigate = useNavigate();

    const handleQuantityChange = (id, quantity) => {
        if (quantity > 0) {
            dispatch(updateQuantity({ id, quantity }));
            toast.success("Quantity updated successfully!");
        }
    };

    const handleRemove = (id) => {
        dispatch(removeItem({ id }));
        toast.success("Item removed from cart");
    };

    return (
        <div className="default-padding bg-white">
            {/* Responsive Table Wrapper */}
            <div className="w-full overflow-x-auto">
                <table className="min-w-[640px] w-full border-collapse border border-gray-300 text-center">
                    <thead>
                        <tr className="bg-gray text-dark text-sm">
                            <th className="border p-2">Image</th>
                            <th className="border p-2">Product</th>
                            <th className="border p-2">Price</th>
                            <th className="border p-2">Quantity</th>
                            <th className="border p-2">Total</th>
                            <th className="border p-2">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.length === 0 ? (
                            <tr>
                                <td colSpan="6" className="py-10 text-gray-500">
                                    Your cart is empty.
                                </td>
                            </tr>
                        ) : (
                            cartItems.map((item) => (
                                <tr key={item.id} className="text-dark">
                                    <td className="border p-2">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-16 h-16 md:w-24 md:h-24 object-contain mx-auto"
                                        />
                                    </td>
                                    <td className="border p-2 text-sm md:text-lg">
                                        {item.title}
                                    </td>
                                    <td className="border p-2 text-golden font-semibold">
                                        ${item.price.toFixed(2)}
                                    </td>
                                    <td className="border p-2">
                                        <div className="flex justify-center items-center gap-2 border rounded px-2 py-1 w-fit mx-auto">
                                            <FaMinus
                                                className="cursor-pointer"
                                                onClick={() =>
                                                    handleQuantityChange(
                                                        item.id,
                                                        item.quantity - 1
                                                    )
                                                }
                                            />
                                            <span className="text-dark font-semibold">
                                                {item.quantity}
                                            </span>
                                            <FaPlus
                                                className="cursor-pointer"
                                                onClick={() =>
                                                    handleQuantityChange(
                                                        item.id,
                                                        item.quantity + 1
                                                    )
                                                }
                                            />
                                        </div>
                                    </td>
                                    <td className="border p-2 text-golden font-semibold">
                                        $
                                        {(item.price * item.quantity).toFixed(
                                            2
                                        )}
                                    </td>
                                    <td className="border p-2">
                                        <button
                                            className="text-red-600 text-xl font-bold"
                                            onClick={() =>
                                                handleRemove(item.id)
                                            }
                                        >
                                            ×
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link
                    to={"/"}
                    className="bg-dark text-light px-4 py-2 rounded text-center"
                >
                    Update Cart
                </Link>
                <button
                    onClick={() => {
                        toast.success(
                            "Checkout functionality is not implemented yet!"
                        );
                        navigate("/");
                    }}
                    className="bg-dark text-light px-4 py-2 rounded text-center"
                >
                    Checkout
                </button>
                <button
                    onClick={() => {
                        dispatch(clearCart());
                        toast.success("Cart cleared successfully!");
                    }}
                    className="bg-dark text-light px-4 py-2 rounded text-center"
                >
                    Clear Cart
                </button>
            </div>
        </div>
    );
};

export default Cart;
