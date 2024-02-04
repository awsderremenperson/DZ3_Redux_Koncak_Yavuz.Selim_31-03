import React, { useSelector } from 'react';

function Posts() {
    const posts = useSelector(state => state.posts.data);

    return (
        <ul className="posts-list">
            {posts.map(post => (
                <li key={post.id} className="post">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </li>
            ))}
        </ul>
    );
}

export default Posts;
