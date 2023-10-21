import { PocetnaPage } from './pages/PocetnaPage';
import { NotFoundPage } from './pages/NotFoundPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const Rute = () => {
    return (
    <Router>
        <Routes>
            <Route path='/' exact element={<PocetnaPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </Router>
    );
}
