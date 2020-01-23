import {findSongsByNameApi} from "../../api/NotesApi";
import {FIND_SONGS_BY_NAME} from "./NotesActionsTypes";

export const findSongsByNameAction = songs => {
    return {
        type: FIND_SONGS_BY_NAME,
        songs
    }
};


export const findSongsByName = ({searchTerm}) =>
    dispatch =>
        findSongsByNameApi(searchTerm)
            .then(response => dispatch(findSongsByNameAction(response.data)));