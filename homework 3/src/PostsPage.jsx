import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostsPage from './PostsPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/posts" element={<PostsPage />} />
            </Routes>
        </Router>
    );
};

export default App;
