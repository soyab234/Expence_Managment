import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6">
            <h1 className="text-9xl font-bold text-red-500">404</h1>
            <p className="mt-4 text-2xl font-semibold">Page Not Found</p>
            <p className="mt-2 text-gray-400 text-center max-w-md">
                Oops! The page you’re looking for doesn’t exist or has been
                moved.
            </p>

            <Link
                to="/"
                className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg transition-all duration-200"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFound;
