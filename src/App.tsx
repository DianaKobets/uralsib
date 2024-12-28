import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostList from './pages/PostList.tsx';
import PostDetails from './pages/PostDetails.tsx';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PostList />} />
                <Route path="/post/:id" element={<PostDetails />} />
            </Routes>
        </Router>
    );
};

export default App;
