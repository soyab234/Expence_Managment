import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpenseChat from "./ExpenseChat";
import ExpensesForm from "./ExpensesForm";
import ExpenseList from "./ExpensesList";

const Dashboard = () => {
    return (
        <div className="p-4">
            {/* Summary Section */}
            <ExpensesSummary />

            {/* Charts Section */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Expense Chart */}
                <div className="md:col-span-2">
                    <ExpenseChat />
                </div>

                <div className="">
                    <ExpensesForm />
                </div>
            </div>
            <ExpenseList />
        </div>
    );
};

export default Dashboard;
