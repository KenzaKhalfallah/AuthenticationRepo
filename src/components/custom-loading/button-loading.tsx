import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        buttonProgress: {
            color: theme.palette.primary.dark,
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: -12,
            marginLeft: -12,
        },
    })
);

export default function ButtonLoading() {
    const classes = useStyles();

    return <CircularProgress size={24} className={classes.buttonProgress} />;
}
