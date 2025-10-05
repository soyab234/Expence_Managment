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
    // Define category colors (use HEX codes for Recharts)
    const CATEGORY_COLORS = {
        food: "#22c55e", // green
        transport: "#3b82f6", // blue
        shopping: "#ec4899", // pink
        health: "#ef4444", // red
        other: "#6b7280", // gray
        entertainment: "#8b5cf6", // purple
        utilities: "#eab308", // yellow
    };

    // Handle empty data
    if (!data || data.length === 0) {
        return (
            <div className="text-center text-gray-500">No data available</div>
        );
    }

    // Get color for category
    const getColor = (name) => CATEGORY_COLORS[name.toLowerCase()] || "#6b7280";

    // Custom tooltip for pie chart
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const { name, value } = payload[0].payload;
            const total = data.reduce((sum, item) => sum + item.value, 0);
            const percentage = ((value / total) * 100).toFixed(2);
            return (
                <div className="bg-white p-3 rounded-md shadow-md border border-gray-200">
                    <p className="font-medium text-gray-800">{name}</p>
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
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
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
                    formatter={(value)=>{
                        <span className="text-sm font-medium ">{value}</span>
                    }}
                />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default ExpensesPieChart;
