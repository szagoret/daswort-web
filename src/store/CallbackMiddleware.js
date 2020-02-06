const createMiddleware = () => {
    return ({dispatch, getState}) => next => action => {
        if (action.meta) {
            if (action.meta.onSuccess && !action.error) {
                action.meta.onSuccess(action.payload);
            }
            if (action.meta.onError && action.error) {
                action.meta.onError(action.payload);
            }
        }
        next(action)
    };
};

export default createMiddleware();