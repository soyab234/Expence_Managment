export const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 2,
    }).format(amount);
};

export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
    });
};

export const getExpensesByCategory = (expenses) => {
    // Ensure expenses is always an array
    const expenseArray = Array.isArray(expenses) ? expenses : [];

    const categories = {
        food: 0,
        transport: 0,
        shopping: 0,
        health: 0,
        other: 0,
        entertainment: 0,
        utilities: 0,
    };

    expenseArray.forEach((expense) => {
        if (categories.hasOwnProperty(expense.category)) {
            categories[expense.category] += expense.amount;
        } else {
            categories.other += expense.amount;
        }
    });

    return categories;
};

export const getTotalExpenses = (expenses) => {
    const expenseArray = Array.isArray(expenses) ? expenses : [];
    return expenseArray.reduce((total, expense) => total + expense.amount, 0);
};

export const getChatData = (expenses = []) => {
    return {
        categories: getExpensesByCategory(expenses),
        total: getTotalExpenses(expenses),
        count: expenses.length, // optional: how many expenses are there
    };
};

export const getCategoryTextColor = (category) => {
    const colors = {
        food: "text-green-500",
        transport: "text-blue-500",
        shopping: "text-pink-500",
        health: "text-red-500",
        other: "text-gray-500",
        entertainment: "text-purple-500",
        utilities: "text-yellow-500",
    };
    return colors[category] || "text-gray-500";
};

export const getMonthName = (date) => {
    return date.toLocaleString("default", { month: "long" });
};

export const getExpenseByMonth = (expenses, numMonths = 6) => {
    const now = new Date();
    const result = {};

    // Ensure expenses is an array
    const expenseArray = Array.isArray(expenses) ? expenses : [];

    // Initialize last `numMonths` with 0 totals
    for (let i = 0; i < numMonths; i++) {
        const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
        const month = String(d.getMonth() + 1).padStart(2, '0'); // zero-padded month
        const monthYear = `${month} ${d.getFullYear()}`;
        result[monthYear] = 0;
    }

    // Sum expenses into the correct month
    expenseArray.forEach((expense) => {
        const d = new Date(expense.date);
        if (isNaN(d)) return; // skip invalid dates
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const monthYear = `${month} ${d.getFullYear()}`;

        if (result[monthYear] !== undefined) {
            result[monthYear] += expense.amount;
        }
    });

    return result;
};


export const getHighestCategory = (expenses) => {
    if (!expenses || expenses.length === 0) {
        return { category: "None", amount: 0 };
    }

    const categoryTotals = expenses.reduce((acc, expense) => {
        acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
        return acc;
    }, {});

    let highestCategory = null;
    let maxAmount = 0;

    for (const [category, amount] of Object.entries(categoryTotals)) {
        if (amount > maxAmount) {
            highestCategory = category;
            maxAmount = amount;
        }
    }

    return { category: highestCategory, amount: maxAmount };
};
