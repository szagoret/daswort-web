import {FIND_SONGS_BY_NAME} from "../actions/notes/NotesActionsTypes";

const INITIAL_STATE = {
    songs: []
};

export default (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case FIND_SONGS_BY_NAME: {
            return {...state, songs: action.songs}
        }
        default:
            return state;
    }
}