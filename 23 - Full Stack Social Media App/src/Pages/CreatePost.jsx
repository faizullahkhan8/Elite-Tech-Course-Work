import { useState } from "react";
import { useFirebase } from "../Contexts/FirebaseContext";
import { useNavigate } from "react-router";
import { FaSpinner } from "react-icons/fa";

export default function CreatePost() {
    const [caption, setCaption] = useState("");
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { createPost } = useFirebase();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const uploadToImageKit = async (file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", `post_${Date.now()}.jpg`);
        formData.append("folder", "/posts/");

        const response = await fetch(
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

        if (!response.ok) throw new Error("Image upload failed");
        const data = await response.json();
        return data.url;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (caption.trim() === "" && !image) return;

        try {
            setLoading(true);

            let imageUrl = "";
            if (image) {
                imageUrl = await uploadToImageKit(image);
            }

            await createPost({
                text: caption,
                imageUrl,
            });

            // Reset form
            setCaption("");
            setImage(null);
            setPreview(null);

            navigate("/");
        } catch (error) {
            console.error("Error creating post:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center flex-1 mt-8">
            <div className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 w-full max-w-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
                    Create a Post
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <textarea
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                        placeholder="What's on your mind?"
                        className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        rows="3"
                    ></textarea>

                    <div className="flex flex-col gap-3 bg-gray-50 dark:bg-gray-800 p-3 rounded-xl border border-gray-300 dark:border-gray-700">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="text-gray-600 dark:text-gray-300 text-sm"
                        />

                        {/* Preview */}
                        {preview && (
                            <img
                                src={preview}
                                alt="Preview"
                                className="w-full rounded-xl object-cover"
                            />
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-xl transition disabled:opacity-50"
                    >
                        {loading ? (
                            <FaSpinner className="animate-spin" />
                        ) : (
                            "Post"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}
