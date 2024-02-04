export const fetchPosts = () => ({
    type: 'FETCH_POSTS',
});

export const changePage = (pageNumber) => ({
    type: 'CHANGE_PAGE',
    pageNumber,
});
