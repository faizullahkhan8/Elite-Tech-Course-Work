export default function RightSidebar() {
    const activeFriends = [
        "Jaden Chance",
        "Arezki Williams",
        "Rose James",
        "Tman Mats",
        "Alex Andrew",
        "Kaixi Cark",
        "Hamid Oskip",
        "Serena Lewis",
        "April Sky",
    ];

    return (
        <div className="w-64 bg-white rounded-lg p-4 h-[88vh] sticky top-[4rem] overflow-y-auto shadow-sm max-sm:hidden">
            <h3 className="font-semibold text-gray-600 mb-2">Active Friends</h3>
            <ul className="space-y-2">
                {activeFriends.map((name, i) => (
                    <li key={i} className="flex items-center space-x-3">
                        <img
                            src={`https://i.pravatar.cc/40?u=${i}`}
                            alt={name}
                            className="rounded-full"
                        />
                        <span>{name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
