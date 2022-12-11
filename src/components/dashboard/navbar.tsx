import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import useStyles from './styles/use-styles';
import { Avatar, ButtonBase } from '@material-ui/core';
import ProfileSection from '../profile-section/profile-section';

interface Props {
    open: boolean;
    toggleDrawer: () => void;
}

function Navbar({ toggleDrawer, open }: Props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position='absolute' className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge='start'
                        color='inherit'
                        aria-label='open drawer'
                        onClick={toggleDrawer}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        component='h1'
                        variant='h6'
                        color='inherit'
                        noWrap
                        style={{
                            flexGrow: 1,
                        }}
                    >
                        Dashboard
                    </Typography>
                    <IconButton color='inherit'>
                        <Badge badgeContent={4} color='secondary'>
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <ProfileSection />
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default Navbar;
