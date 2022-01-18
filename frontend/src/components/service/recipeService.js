import axios from "axios";

const HOST = "http://localhost:8000/api";


//calling the backend of API Methods as services

export const createRecipe = async (Payload) => {
    try {
    await axios.post(`${HOST}/recipe/save`, Payload);
    return {
        ok: true,
    };
    } catch (error) {
    return {
        ok: false, err: error.response.data.status
    };
    }
};
//calling read operation
export const getAllRecipe= async () => {
    try {
    const response = await axios.get(`${HOST}/recipe/get`);
    console.log("awaaa",response);
    return {
        ok: true,
        data: response.data.data
    };
    } catch (error) {
    return {
        ok: false,
    };
    }
};
//calling update operation
export const updateRecipe= async (recId,Payload) => {
    try {
    await axios.put(`${HOST}/recipe/update/${recId}`,Payload);
    return {
        ok: true,
    };
    } catch (error) {
    return {
        ok: false, err: error.response.data.status
    };
    }
};
//calling delete operation
export const deleteRecipe= async (recId) => {
    try {
        await axios.post(`${HOST}/recipe/delete/${recId}`);
    return {
        ok: true,
    };
    } catch (error) {
    return {
        ok: false, err: error.response.data.status
    };
    }
};
