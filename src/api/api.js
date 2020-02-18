import axios from "axios";

export const API_HOST = process.env.REACT_APP_API_HOST;

export const get = (url, data) => {
    const config = getTokenHeader();
    return axios.get(url, {...config, ...data}).catch(handleError);
};
export const deleteApi = (url, data) => {
    const config = getTokenHeader();
    return axios.delete(url, {...config, ...data}).catch(handleError);
};

export function post(url, data) {
    return axios.post(url, data, getTokenHeader()).catch(handleError);
}

export function put(url, data) {
    return axios.put(url, data, getTokenHeader()).catch(handleError);
}

const getTokenHeader = () => {
    const token = null;
    const headers = token ? {Authorization: `Bearer ${token}`} : {};
    return {headers};
};

const handleError = (error) => {
    return Promise.reject(error);
};