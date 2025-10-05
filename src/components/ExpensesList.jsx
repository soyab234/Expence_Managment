import React from "react";
import { useExpenses } from "../context/ExpenseContext"; // custom hook from your context

const ExpenseList = () => {
    const { expenses, deleteExpense } = useExpenses();

    if (expenses.length === 0) {
        return (
            <div className="flex justify-center mt-10">
                <p className="text-gray-500 text-lg font-medium bg-gray-50 px-6 py-3 rounded-lg shadow-sm text-center">
                    No expenses added yet 💸
                </p>
            </div>
        );
    }

    return (
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full mt-8 mx-auto border border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-expense-dark tracking-tight">
                Expense List
            </h2>

            <div className="overflow-x-auto rounded-lg">
                <table className="min-w-full border border-gray-100 text-sm sm:text-base">
                    <thead className="bg-blue-50">
                        <tr>
                            <th className="py-3 px-4 sm:px-6 text-left font-semibold text-gray-700 border-b">
                                Description
                            </th>
                            <th className="py-3 px-4 sm:px-6 text-left font-semibold text-gray-700 border-b">
                                Amount
                            </th>
                            <th className="py-3 px-4 sm:px-6 text-left font-semibold text-gray-700 border-b">
                                Category
                            </th>
                            <th className="py-3 px-4 sm:px-6 text-left font-semibold text-gray-700 border-b">
                                Date
                            </th>
                            <th className="py-3 px-4 sm:px-6 text-center font-semibold text-gray-700 border-b">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {expenses.map((exp, index) => (
                            <tr
                                key={exp.id}
                                className={`${
                                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                } hover:bg-blue-50 transition duration-150`}
                            >
                                <td className="py-3 px-4 sm:px-6 text-gray-800 break-words max-w-[150px] sm:max-w-none">
                                    {exp.description}
                                </td>
                                <td className="py-3 px-4 sm:px-6 text-gray-800 font-medium whitespace-nowrap">
                                    ₹{exp.amount}
                                </td>
                                <td className="py-3 px-4 sm:px-6 text-gray-600 whitespace-nowrap">
                                    {exp.category}
                                </td>
                                <td className="py-3 px-4 sm:px-6 text-gray-500 whitespace-nowrap">
                                    {exp.date}
                                </td>
                                <td className="py-3 px-4 sm:px-6 text-center">
                                    <button
                                        onClick={() => deleteExpense(exp.id)}
                                        className="bg-red-100 text-red-600 hover:bg-red-600 hover:text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile View: Compact Summary */}
            <div className="mt-6 grid grid-cols-2 sm:hidden gap-3 text-center text-sm">
                <div className="bg-blue-50 p-2 rounded-lg font-semibold text-blue-700">
                    Total Expenses
                </div>
                <div className="bg-green-50 p-2 rounded-lg font-semibold text-green-700">
                    {expenses.length}
                </div>
            </div>
        </div>
    );
};

export default ExpenseList;
