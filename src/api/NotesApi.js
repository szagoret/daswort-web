import {API_HOST, get, post} from './api';

export const NOTES_API = `${API_HOST}/song`;

export const findSongsByNameApi = searchTerm => get(`${NOTES_API}/find`, {params: {searchTerm}});

export const findSongById = songId => get(`${NOTES_API}/${songId}`);

export const findSongsByCriteriaApi = searchCriteria => post(`${NOTES_API}/search`, searchCriteria);

export const getSongFiltersApi = () => get(`${NOTES_API}/filters`);

