import '@styles/App';

import Box from '@mui/material/Box';
import { FC } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Admin from './components/admin/admin';
import Authorization from './components/authorization/authorization';
import User from './components/user/user';
import AppContextPovider from './context/context';
import { setupStore } from './store';

const store = setupStore();

const App: FC = () => {
  return (
    <Provider store={store}>
      <AppContextPovider>
        <Box className="container">
          <Routes>
            <Route path="/" element={<Authorization />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </Box>
      </AppContextPovider>
    </Provider>
  );
};

const container = document.getElementById('app');

const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
