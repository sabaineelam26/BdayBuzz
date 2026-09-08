import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App.tsx';
import { AdminAuthProvider } from './context/AdminAuthContext.tsx';
import { UserAuthProvider } from './context/UserAuthContext.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AdminAuthProvider>
        <UserAuthProvider>
          <App />
        </UserAuthProvider>
      </AdminAuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

