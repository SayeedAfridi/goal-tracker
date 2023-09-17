import { FC } from 'react';
import { Dashboard, Signin } from '@src/pages';
import { Routes, Route } from 'react-router-dom';
import { ROUTE_NAMES } from '@src/lib/constants/routes';

export const App: FC = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.DASHBOARD} element={<Dashboard />} />
      <Route path={ROUTE_NAMES.SIGNIN} element={<Signin />} />
    </Routes>
  );
};
