import React, { useEffect, useState } from 'react';
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import {User} from '../../models/user';
import apiUsers from '../../api/api.users';
import Title from '../../components/dashboard/title';


function ListUsers() {
    const [users, setusers] = useState<User[]>([]);

  useEffect(() => {
    apiUsers.list().then((data) => {
      setusers(data);
    });
  }, []);
  
    return (
        <React.Fragment>
            <Grid item xs={12}>
                <Paper
                    style={{
                        padding: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <React.Fragment>
                        <Title>List Users</Title>
                        <TableContainer component={Paper}>
                            <Table size='small'>
                                <TableHead>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell>UserName</TableCell>
                                        <TableCell>Email</TableCell>
                                        <TableCell>PhoneNumber</TableCell>
                                        {/*<TableCell align='right'>Sale Amount</TableCell>*/}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {users.map((tempUsers: any, index: number) => (
                                        <TableRow key={tempUsers.id}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>{tempUsers.userName}</TableCell>
                                            <TableCell>{tempUsers.email}</TableCell>
                                            <TableCell>{tempUsers.phoneNumber}</TableCell>
                                            {/*<TableCell align='right'>{`$${row.amount}`}</TableCell>*/}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                        {/*<Link color='primary' href='#' style={{ marginTop: 3 }}>
                            See more orders
                        </Link>*/}
                    </React.Fragment>
                   {/* {users.map((tempUsers: any) => (
                        <div key= {tempUsers.id}>
                            <p>
                            {tempUsers.userName} - {tempUsers.email} - {tempUsers.phoneNumber}
                            </p>
                        </div>
                    ))} */}
                </Paper>
            </Grid>
        </React.Fragment>
    );
}

export default ListUsers;