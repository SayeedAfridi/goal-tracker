import { FC, Fragment, useEffect, useState } from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import { formLabelClasses } from '@mui/joy/FormLabel';
import Typography from '@mui/joy/Typography';
import { GoogleIcon } from '@src/assets/vectors/GoogleIcon';
import { AppLogo } from '@src/assets/vectors/AppLogo';
import { ColorSchemeToggle } from '@src/components';
import WeOpen from '@src/assets/images/we_open.webp';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTE_NAMES } from '@src/lib/constants/routes';
import { authService } from '@src/services';
import { CircularProgress } from '@mui/joy';

export const SigninFeatures: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const nav = useNavigate();

  useEffect(() => {
    const unsub = authService.auth.onAuthStateChanged((user) => {
      if (user) {
        nav(ROUTE_NAMES.DASHBOARD);
      } else {
        setLoading(false);
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
    <Fragment>
      <Box
        sx={(theme) => ({
          width:
            'clamp(100vw - var(--Cover-width), (var(--Collapsed-breakpoint) - 100vw) * 999, 100vw)',
          transition: 'width var(--Transition-duration)',
          transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'flex-end',
          backdropFilter: 'blur(4px)',
          backgroundColor: 'rgba(255 255 255 / 0.6)',
          [theme.getColorSchemeSelector('dark')]: {
            backgroundColor: 'rgba(19 19 24 / 0.4)',
          },
        })}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100dvh',
            width:
              'clamp(var(--Form-maxWidth), (var(--Collapsed-breakpoint) - 100vw) * 999, 100%)',
            maxWidth: '100%',
            px: 2,
          }}
        >
          <Box
            component='header'
            sx={{
              py: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Link to={ROUTE_NAMES.DASHBOARD}>
              <Typography
                fontWeight='lg'
                startDecorator={<AppLogo fontSize='xl2' />}
              >
                Goal Tracker
              </Typography>
            </Link>
            <ColorSchemeToggle />
          </Box>
          <Box
            component='main'
            sx={{
              my: 'auto',
              py: 2,
              pb: 5,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              width: 400,
              maxWidth: '100%',
              mx: 'auto',
              borderRadius: 'sm',
              '& form': {
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              },
              [`& .${formLabelClasses.asterisk}`]: {
                visibility: 'hidden',
              },
            }}
          >
            <div>
              <Typography component='h1' fontSize='xl2' fontWeight='lg'>
                Sign in to your account
              </Typography>
              <Typography level='body-sm' sx={{ my: 1, mb: 3 }}>
                Welcome back
              </Typography>
            </div>
            <Button
              variant='outlined'
              color='neutral'
              fullWidth
              startDecorator={<GoogleIcon />}
              onClick={authService.signinWithGoogle}
            >
              Sign in with Google
            </Button>
          </Box>
          <Box component='footer' sx={{ py: 3 }}>
            <Typography level='body-xs' textAlign='center'>
              © Your company {new Date().getFullYear()}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={(theme) => ({
          height: '100%',
          position: 'fixed',
          right: 0,
          top: 0,
          bottom: 0,
          left: 'clamp(0px, (100vw - var(--Collapsed-breakpoint)) * 999, 100vw - var(--Cover-width))',
          transition:
            'background-image var(--Transition-duration), left var(--Transition-duration) !important',
          transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
          backgroundColor: 'background.level1',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${WeOpen})`,
          [theme.getColorSchemeSelector('dark')]: {
            backgroundImage: `url(${WeOpen})`,
          },
        })}
      />
    </Fragment>
  );
};
