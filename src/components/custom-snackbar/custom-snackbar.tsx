import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import useStyles from './styles/use-styles';

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant='filled' {...props} />;
}

interface Props {
    open: boolean;
    severity: 'error' | 'warning' | 'info' | 'success';
    setOpen: (open: boolean) => void;
    message: string;
}

export default function CustomSnackbar({ message, open, severity, setOpen }: Props) {
    const classes = useStyles();

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(!open);
    };

    return (
        <div className={classes.root}>
            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity}>
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
}
