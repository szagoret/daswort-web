import {findSongsByCriteriaApi} from "../../api/NotesApi";
import {FIND_SONGS_BY_CRITERIA} from "./NotesActionsTypes";

export const findSongsByCriteriaAction = (result, onSuccess) => {
    return {
        type: FIND_SONGS_BY_CRITERIA,
        result,
        meta: {
            onSuccess
        }
    }
};

export const findSongsByCriteria = (searchCriteria, onSuccess) => {
    return dispatch => findSongsByCriteriaApi(searchCriteria)
        .then(response => dispatch(findSongsByCriteriaAction(response.data, onSuccess)));
};
