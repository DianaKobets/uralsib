import React, { useEffect, useState } from 'react';
import { getPosts } from '../services/api.ts';
import { Post } from '../types';
import { Link } from 'react-router-dom';

const PostList: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await getPosts();
            setPosts(data);
        };
        fetchPosts();
    }, []);

    return (
        <div className="container">
            <h1>Posts</h1>
            <ul className="post-list">
                {posts.map((post) => (
                    <li key={post.id} className="post-item">
                        <Link to={`/post/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;
