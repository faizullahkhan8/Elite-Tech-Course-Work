import { useState } from "react";

export default function CreatePost({ onSubmit }) {
    const [caption, setCaption] = useState("");
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (caption.trim() === "" && !image) return;
        onSubmit({ caption, image });
        setCaption("");
        setImage(null);
    };

    return (
        <div className="flex justify-center flex-1 mt-8">
            <div className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 w-full max-w-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
                    Create a Post
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Caption Input */}
                    <textarea
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                        placeholder="What's on your mind?"
                        className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        rows="3"
                    ></textarea>

                    {/* Image Upload */}
                    <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 p-3 rounded-xl border border-gray-300 dark:border-gray-700">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setImage(e.target.files[0])}
                            className="text-gray-600 dark:text-gray-300 text-sm"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-xl transition"
                    >
                        Post
                    </button>
                </form>
            </div>
        </div>
    );
}
