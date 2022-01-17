import axios from "axios";

const HOST = "http://localhost:8000/api";

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
