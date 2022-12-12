import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import CustomMainForm from '../form/custom-main-form';
import PaymentForm from '../form/payment-form';

interface Props {
    children?: React.ReactNode;
}

function CustomBody({ children }: Props) {
    return (
        <Grid item xs={12}>
            <Paper
                style={{
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {children}
            </Paper>
        </Grid>
    );
}

export default CustomBody;
