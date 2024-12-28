import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostDetails, getComments } from '../services/api.ts';
import { Post, Comment } from '../types';

const PostDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<Post | null>(null);
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        const fetchPostData = async () => {
            if (id) {
                const postDetails = await getPostDetails(Number(id));
                const postComments = await getComments(Number(id));
                setPost(postDetails);
                setComments(postComments);
            }
        };
        fetchPostData();
    }, [id]);

    if (!post) {
        return <div className="loading">Loading...</div>;
    }    

    return (
        <div className="container">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <h2>Comments</h2>
            <ul className="comment-list">
                {comments.map((comment) => (
                    <li key={comment.id} className="comment-item">
                        <strong>{comment.name}</strong>: {comment.body}
                    </li>
                ))}
            </ul>
        </div>
    );
    
};

export default PostDetails;
