const initialState = {
    data: [],
    currentPage: 1,
    totalPages: 1,
};

export default function postsReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_POSTS_SUCCESS':
            return {
                ...state,
                data: action.payload.data,
                totalPages: Math.ceil(action.payload.total / 10),
            };
        case 'CHANGE_PAGE':
            return {
                ...state,
                currentPage: action.pageNumber,
            };
        default:
            return state;
    }
}
