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
    const { getUserInfo, createUser } = useFirebase();
    const navigate = useNavigate();

    const [previewProfile, setPreviewProfile] = useState(null);
    const [previewCover, setPreviewCover] = useState(null);
    const [profileFile, setProfileFile] = useState(null);
    const [coverFile, setCoverFile] = useState(null);

    const [user, setUser] = useState({
        name: "",
        gender: "male",
        imageUrl: "",
        coverUrl: "",
        bio: "",
        dob: "",
        city: "",
        country: "",
        address: "",
        phone: "",
        occupation: "",
        relationship: "",
        friends: [],
    });

    useEffect(() => {
        const fetchUser = async () => {
            const userInfo = await getUserInfo();
            if (userInfo) setUser(userInfo);
        };
        fetchUser();
    }, []);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleImageSelect = (e, type) => {
        const file = e.target.files[0];
        if (!file) return;

        if (type === "profile") {
            setProfileFile(file);
            setPreviewProfile(URL.createObjectURL(file));
        } else {
            setCoverFile(file);
            setPreviewCover(URL.createObjectURL(file));
        }
    };

    const uploadToImageKit = async (file, fileName, folder, oldUrl) => {
        if (!file) return oldUrl;

        // delete old one
        if (oldUrl) {
            const fileId = oldUrl.split("/").pop().split("?")[0]; // extract id
            await fetch(`https://api.imagekit.io/v1/files/${fileId}`, {
                method: "DELETE",
                headers: {
                    Authorization:
                        "Basic " +
                        btoa(import.meta.env.VITE_IMAGEKIT_PRIVATE_KEY + ":"),
                },
            }).catch(() => {});
        }

        // upload new one
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
        formData.append("folder", folder);

        const res = await fetch(
            "https://upload.imagekit.io/api/v1/files/upload",
            {
                method: "POST",
                headers: {
                    Authorization:
                        "Basic " +
                        btoa(import.meta.env.VITE_IMAGEKIT_PRIVATE_KEY + ":"),
                },
                body: formData,
            }
        );

        const data = await res.json();
        return data.url;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let profileUrl = user.imageUrl;
        let coverUrl = user.coverUrl;

        if (profileFile) {
            profileUrl = await uploadToImageKit(
                profileFile,
                `${user.uid || "guest"}_profile.jpg`,
                "/profile_pics/",
                user.imageUrl
            );
        }

        if (coverFile) {
            coverUrl = await uploadToImageKit(
                coverFile,
                `${user.uid || "guest"}_cover.jpg`,
                "/cover_pics/",
                user.coverUrl
            );
        }

        const updatedUser = {
            ...user,
            imageUrl: profileUrl,
            coverUrl: coverUrl,
        };

        await createUser(updatedUser);
        navigate("/profile");
    };

    return (
        <div className="flex-1 mx-4 p-4 sm:p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg mt-6">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2">
                <FaUser className="text-blue-500" /> Complete Your Profile
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Profile Picture */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Profile Picture
                    </label>
                    {previewProfile ? (
                        <img
                            src={previewProfile}
                            alt="preview profile"
                            className="w-32 h-32 rounded-full object-cover mb-2"
                        />
                    ) : user.imageUrl ? (
                        <img
                            src={user.imageUrl}
                            alt="profile"
                            className="w-32 h-32 rounded-full object-cover mb-2"
                        />
                    ) : null}
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageSelect(e, "profile")}
                    />
                </div>

                {/* Cover Picture */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Cover Photo
                    </label>
                    {previewCover ? (
                        <img
                            src={previewCover}
                            alt="preview cover"
                            className="w-full h-40 object-cover mb-2 rounded-lg"
                        />
                    ) : user.coverUrl ? (
                        <img
                            src={user.coverUrl}
                            alt="cover"
                            className="w-full h-40 object-cover mb-2 rounded-lg"
                        />
                    ) : null}
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageSelect(e, "cover")}
                    />
                </div>

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

                {/* Gender */}
                <div className="flex flex-col gap-1">
                    <label>Gender</label>
                    <div className="flex items-center gap-4">
                        <button
                            type="button"
                            onClick={() => setUser({ ...user, gender: "male" })}
                            className={`${
                                user.gender === "male"
                                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                                    : "text-black"
                            } px-5 py-2 rounded-lg font-semibold transition border border-gray-700`}
                        >
                            Male
                        </button>

                        <button
                            type="button"
                            onClick={() =>
                                setUser({ ...user, gender: "female" })
                            }
                            className={`${
                                user.gender === "female"
                                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                                    : "text-black"
                            } px-5 py-2 rounded-lg font-semibold transition border border-gray-700`}
                        >
                            Female
                        </button>
                    </div>
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

                {/* Other fields */}
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

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold transition"
                    >
                        Save Profile
                    </button>
                </div>
            </form>
        </div>
    );
}
