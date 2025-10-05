import React from "react";
import { useExpenses } from "../context/ExpenseContext";
import {
    getTotalExpenses,
    getHighestCategory,
    formatCurrency,
} from "../utils/Expense";
import { TrendingDown, TrendingUp, Wallet } from "lucide-react";

const ExpensesSummary = () => {
    const { expenses } = useExpenses();
    const totalExpenses = getTotalExpenses(expenses);
    const highestCategory = getHighestCategory(expenses);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg p-6 ">
                <div className="flex items-center space-x-4">
                    <div className="bg-expense-light p-3 rounded-full">
                        <Wallet className="w-6 text-expense" />
                    </div>
                    <div className="">
                        <h3 className="text-gray-500 text-sm fint-medium ">
                            Total Expenses
                        </h3>
                        <p className="text-2xl font-bold text-expense-dark">
                            {formatCurrency(totalExpenses)}
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-lg p-6 ">
                <div className="flex items-center space-x-4">
                    <div className="bg-red-100 p-3 rounded-full">
                        <TrendingDown className="w-6 text-red-400" />
                    </div>
                    <div className="">
                        <h3 className="text-gray-400 text-sm fint-medium ">
                            Hiegst category
                        </h3>
                        <p className="text-2xl font-bold text-expense-dark">
                            {highestCategory.category !== "None" ? (
                                <>
                                    <span>{highestCategory.category}</span>
                                    <span>
                                        {formatCurrency(highestCategory.amount)}
                                    </span>
                                </>
                            ) : (
                                "None"
                            )}
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-lg p-6 ">
                <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                        <TrendingUp className="w-6 text-green-400" />
                    </div>
                    <div className="">
                        <h3 className="text-gray-500 text-sm fint-medium ">
                            Total Entries
                        </h3>
                        <p className="text-2xl font-bold text-expense-dark">
                            {expenses.length}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpensesSummary;
