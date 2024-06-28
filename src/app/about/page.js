export default function AboutPage() {
    // bg-gradient-to-br from-gray-800 via-gray-900 to-black
    // bg-gradient-to-br from-purple-400 via-blue-500 to-indigo-600
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-400 via-blue-500 to-indigo-600">
            <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg max-w-lg text-center">
                <h1 className="text-4xl font-bold mb-4 text-white">About</h1>
                <p className="text-lg text-white">
                    {`   Hey there I'm going to add some stuff here in a little bit
                    :D`}
                </p>
            </div>
        </div>
    );
}
