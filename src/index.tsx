import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import InscriptionForm from './views/inscription_1';
import GamesPage from './views/inscription_2';
import Inscription3 from './views/inscription_3';
import './i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Inscription3 />} />
        {/* <Route path="/" element={<InscriptionForm preloadedEmail={null} />} /> */}
        <Route path="/inscription-2" element={<GamesPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
