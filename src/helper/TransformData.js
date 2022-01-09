
exports.transformCalculations = (initialData) => {
    return initialData.map((entry) => {
        const d = new Date(entry.startDate);
        entry.Name = entry.name;
        entry.Date = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`;
        entry.Type = { text: entry.type === 1 ? "New production" : "Rebuilding" };
        entry.Area = entry.location;
        entry.Actions = "actions";
        entry.Category = entry.category;
        return entry;
    });
};