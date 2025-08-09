import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
    const phoneNumber = "923328753452"; // without +
    const defaultMessage = "Hello! I want to know more about your products.";

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                defaultMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 z-50 
                 bg-green-500 hover:bg-green-600 
                 text-white rounded-full p-4 
                 shadow-lg flex items-center justify-center
                 transition-all duration-300
                 w-14 h-14 sm:w-16 sm:h-16"
            aria-label="WhatsApp Chat"
        >
            <FaWhatsapp className="text-3xl sm:text-4xl" />
        </a>
    );
};

export default FloatingWhatsApp;
