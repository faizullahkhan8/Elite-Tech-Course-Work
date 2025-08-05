import React from "react";

const Footer = () => {
    return (
        <div className="bg-gray-700 text-white h-[5rem] w-full flex items-center justify-center text-xl">
            <p>
                Elite tech solution alrights reserved @
                {new Date().getFullYear()}
            </p>
        </div>
    );
};

export default Footer;
