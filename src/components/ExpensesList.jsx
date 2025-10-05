import React, { useState } from "react";
import { useExpenses } from "../context/ExpenseContext";

const ExpensesList = () => {
    const { expenses, deleteExpense } = useExpenses();
    const [categoryFilter, setCategoryFilter] = useState("all");

    const CategoryOptions = [
        { value: "all", label: "All" },
        { value: "food", label: "Food & Dining" },
        { value: "transport", label: "Transportation" },
        { value: "entertainment", label: "Entertainment" },
        { value: "shopping", label: "Shopping" },
        { value: "utilities", label: "Utilities" },
        { value: "health", label: "Health & Medical" },
        { value: "other", label: "Other" },
    ];

    // Filter
    const filteredExpenses = expenses.filter(
        (expense) =>
            categoryFilter === "all" || expense.category === categoryFilter
    );

    // Sort by date (newest first)
    const sortedExpenses = [...filteredExpenses].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    const handleDelete = (id) => {
        deleteExpense(id);
    };

    return (
        <div className="w-full mx-auto mt-8 p-6 rounded-2xl shadow-lg bg-gradient-to-br from-white to-gray-50 border border-gray-200">
            {/* Header & Filter */}
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                <h2 className="text-2xl font-semibold text-expense-dark tracking-wide">
                    💰 Expense List
                </h2>

                <select
                    className="border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                >
                    {CategoryOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>

            {/* No expenses message */}
            {sortedExpenses.length === 0 ? (
                <p className="text-gray-500 text-center py-10 text-lg font-medium">
                    No expenses found for this category 😕
                </p>
            ) : (
                <ul className="space-y-4">
                    {sortedExpenses.map((expense) => (
                        <li
                            key={expense.id}
                            className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white border border-gray-100 shadow-sm rounded-xl p-4 hover:shadow-md transition-shadow duration-300"
                        >
                            <div>
                                <p className="text-lg font-semibold text-gray-800">
                                    {expense.title}
                                </p>

                                <p className="text-sm text-gray-500">
                                    {expense.category} • {expense.description}•{" "}
                                    {new Date(
                                        expense.date
                                    ).toLocaleDateString()}
                                </p>
                            </div>

                            <div className="flex items-center gap-4 mt-3 sm:mt-0">
                                <span className="font-bold text-gray-900 bg-gray-100 px-3 py-1 rounded-md">
                                    ₹{expense.amount}
                                </span>
                                <button
                                    onClick={() => handleDelete(expense.id)}
                                    className="bg-red-500 text-white px-4 py-1.5 rounded-lg font-medium hover:bg-red-600 transition-colors duration-200"
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ExpensesList;
