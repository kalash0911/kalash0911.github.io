import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app.jsx';

const reactAppRoot = document.getElementById('test');

if(reactAppRoot) {
    const root = createRoot(document.getElementById('test'));
    root.render(<App />);
}