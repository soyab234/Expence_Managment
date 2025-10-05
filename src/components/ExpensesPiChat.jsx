import React from "react";
import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
} from "recharts";

const ExpensesPieChart = ({ data }) => {
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
            <div className="text-center text-gray-500 py-8">
                No data available
            </div>
        );
    }

    const getColor = (name) =>
        CATEGORY_COLORS[name?.toLowerCase()] || "#6b7280";

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const { name, value } = payload[0];
            const total = data.reduce((sum, item) => sum + item.value, 0);
            const percentage = ((value / total) * 100).toFixed(2);
            return (
                <div className="bg-white p-3 rounded-md shadow-md border border-gray-200">
                    <p className="font-medium text-gray-800 capitalize">
                        {name}
                    </p>
                    <p className="text-gray-700">
                        ₹{value.toFixed(2)}{" "}
                        <span className="text-sm text-gray-500">
                            ({percentage}%)
                        </span>
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="w-full h-[320px] mt-6">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={110}
                        label
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={getColor(entry.name)}
                            />
                        ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                    <Legend
                        layout="horizontal"
                        verticalAlign="bottom"
                        align="center"
                        formatter={(value) => (
                            <span className="text-sm font-medium text-gray-700 capitalize">
                                {value}
                            </span>
                        )}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ExpensesPieChart;
