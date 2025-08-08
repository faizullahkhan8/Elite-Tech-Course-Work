import { useDispatch } from "react-redux";
import { addItem } from "../Feature/CartSlice";

const Card = ({
    imageUrl,
    name,
    price,
    isSale = true,
    discount = 15,
    productId,
}) => {
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addItem({ id: productId, quantity: 1 }));
    };
    return (
        <div className="min-h-max relative flex flex-col gap-2">
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

            <div>
                <img src={imageUrl} className="w-full h-[12rem] rounded" />
            </div>
            <h1 className="text-xl font-semibold w-full">{name}</h1>
            <div className="flex items-center justify-between">
                <p className="text-golden">$ {price}</p>
                <button
                    onClick={handleAddToCart}
                    className="border px-3 py-1 rounded cursor-pointer"
                >
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default Card;
