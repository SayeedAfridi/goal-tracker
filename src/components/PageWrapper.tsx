import { Box } from '@mui/joy';
import { Header } from '@src/components/Header';
import { Sidebar } from '@src/components/Sidebar';
import { ROUTE_NAMES } from '@src/lib/constants/routes';
import { FC, ReactNode } from 'react';
import { useLocation } from 'react-router';

export const PageWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation();

  if (location.pathname === ROUTE_NAMES.SIGNIN) {
    return <>{children}</>;
  }

  return (
    <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
      <Sidebar />
      <Header />
      <Box
        component='main'
        className='MainContent'
        sx={{
          pt: {
            xs: 'calc(12px + var(--Header-height))',
            md: 3,
          },
          pb: {
            xs: 2,
            sm: 2,
            md: 3,
          },
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          minWidth: 0,
          height: '100dvh',
          gap: 1,
          overflow: 'auto',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
