import React, { useState } from "react";
import { useExpenses } from "../context/ExpenseContext";

const ExpensesForm = () => {
    const { addExpense } = useExpenses(); // assuming context provides addExpense()
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    const CategoryOptions = [
        { value: "food", label: "Food & Dining" },
        { value: "transport", label: "Transportation" },
        { value: "entertainment", label: "Entertainment" },
        { value: "shopping", label: "Shopping" },
        { value: "utilities", label: "Utilities" },
        { value: "health", label: "Health & Medical" },
        { value: "other", label: "Other" },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        if (!description || !amount || !category || !date) {
            setError("All fields are required.");
            return;
        }

        const newExpense = {
            id: Date.now(),
            description,
            amount: parseFloat(amount),
            category,
            date,
        };

        setIsSubmitting(true);
        addExpense(newExpense);
        setIsSubmitting(false);

        // reset form
        setDescription("");
        setAmount("");
        setCategory("food");
        setDate(new Date().toISOString().split("T")[0]);
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mx-auto">
            <h2 className="text-expense-dark text-2xl font-semibold mb-6 text-center">
                Add New Expense
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                    <p className="text-red-500 text-sm text-center">{error}</p>
                )}

                <div>
                    <label className="block text-gray-700 font-medium mb-1">
                        Description
                    </label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                        placeholder="Enter description"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">
                        Amount
                    </label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                        placeholder="Enter amount"
                        min="0"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">
                        Category
                    </label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                    >
                        <option value="">Select Category</option>
                        {CategoryOptions.map((cat) => (
                            <option key={cat.value} value={cat.value}>
                                {cat.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">
                        Date
                    </label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-expense-dark text-white font-semibold py-2 rounded-md hover:bg-expense transition duration-200"
                >
                    {isSubmitting ? "Adding..." : "Add Expense"}
                </button>
            </form>
        </div>
    );
};

export default ExpensesForm;
