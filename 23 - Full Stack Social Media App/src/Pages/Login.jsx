import React, { useState } from "react";
import {
    FaExclamation,
    FaExclamationCircle,
    FaGoogle,
    FaSpinner,
} from "react-icons/fa";
import { useFirebase } from "../Contexts/FirebaseContext";
import { useNavigate } from "react-router";

const Login = () => {
    const firebaseContext = useFirebase();
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            return setError("Please fill all the fields!");
        }
        setLoading(true);
        firebaseContext
            .loginUserWithEmailAndPassword(email, password)
            .then((result) => {
                setError("");
                if (result.user) {
                    navigate("/");
                }
            })
            .catch((error) =>
                setError(error.message.split("/")[1].split("-").join(" "))
            )
            .finally(() => setLoading(false));
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white rounded-xl shadow-md w-full max-w-md p-8">
                <h2 className="text-2xl font-bold text-center mb-2">Login</h2>
                <p className="text-center text-gray-500 mb-6">
                    Not yet registered?{" "}
                    <a
                        href="/register"
                        className="text-blue-600 hover:underline"
                    >
                        Register
                    </a>
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email */}
                    <div>
                        <label className="block text-sm font-semibold mb-1">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-semibold mb-1">
                            Password <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                            required
                        />
                    </div>
                    {error && (
                        <div className="flex items-center gap-2 text-red-500">
                            <FaExclamationCircle />
                            <span>{error}</span>
                        </div>
                    )}
                    <button
                        type="submit"
                        className="w-full flex items-center justify-center max-h-max bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
                    >
                        {Loading ? (
                            <FaSpinner className="animate-spin" />
                        ) : (
                            "Login"
                        )}
                    </button>
                    <p className="font-semibold text-sm text-black/80">
                        Other Methods
                    </p>
                    <div>
                        <div
                            onClick={async (e) => {
                                e.preventDefault();
                                await firebaseContext.loginWithGoogle();
                            }}
                            className="group relative p-2 border border-gray-300 rounded-lg overflow-hidden cursor-pointer"
                        >
                            <p className="relative font-bold z-10 group-hover:text-white flex items-center justify-center gap-2 transition-colors duration-500">
                                Continue with <FaGoogle />
                            </p>
                            <div className="absolute z-0 w-[30rem] h-[30rem] top-full left-[-15%] bg-blue-600 rounded-full group-hover:top-[-300%] transition-all duration-500"></div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
