import '@fontsource/inter';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { firebaseService } from '@src/services';
import { AppProvider } from '@src/AppProvider.tsx';

firebaseService.init();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider />
  </React.StrictMode>,
);
