
exports.transformCalculations = (initialData) => {
    return initialData.map((entry) => {
        const d = new Date(entry.startDate);
        const month = (d.getMonth()+1).toString().padStart(2, '0');
        const day = (d.getDate()).toString().padStart(2, '0');
        entry.Name = entry.name;
        entry.Date = `${d.getFullYear()}/${month}/${day}`;
        entry.Type = { text: entry.type === 1 ? "New production" : "Rebuilding" };
        entry.Area = entry.location;
        entry.Actions = "actions";
        entry.Category = entry.category;
        return entry;
    });
};