import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Posts from './Posts';
import Pagination from './Pagination';
import { fetchPosts } from './actions';
function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    return (
        <div className="container">
            <h1>Посты</h1>
            <Posts />
            <Pagination />
        </div>
    );
}

export default App;
