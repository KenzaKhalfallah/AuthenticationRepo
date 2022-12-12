import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        cardBody: {
            padding: '0.9375rem 20px',
            flex: '1 1 auto',
            WebkitBoxFlex: '1',
            position: 'relative',
        },
    },
}));

export default useStyles;
