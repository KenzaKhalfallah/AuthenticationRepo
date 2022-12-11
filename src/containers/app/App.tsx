import React, {useEffect, useState} from 'react';
import './App.css';
import {User} from '../../models/user';
import apiUsers from '../../api/api.users';
import themeMui from '../../themes/theme-mui';
import {MuiThemeProvider} from '@material-ui/core';

function App() {
  const [users, setusers] = useState<User[]>([]);

  useEffect(() => {
    apiUsers.list().then((data) => {
      setusers(data);
    });
  }, []);

  return (
    <MuiThemeProvider theme={themeMui}>
      <div>
        {users.map((tempUsers: any) => (
          <div key= {tempUsers.id}>
            <p>
              {tempUsers.userName} - {tempUsers.email} - {tempUsers.phoneNumber}
            </p>
          </div>
        ))}
      </div>
    </MuiThemeProvider>
    
  );
}

export default App;
