import {API_HOST, get} from './api';

export const CATEGORY_API = `${API_HOST}/category`;

export const getCategoryChildrenApi = categoryId => get(`${CATEGORY_API}/children`, {params: {categoryId}});

export const getCategoriesParentTreeApi = categoryId => get(`${CATEGORY_API}/${categoryId}/parent/tree`);
