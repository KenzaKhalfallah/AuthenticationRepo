import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';

const useStyles = makeStyles<Theme>((theme) => ({
    headerAvatar: {
        cursor: 'pointer',
        ...theme.typography,
        margin: '8px 0 8px 8px !important',
    },
    profileChip: {
        height: '48px',
        alignItems: 'center',
        borderRadius: '27px',
        transition: 'all .2s ease-in-out',
        borderColor: theme.palette.primary.light,
        '&[aria-controls="menu-list-grow"], &:hover': {
            borderColor: theme.palette.primary.light,
            background: theme.palette.primary.light + '!important',
            color: theme.palette.primary.light,
            '& svg': {
                stroke: theme.palette.primary.light,
            },
        },
    },
    profileLabel: {
        lineHeight: 0,
        padding: '12px',
    },
    navContainer: {
        width: '100%',
        maxWidth: '350px',
        minWidth: '300px',
        backgroundColor: theme.palette.background.paper,
        borderRadius: '10px',
        [theme.breakpoints.down('sm')]: {
            minWidth: '100%',
        },
    },

    listItem: {
        marginTop: '5px',
    },
    cardContent: {
        padding: '16px !important',
    },
    card: {
        backgroundColor: theme.palette.primary.light,
        marginBottom: '16px',
        marginTop: '16px',
    },
    searchControl: {
        width: '100%',
        paddingRight: '8px',
        paddingLeft: '16px',
        marginBottom: '16px',
        marginTop: '16px',
    },
    startAdornment: {
        fontSize: '1rem',
        color: theme.palette.grey[500],
    },
    flex: {
        display: 'flex',
    },
    name: {
        marginLeft: '2px',
        fontWeight: 400,
    },
    ScrollHeight: {
        height: '100%',
        maxHeight: 'calc(100vh - 250px)',
        overflowX: 'hidden',
    },
    badgeyellow: {
        backgroundColor: theme.palette.warning.dark,
        color: '#fff',
    },
}));

export default useStyles;
