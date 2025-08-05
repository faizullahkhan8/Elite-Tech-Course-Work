import React from "react";

const Navbar = () => {
    return (
        <div className="w-full flex items-center justify-between bg-green-800 text-white p-4">
            <h1 className="text-2xl font-bold">Student Management System</h1>
            <div className="shadow shadow-black rounded-xl px-4 py-2 outline-none bg-white text-black font-bold ">
                <span>Login</span> / <span>sign up</span>
            </div>
        </div>
    );
};

export default Navbar;
