import { useEffect, useState } from "react";
import {
    FaUser,
    FaBirthdayCake,
    FaMapMarkerAlt,
    FaGlobe,
    FaPhone,
    FaHome,
    FaBriefcase,
    FaHeart,
    FaBook,
} from "react-icons/fa";
import { useFirebase } from "../Contexts/FirebaseContext";
import { useNavigate } from "react-router";
import UserAvatar from "../Assets/Images/UserAvatar.jpg";
import CoverPlaceholder from "../Assets/Images/CoverPlaceholder.jpg";

export default function CompleteProfile() {
    const { createUser, userInfo, user } = useFirebase();
    const navigate = useNavigate();

    const [previewProfile, setPreviewProfile] = useState(null);
    const [previewCover, setPreviewCover] = useState(null);
    const [profileFile, setProfileFile] = useState(null);
    const [coverFile, setCoverFile] = useState(null);

    const [userData, setUserData] = useState({
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
        if (userInfo) {
            setUserData((prev) => ({
                ...prev,
                ...userInfo,
            }));
        }
    }, [userInfo]);

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
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

        if (oldUrl) {
            const fileId = oldUrl.split("/").pop().split("?")[0];
            await fetch(`https://api.imagekit.io/v1/files/${fileId}`, {
                method: "DELETE",
                headers: {
                    Authorization:
                        "Basic " +
                        btoa(import.meta.env.VITE_IMAGEKIT_PRIVATE_KEY + ":"),
                },
            }).catch((error) => {
                console.log("Error deleting old image:", error);
            });
        }

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
        if (!user) return;

        let profileUrl = userData.imageUrl;
        let coverUrl = userData.coverUrl;

        if (profileFile) {
            profileUrl = await uploadToImageKit(
                profileFile,
                `${user.uid}_profile.jpg`,
                "/profile_pics/",
                userData.imageUrl
            );
        }

        if (coverFile) {
            coverUrl = await uploadToImageKit(
                coverFile,
                `${user.uid}_cover.jpg`,
                "/cover_pics/",
                userData.coverUrl
            );
        }

        const updatedUser = {
            ...userData,
            uid: user.uid,
            email: user.email,
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
                <div>
                    <label className="text-sm font-medium mb-1">
                        Profile Picture
                    </label>
                    {previewProfile || userData.imageUrl ? (
                        <img
                            src={previewProfile || userData.imageUrl}
                            alt="profile"
                            className="w-32 h-32 rounded-full object-cover mb-2"
                        />
                    ) : (
                        <img
                            src={UserAvatar}
                            alt="default profile"
                            className="w-32 h-32 rounded-full object-cover mb-2"
                        />
                    )}
                    <input
                        type="file"
                        accept="image/*"
                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
                        required={!userData.imageUrl}
                        onChange={(e) => handleImageSelect(e, "profile")}
                    />
                </div>

                <div>
                    <label className="text-sm font-medium mb-1">
                        Cover Photo
                    </label>
                    {previewCover || userData.coverUrl ? (
                        <img
                            src={previewCover || userData.coverUrl}
                            alt="cover"
                            className="w-full h-40 object-cover mb-2 rounded-lg"
                        />
                    ) : (
                        <img
                            src={CoverPlaceholder}
                            alt="default cover"
                            className="w-full h-40 object-cover mb-2 rounded-lg"
                        />
                    )}
                    <input
                        type="file"
                        accept="image/*"
                        required={!userData.coverUrl}
                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
                        onChange={(e) => handleImageSelect(e, "cover")}
                    />
                </div>

                <div>
                    <label className="text-sm font-medium mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={userData.name}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-3 py-2 dark:bg-gray-800 dark:border-gray-700"
                        required
                    />
                </div>

                <div>
                    <label className="text-sm font-medium mb-1">Bio</label>
                    <textarea
                        name="bio"
                        value={userData.bio}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-3 py-2 dark:bg-gray-800 dark:border-gray-700"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium mb-1">Gender</label>
                    <select
                        name="gender"
                        value={userData.gender}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-3 py-2 dark:bg-gray-800 dark:border-gray-700"
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div>
                    <label className="text-sm font-medium mb-1 flex items-center gap-2">
                        <FaBirthdayCake /> Date of Birth
                    </label>
                    <input
                        type="date"
                        name="dob"
                        value={userData.dob}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-3 py-2 dark:bg-gray-800 dark:border-gray-700"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium mb-1 flex items-center gap-2">
                        <FaHome /> Address
                    </label>
                    <input
                        type="text"
                        name="address"
                        placeholder="Street address"
                        value={userData.address}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-3 py-2 dark:bg-gray-800 dark:border-gray-700"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium mb-1 flex items-center gap-2">
                        <FaMapMarkerAlt /> City
                    </label>
                    <input
                        type="text"
                        name="city"
                        value={userData.city}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-3 py-2 dark:bg-gray-800 dark:border-gray-700"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium mb-1 flex items-center gap-2">
                        <FaGlobe /> Country
                    </label>
                    <input
                        type="text"
                        name="country"
                        value={userData.country}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-3 py-2 dark:bg-gray-800 dark:border-gray-700"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium mb-1 flex items-center gap-2">
                        <FaPhone /> Phone
                    </label>
                    <input
                        type="text"
                        name="phone"
                        value={userData.phone}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-3 py-2 dark:bg-gray-800 dark:border-gray-700"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium mb-1 flex items-center gap-2">
                        <FaBriefcase /> Occupation
                    </label>
                    <input
                        type="text"
                        name="occupation"
                        value={userData.occupation}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-3 py-2 dark:bg-gray-800 dark:border-gray-700"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium mb-1 flex items-center gap-2">
                        <FaHeart /> Relationship
                    </label>
                    <select
                        name="relationship"
                        value={userData.relationship}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-3 py-2 dark:bg-gray-800 dark:border-gray-700"
                    >
                        <option value="">Select</option>
                        <option value="single">Single</option>
                        <option value="in_a_relationship">
                            In a Relationship
                        </option>
                        <option value="married">Married</option>
                        <option value="complicated">Complicated</option>
                    </select>
                </div>

                {/* Submit */}
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
