import {FIND_SONGS_BY_CRITERIA} from "../actions/notes/NotesActionsTypes";

const INITIAL_STATE = {
    songs: []
};

export default (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case FIND_SONGS_BY_CRITERIA: {
            return {...state, songs: action.songs}
        }
        default:
            return state;
    }
}