import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from '@/App';
import '@/index.css';
import './i18n/i18n.js';

ReactDOM.createRoot(document.getElementById('root')).render(
	<HelmetProvider>
		<App />
	</HelmetProvider>
);