import {trim} from 'lodash';

export const isNotEmpty = (value) => {
    return !!trim(value);
};

export const formatBytes = (bytes, decimals) => {
    if (!bytes || bytes === 0) return '0 Bytes';
    const k = 1024,
        dm = decimals <= 0 ? 0 : decimals || 2,
        sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};
