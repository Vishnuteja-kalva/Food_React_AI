import React from 'react';
import ReactDOM from 'react-dom/client';
import { New_react } from './App.jsx'; // Updated import statement

import './index.css'; // Optional: If you have styles, else you can remove this line

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <New_react/>
    </React.StrictMode>
);
