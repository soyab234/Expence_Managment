import React from "react";

const DashboardLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-center md:justify-between">
                        <h1 className="text-3xl font-bold text-expense">
                            Budget Wow Tracker
                        </h1>
                        <p className="hidden md:block text-gray-500">
                            Track your expenses
                        </p>
                    </div>
                </div>
            </header>

            {/* Page Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                {children}
            </main>

            <footer className=" bg-white shadow-inner ">
                <div className="max-w=7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 ">
                    <p className="text-gray-500 text-center text-sm">
                        Budget Wow Tracker &copy; {new Date().getFullYear()}
                    </p>
                </div>
            </footer>
        </div>
    );
};




export default DashboardLayout;
