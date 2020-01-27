import {trim} from 'lodash';

export const isNotEmpty = (value) => {
    return !!trim(value);
};