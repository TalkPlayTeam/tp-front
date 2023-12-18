import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import InscriptionForm from './views/inscription_1';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <InscriptionForm preloadedEmail={null as string | null} />
  </React.StrictMode>
);

reportWebVitals();
