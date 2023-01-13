import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Post } from './pages/Post';

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/post/:slug' element={<Post />} />
        </Routes>
    )
}