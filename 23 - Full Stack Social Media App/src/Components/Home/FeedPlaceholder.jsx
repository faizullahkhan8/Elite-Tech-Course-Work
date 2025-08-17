export default function FeedPlaceholder() {
    return (
        <div className="space-y-4 animate-pulse">
            {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-white p-4 rounded-lg shadow">
                    {/* User info row */}
                    <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                        <div className="flex-1">
                            <div className="h-3 w-32 bg-gray-300 rounded mb-2"></div>
                            <div className="h-3 w-20 bg-gray-200 rounded"></div>
                        </div>
                    </div>

                    {/* Post content */}
                    <div className="h-4 w-full bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 w-3/4 bg-gray-200 rounded mb-4"></div>

                    {/* Image placeholder */}
                    <div className="w-full h-48 bg-gray-300 rounded-lg"></div>
                </div>
            ))}
        </div>
    );
}
