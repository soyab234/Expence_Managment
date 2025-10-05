import React from "react";
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    CartesianGrid,
    Cell,
} from "recharts";

const ExpensesBarChart = ({ data }) => {
    const CATEGORY_COLORS = {
        food: "#22c55e",
        transport: "#3b82f6",
        shopping: "#ec4899",
        health: "#ef4444",
        other: "#6b7280",
        entertainment: "#8b5cf6",
        utilities: "#eab308",
    };

    if (!data || data.length === 0) {
        return (
            <div className="text-center text-gray-500">No data available</div>
        );
    }

    const getColor = (name) => CATEGORY_COLORS[name.toLowerCase()] || "#6b7280";

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const { name, value } = payload[0];
            return (
                <div className="bg-white p-3 rounded-md shadow-md border border-gray-200">
                    <p className="font-medium text-gray-800 capitalize">
                        {name}
                    </p>
                    <p className="text-gray-700">₹{value.toFixed(2)}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis tickFormatter={(val) => `₹${val}`} />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="value" name="Amount (₹)">
                    {data.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={getColor(entry.name)}
                        />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default ExpensesBarChart;
