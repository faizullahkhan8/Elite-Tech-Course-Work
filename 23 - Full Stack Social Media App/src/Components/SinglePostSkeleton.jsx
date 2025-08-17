export default function SinglePostSkeleton() {
    return (
        <div className="flex flex-1 px-4">
            <div className="bg-white shadow-lg rounded-2xl p-6 w-full animate-pulse">
                {/* User Info */}
                <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-gray-300 mr-3" />
                    <div className="flex flex-col space-y-2">
                        <div className="h-4 w-32 bg-gray-300 rounded" />
                        <div className="h-3 w-24 bg-gray-200 rounded" />
                    </div>
                </div>

                {/* Post Text */}
                <div className="space-y-2 mb-4">
                    <div className="h-4 w-3/4 bg-gray-300 rounded" />
                    <div className="h-4 w-2/4 bg-gray-200 rounded" />
                </div>

                {/* Post Image */}
                <div className="w-full h-64 bg-gray-300 rounded-xl mb-4" />

                {/* Actions */}
                <div className="flex justify-between text-sm mb-6">
                    <div className="h-4 w-16 bg-gray-300 rounded" />
                    <div className="h-4 w-20 bg-gray-300 rounded" />
                    <div className="h-4 w-14 bg-gray-300 rounded" />
                </div>

                {/* Comment Input */}
                <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-gray-300 mr-3" />
                    <div className="flex-1 h-10 bg-gray-200 rounded-full" />
                    <div className="ml-2 w-16 h-10 bg-gray-300 rounded-full" />
                </div>

                {/* Comments List */}
                <div className="space-y-4">
                    {[1, 2].map((i) => (
                        <div key={i} className="flex items-start space-x-3">
                            <div className="w-8 h-8 rounded-full bg-gray-300" />
                            <div className="flex-1 space-y-2">
                                <div className="h-4 w-32 bg-gray-300 rounded" />
                                <div className="h-3 w-full bg-gray-200 rounded" />
                                <div className="h-3 w-1/3 bg-gray-200 rounded" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
