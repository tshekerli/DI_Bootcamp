import data from './data.json';
import React from 'react';

function PostList(){
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <h1>This is a Title</h1>
        {data.map(post => (
            <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            </div>
        ))}
        </div>
    );
}

export default PostList;