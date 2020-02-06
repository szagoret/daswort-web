import {FIND_SONGS_BY_CRITERIA} from "../actions/notes/NotesActionsTypes";

const INITIAL_STATE = {
    songs: [],
    size: 20,
    page: 0,
    total: 0,
    sortDirection: 'ASC',
    sortProperty: 'name'
};

export default (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case FIND_SONGS_BY_CRITERIA: {
            return {...state, ...action.result}
        }
        default:
            return state;
    }
}