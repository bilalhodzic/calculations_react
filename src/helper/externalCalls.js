import axios from "axios";
import config from "../config.json";

async function newCalculation (data){
    const axiosOptions = {
        url: `${config.baseUrl}/calculations`,
        method: "POST",
        data: {
            ...data
        }
      };
    const response = await axios(axiosOptions);
    console.log(response.data);
    return response.data;
};

export { newCalculation };