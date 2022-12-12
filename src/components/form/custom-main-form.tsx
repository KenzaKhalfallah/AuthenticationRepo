import React from 'react';
import { Container, Paper, Typography } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    title: string;
}

function CustomMainForm({ title, children }: Props) {
    return (
        <Container maxWidth='md'>
            <Typography component='h1' variant='h4' align='center'>
                {title}
            </Typography>
            <Paper style={{ padding: '20px' }} elevation={3}>
                {children}
            </Paper>
        </Container>
    );
}

export default CustomMainForm;
