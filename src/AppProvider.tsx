import { CssBaseline, CssVarsProvider, GlobalStyles } from '@mui/joy';
import { App } from '@src/App';
import { BrowserRouter as Router } from 'react-router-dom';

export const AppProvider = () => {
  return (
    <CssVarsProvider defaultColorScheme='dark' disableTransitionOnChange>
      <CssBaseline />
      <GlobalStyles
        styles={{
          ':root': {
            '--Collapsed-breakpoint': '769px', // form will stretch when viewport is below `769px`
            '--Cover-width': '40vw', // must be `vw` only
            '--Form-maxWidth': '700px',
            '--Transition-duration': '0.4s', // set to `none` to disable transition
          },
        }}
      />
      <Router>
        <App />
      </Router>
    </CssVarsProvider>
  );
};
