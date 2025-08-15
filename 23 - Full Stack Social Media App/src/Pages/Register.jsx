import { useState } from "react";
import { FaExclamationCircle, FaGoogle, FaSpinner } from "react-icons/fa";
import { useFirebase } from "../Contexts/FirebaseContext";
import { useNavigate } from "react-router";

const RegisterForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [Loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const firebase = useFirebase();
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password || !confirmPassword) {
            return setError("Please fill all the fields!");
        }

        if (password.length < 8) {
            return setError("Password must be atleast 8 characters!");
        }

        if (password !== confirmPassword) {
            return setError("Password must match with confirm password!");
        }

        setLoading(true);
        firebase
            .signupUserWithEmailAndPassword(email, password)
            .then((response) => {
                setError("");
                if (response.user) {
                    navigate("/complete-your-profile");
                }
            })
            .catch((error) =>
                setError(error.code.split("/")[1].split("-").join(" "))
            )
            .finally(() => setLoading(false));
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white rounded-xl shadow-md w-full max-w-md p-8">
                <h2 className="text-2xl font-bold text-center mb-2">
                    Register
                </h2>
                <p className="text-center text-gray-500 mb-6">
                    Already have an account?{" "}
                    <a href="/login" className="text-blue-600 hover:underline">
                        Login
                    </a>
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col gap-2">
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

                    <div className="flex flex-col gap-2">
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

                    <div className="flex flex-col gap-2">
                        <label className="block text-sm font-semibold mb-1">
                            Confirm Password{" "}
                            <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Password Confirmation"
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
                        className="w-full h-max bg-blue-600 text-white py-2 flex items-center justify-center rounded-lg hover:bg-blue-700 transition font-semibold"
                    >
                        {Loading ? (
                            <FaSpinner className="animate-spin" />
                        ) : (
                            "Register"
                        )}
                    </button>

                    <p className="font-semibold text-sm text-black/80">
                        Other Methods
                    </p>
                    <div>
                        <div
                            onClick={firebase.loginWithGoogle}
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

export default RegisterForm;
