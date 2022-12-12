import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        borderRadius: '10px',
        margin: '0 15px',
        padding: '1px 20px',
        marginTop: '-30px',
        marginBottom: '0',
        borderBottom: 'none',
        background: 'transparent',
        zIndex: theme.zIndex.drawer + 3,
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.contrastText,
        boxShadow: '0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(156 39 176 / 40%)',
    },
}));

export default useStyles;
