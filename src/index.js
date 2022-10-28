import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ProviderLenguaje } from "./context/ContextoLenguaje";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <ProviderLenguaje>   
    <App />
</ ProviderLenguaje>
);
