
exports.transformCalculations = (initialData) => {
    return initialData.map((entry) => {
        const d = new Date(entry.startDate);
        return {
            id: entry.id,
            Name: entry.name,
            Date: `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`,
            Category: entry.category,
            Type: {
                text: entry.type === 1 ? "New production" : "Rebuilding",
            },
            Area: entry.location,
            Actions: "actions"
        }
    });
};