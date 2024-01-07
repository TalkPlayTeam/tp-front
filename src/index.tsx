import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import InscriptionForm from './views/public/inscription_1';
import GamesPage from './views/public/inscription_2';
import './i18n';
import PostPage from './views/auth/posting';
import App from './views/auth/listPost';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/" element={<InscriptionForm preloadedEmail={null} />} /> */}
        <Route path="/inscription-2" element={<GamesPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
