const User = ({userdata}) => {
    const {firstName,lastName,number,birthDate} = userdata;
    return (
        <div className="user-card bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-t-4 border-blue-500">
            <div className="flex items-center justify-center mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-md">
                    {firstName?.charAt(0)}{lastName?.charAt(0)}
                </div>
            </div>
            <h2 className="user text-xl font-bold text-gray-800 mb-3 text-center">
                {firstName} {lastName}
            </h2>
            <div className="space-y-2">
                <h2 className="user text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-lg">
                    <span className="font-semibold text-gray-800">🎂 Birth Date:</span> {birthDate}
                </h2>
                <h2 className="user text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-lg">
                    <span className="font-semibold text-gray-800">📞 Contact:</span> {number}
                </h2>
                <h2 className="user text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-lg">
                    <span className="font-semibold text-gray-800">📧 Email:</span> {firstName}@gmail.com
                </h2>
            </div>
        </div>
    )
}
export default User;