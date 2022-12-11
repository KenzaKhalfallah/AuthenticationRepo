import React from 'react';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

import {
    Avatar,
    Card,
    CardContent,
    Chip,
    ClickAwayListener,
    Divider,
    Fade,
    Grid,
    InputAdornment,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    OutlinedInput,
    Paper,
    Popper,
    Typography,
} from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useTheme } from '@material-ui/core/styles';
import useStyles from "./styles/use-styles";

function ProfileSection() {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState('');
    /*    const [sdm, setSdm] = React.useState(true);*/
    const anchorRef = React.useRef<HTMLDivElement | null>(null);
    /*    const [notification, setNotification] = React.useState(false);*/
    /*const customization = useSelector((state) => state.customization);*/
    const [selectedIndex] = React.useState(1);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };
    const prevOpen = React.useRef(open);
    const handleClose = (event: any) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };
    React.useEffect(() => {
        if (prevOpen.current && !open && anchorRef) {
            anchorRef.current?.focus();
        }
        prevOpen.current = open;
    }, [open]);

    return (
        <React.Fragment>
            <Chip
                classes={{ label: classes.profileLabel }}
                className={classes.profileChip}
                icon={
                    <Avatar
                        className={classes.headerAvatar}
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup='true'
                        color='inherit'
                    />
                }
                label={
                    <SettingsIcon
                        style={{ fontSize: '1.5rem', color: theme.palette.primary.contrastText }}
                        fontSize={'small'}
                    />
                }
                variant='outlined'
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup='true'
                onClick={handleToggle}
                color='primary'
            />
            <Popper
                placement='bottom-end'
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                popperOptions={{
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [0, 14],
                            },
                        },
                    ],
                }}
            >
                {({ TransitionProps, placement }: any) => (
                    <Fade {...TransitionProps}>
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <Card elevation={16}>
                                    <CardContent className={classes.cardContent}>
                                        <Grid container direction='column' spacing={0}>
                                            <Grid item className={classes.flex}>
                                                <Typography variant='h4'>Buen Dia,</Typography>
                                                <Typography component='span' variant='h4' className={classes.name}>
                                                    Wiliam
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant='subtitle2'>Administrador</Typography>
                                            </Grid>
                                        </Grid>
                                        <OutlinedInput
                                            className={classes.searchControl}
                                            id='input-search-profile'
                                            value={value}
                                            onChange={(e) => setValue(e.target.value)}
                                            placeholder='Search profile options'
                                            startAdornment={
                                                <InputAdornment position='start'>
                                                    <SearchIcon
                                                        style={{ fontSize: '1.3rem' }}
                                                        className={classes.startAdornment}
                                                    />
                                                </InputAdornment>
                                            }
                                            aria-describedby='search-helper-text'
                                            inputProps={{
                                                'aria-label': 'weight',
                                            }}
                                            labelWidth={0}
                                        />
                                        <Divider />
                                        <PerfectScrollbar className={classes.ScrollHeight}>
                                            <Divider />
                                            <List component='nav' className={classes.navContainer}>
                                                <ListItem
                                                    className={classes.listItem}
                                                    button
                                                    selected={selectedIndex === 3}
                                                >
                                                    <ListItemIcon>
                                                        <SettingsIcon style={{ fontSize: '1.3rem' }} />
                                                        {/*<IconLock stroke={1.5} size='1.3rem' />*/}
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={<Typography variant='body2'>Configuracion</Typography>}
                                                    />
                                                </ListItem>
                                                <ListItem
                                                    className={classes.listItem}
                                                    button
                                                    selected={selectedIndex === 4}
                                                >
                                                    <ListItemIcon>
                                                        <ExitToAppIcon style={{ fontSize: '1.3rem' }} />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={<Typography variant='body2'>Logout</Typography>}
                                                    />
                                                </ListItem>
                                            </List>
                                        </PerfectScrollbar>
                                    </CardContent>
                                </Card>
                            </ClickAwayListener>
                        </Paper>
                    </Fade>
                )}
            </Popper>
        </React.Fragment>
    );
}

export default ProfileSection;
