export default function ProfileSkeleton() {
    return (
        <div className="animate-pulse p-6 w-full mx-auto">
            {/* Cover photo */}
            <div className="w-full h-40 bg-gray-300 rounded-lg mb-6"></div>

            {/* Profile image + name */}
            <div className="flex items-center space-x-4 -mt-12">
                <div className="w-24 h-24 bg-gray-300 rounded-full border-4 border-white"></div>
                <div>
                    <div className="h-4 w-48 bg-gray-300 rounded mb-2"></div>
                    <div className="h-3 w-32 bg-gray-200 rounded"></div>
                </div>
            </div>

            {/* Stats row */}
            <div className="flex space-x-6 mt-6">
                <div className="h-4 w-16 bg-gray-300 rounded"></div>
                <div className="h-4 w-16 bg-gray-300 rounded"></div>
                <div className="h-4 w-16 bg-gray-300 rounded"></div>
            </div>

            {/* Bio section */}
            <div className="mt-6 space-y-3">
                <div className="h-3 w-full bg-gray-300 rounded"></div>
                <div className="h-3 w-5/6 bg-gray-200 rounded"></div>
                <div className="h-3 w-2/3 bg-gray-200 rounded"></div>
            </div>

            {/* Posts grid */}
            <div className="mt-8 grid grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => (
                    <div
                        key={i}
                        className="w-full h-40 bg-gray-300 rounded-lg"
                    ></div>
                ))}
            </div>
        </div>
    );
}
