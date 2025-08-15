// src/pages/CompleteProfile.jsx
import { useEffect, useState } from "react";
import {
    FaUser,
    FaBirthdayCake,
    FaMapMarkerAlt,
    FaGlobe,
    FaPhone,
} from "react-icons/fa";
import { useFirebase } from "../Contexts/FirebaseContext";
import { useNavigate } from "react-router";

export default function CompleteProfile() {
    const { getUserInfo } = useFirebase();
    const { createUser } = useFirebase();
    const navigate = useNavigate();
    const [gender, setGender] = useState("male");
    const [user, setUser] = useState({
        name: "",
        gender,
        bio: "",
        dob: "",
        city: "",
        country: "",
        address: "",
        phone: "",
        website: "",
        occupation: "",
        relationship: "",
        friends: [],
    });

    const handleChange = (e) => {
        e.preventDefault();
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        const fetchUser = async () => {
            const userInfo = await getUserInfo();

            setUser(userInfo);
        };
        fetchUser();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createUser(user).then(() => navigate("/profile"));
    };

    return (
        <div className="flex-1 mx-4 p-4 sm:p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg mt-6">
            {/* Title */}
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2">
                <FaUser className="text-blue-500" /> Complete Your Profile
            </h1>

            <div onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Full Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                    />
                </div>

                {/* Bio */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Bio
                    </label>
                    <textarea
                        name="bio"
                        value={user.bio}
                        onChange={handleChange}
                        placeholder="Write something about yourself..."
                        rows="3"
                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                    ></textarea>
                </div>

                <div className="flex flex-col gap-1">
                    <label>Gender</label>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setGender("male")}
                            className={`${
                                gender === "male" &&
                                "bg-blue-500 hover:bg-blue-600 text-white"
                            }  px-5 py-2 rounded-lg font-semibold transition border border-gray-700`}
                        >
                            Male
                        </button>

                        <button
                            onClick={() => setGender("female")}
                            className={`${
                                gender === "female" &&
                                "bg-blue-500 hover:bg-blue-600 text-white"
                            } text-black px-5 py-2 rounded-lg font-semibold transition border border-gray-700`}
                        >
                            Female
                        </button>
                    </div>
                </div>

                {/* Date of Birth */}
                <div>
                    <label className=" text-sm font-medium mb-1 flex items-center gap-1">
                        <FaBirthdayCake /> Date of Birth
                    </label>
                    <input
                        type="date"
                        name="dob"
                        value={user.dob}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                    />
                </div>

                {/* Location */}
                <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            City
                        </label>
                        <input
                            type="text"
                            name="city"
                            value={user.city}
                            onChange={handleChange}
                            placeholder="Enter your city"
                            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Country
                        </label>
                        <input
                            type="text"
                            name="country"
                            value={user.country}
                            onChange={handleChange}
                            placeholder="Enter your country"
                            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                        />
                    </div>
                </div>

                {/* Address */}
                <div>
                    <label className=" text-sm font-medium mb-1 flex items-center gap-1">
                        <FaMapMarkerAlt /> Address
                    </label>
                    <input
                        type="text"
                        name="address"
                        value={user.address}
                        onChange={handleChange}
                        placeholder="Enter your address"
                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                    />
                </div>

                {/* Phone */}
                <div>
                    <label className=" text-sm font-medium mb-1 flex items-center gap-1">
                        <FaPhone /> Phone Number
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        value={user.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                    />
                </div>

                {/* Website */}
                <div>
                    <label className=" text-sm font-medium mb-1 flex items-center gap-1">
                        <FaGlobe /> Website
                    </label>
                    <input
                        type="url"
                        name="website"
                        value={user.website}
                        onChange={handleChange}
                        placeholder="https://example.com"
                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                    />
                </div>

                {/* Occupation */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Occupation
                    </label>
                    <input
                        type="text"
                        name="occupation"
                        value={user.occupation}
                        onChange={handleChange}
                        placeholder="Your job/profession"
                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                    />
                </div>

                {/* Relationship Status */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Relationship Status
                    </label>
                    <select
                        name="relationship"
                        value={user.relationship}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                    >
                        <option value="">Select status</option>
                        <option value="Single">Single</option>
                        <option value="In a Relationship">
                            In a Relationship
                        </option>
                        <option value="Married">Married</option>
                        <option value="It's Complicated">
                            It's Complicated
                        </option>
                    </select>
                </div>

                {/* Submit Button */}
                <div onClick={handleSubmit} className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold transition"
                    >
                        Save Profile
                    </button>
                </div>
            </div>
        </div>
    );
}
