import React from 'react';
import themeMui from '../../themes/theme-mui';
import {MuiThemeProvider} from '@material-ui/core';
import Dashboard from '../../components/dashboard/dashboard';
import Register from '../users/register-user';

function App() {

  return (
    <MuiThemeProvider theme={themeMui}>
      <Dashboard>
        <Register/>
      </Dashboard>
    </MuiThemeProvider>
    
  );
}

export default App;
