import { FC, useEffect, useState } from 'react';
import { Dashboard, Signin } from '@src/pages';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { ROUTE_NAMES } from '@src/lib/constants/routes';
import { authService } from '@src/services';
import { Box, CircularProgress } from '@mui/joy';

export const App: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const nav = useNavigate();
  useEffect(() => {
    const unsub = authService.auth.onAuthStateChanged((user) => {
      setLoading(false);
      if (!user) {
        nav(ROUTE_NAMES.SIGNIN);
      }
    });
    return unsub;
  }, [nav]);

  if (loading) {
    return (
      <Box
        position='fixed'
        top={0}
        bottom={0}
        left={0}
        right={0}
        display='flex'
        flex={1}
        justifyContent='center'
        alignItems='center'
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Routes>
      <Route path={ROUTE_NAMES.DASHBOARD} element={<Dashboard />} />
      <Route path={ROUTE_NAMES.SIGNIN} element={<Signin />} />
    </Routes>
  );
};
