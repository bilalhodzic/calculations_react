import axios from "axios";
import config from "../config.json";

async function newCalculation (data, token){
    const axiosOptions = {
        url: `${config.baseUrl}/calculations`,
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`
        },
        data: {
            ...data
        }
      };
    const response = await axios(axiosOptions);
    console.log(response.data);
    return response.data;
};

async function getLatestCalculations(token){
    const axiosOptions = {
        url: `${config.baseUrl}/calculations/getlast`,
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        },
      };
    const response = await axios(axiosOptions);
    console.log(response.data);
    return response.data;
}

export { newCalculation, getLatestCalculations };