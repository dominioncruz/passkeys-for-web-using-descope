import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from '@descope/react-sdk';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AuthProvider projectId={import.meta.env.VITE_DESCOPE_PROJECT_ID}>
            <App />
        </AuthProvider>
    </React.StrictMode>
);

