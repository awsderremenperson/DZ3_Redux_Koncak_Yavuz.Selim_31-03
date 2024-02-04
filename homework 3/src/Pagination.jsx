import React, { useSelector, useDispatch } from 'react';
import { changePage } from './actions';

function Pagination() {
    const currentPage = useSelector(state => state.posts.currentPage);
    const totalPages = useSelector(state => state.posts.totalPages);
    const dispatch = useDispatch();

    const handlePageChange = (pageNumber) => {
        dispatch(changePage(pageNumber));
    };

    return (
        <div className="pagination">
            {Array.from(Array(totalPages)).map((_, i) => (
                <button
                    key={i + 1}
                    className={`page-button ${currentPage === i + 1 ? 'active' : ''}`}
                    onClick={() => handlePageChange(i + 1)}
                >
                    {i + 1}
                </button>
            ))}
        </div>
    );
}

export default Pagination;
