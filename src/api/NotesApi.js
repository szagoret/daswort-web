import axios from 'axios';

const API = 'http://localhost:8080/api';


export const findSongsByNameApi = searchTerm => axios.get(`${API}/song/find`, {params: {searchTerm}}).catch(handleError);

export const findSongById = songId => axios.get(`${API}/song/${songId}`).catch(handleError);

const handleError = (error) => {
    // const status = error.status ? error.status : error.response && error.response.status;
    // if (status === 401) {
    //     removeToken();
    // }

    return Promise.reject(error);
};