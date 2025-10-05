import React, { useState } from "react";
import { useExpenses } from "../context/ExpenseContext";
import { getChatData, getExpenseByMonth } from "../utils/Expense";
import { BarChart, PieChart } from "lucide-react";
import ExpensesPieChart from "./ExpensesPiChat";
import ExpensesBarChart from "./ExpensesBarChat";

const ExpenseChat = () => {
    const expenses = useExpenses();
    const [chatType, setChatType] = useState("pie"); // pie or bar

    const chatData = getChatData(expenses);
    const monthLyData = getExpenseByMonth(expenses);
    return (
        <div className="bg-white rounded-lg shadow-md p-6 align-items-center">
            <h2 className="text-center text-2xl font-semibold text-expense-dark mb-6">
                Expense Analytics
            </h2>
            <div className="flex justify-center mb-6 space-x-4">
                <button
                    onClick={() => setChatType("pie")}
                    className={`flex items-center px-4 py-2 rounded-md transition-all cursor-pointer ${
                        chatType === "pie"
                            ? "bg-expense text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                >
                    <PieChart size={18} className="mr-2" />
                    <p>Pie Chart</p>
                </button>
                <button
                    onClick={() => setChatType("bar")}
                    className={`flex items-center px-4 py-2 rounded-md transition-all cursor-pointer ${
                        chatType === "bar"
                            ? "bg-expense text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                >
                    <BarChart size={18} className="mr-2" />
                    <p>Bar Chat</p>
                </button>
            </div>
            <div className="">
                {chatType === "pie" ? (
                    <ExpensesPieChart />
                ) : (
                    <ExpensesBarChart />
                )}
            </div>
        </div>
    );
};

export default ExpenseChat;
