import { Box, Button, Typography } from '@mui/joy';
import { authService } from '@src/services';
import { FC } from 'react';

export const Dashboard: FC = () => {
  return (
    <Box>
      <Typography>Dashboard</Typography>
      <Button onClick={authService.signOut}>Signout</Button>
    </Box>
  );
};
