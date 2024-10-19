import React from 'react';
import ReactDOM from 'react-dom/client';
import { New_react } from '../src/App';// Make sure this file exists in the src directory
import './index.css'; // Optional: If you have styles, else you can remove this line

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
