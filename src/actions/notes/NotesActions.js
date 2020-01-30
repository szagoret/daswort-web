import {findSongsByCriteriaApi} from "../../api/NotesApi";
import {FIND_SONGS_BY_CRITERIA} from "./NotesActionsTypes";

export const findSongsByCriteriaAction = songs => {
    return {
        type: FIND_SONGS_BY_CRITERIA,
        songs
    }
};

export const findSongsByCriteria = (searchCriteria) => {
    return dispatch => findSongsByCriteriaApi(searchCriteria)
        .then(response => dispatch(findSongsByCriteriaAction(response.data)));
};
