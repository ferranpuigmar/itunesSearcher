import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './app/App';
import { createTheme, ThemeProvider } from '@mui/material';
import { customTheme } from 'config/theme';
import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);
const theme = createTheme(customTheme);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode >
);