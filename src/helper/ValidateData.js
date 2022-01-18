import types from "./data.json";
import {getFieldsNewBuilding, getFieldsRebuilding} from "./Fields";

export default function ValidateData(activeStep, betweenStepsData){
    const betweenStepsCategories = [types.category.lager, types.category.handel, types.category.ombyggnad, types.category.kontor];
    switch(activeStep){
        case 0:
            return {
                hideError: betweenStepsData.current && betweenStepsData.current.category,
                message: "Please select one of the categories listed below"
            };
        case 1:
            return {
                hideError: betweenStepsData.current && betweenStepsData.current.category && !betweenStepsCategories.includes(betweenStepsData.current.category),
                message: "Please select one of the subcategories listed below"
            };
        case 2:
            return {
                hideError: betweenStepsData.current && betweenStepsData.current.name && betweenStepsData.current.name.trim() !== '',
                message: "Please enter project name"
            };
        case 3:
            return {
                hideError: betweenStepsData.current && projectInfoError(betweenStepsData),
                message: "All of the fields must be filled out with non-negative numbers"
            };
        case 4:
            return {
                hideError: betweenStepsData.current && betweenStepsData.current.location,
                message: "Please select the location for your project"
            };
        case 5:
            return {
                hideError: betweenStepsData.current && betweenStepsData.current.internalStandard || betweenStepsData.current.externalStandard,
                message: "Please choose both the internal and external standard"
            };
        case 6:
            return {
                hideError: betweenStepsData.current && betweenStepsData.current.startDate,
                message: "Please select start date for your project"
            };
        default:
            return true;
    }
}

function projectInfoError(betweenStepsData){
    const categoryFields = betweenStepsData.current.type === 1 ? getFieldsNewBuilding(betweenStepsData.current.category) : getFieldsRebuilding(betweenStepsData.current.category);
    for(const entry of categoryFields){
        const id = entry.id;
        if(!betweenStepsData.current[id] || parseInt(betweenStepsData.current[id]) < 0)
            return false;
    }
    return true;
}