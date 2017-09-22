const postReducer = (state = {
    posts: [],
}, action) => {
    switch (action.type) {
        case 'GET_POSTS':
            state = {
                ...state,
                posts: action.payload
            };
            break;
    }
    return state;
};

export default postReducer;
