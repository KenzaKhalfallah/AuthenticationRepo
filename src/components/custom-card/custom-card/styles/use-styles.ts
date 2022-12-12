import { hexToRgb, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        card: {
            border: '0',
            marginBottom: '30px',
            marginTop: '30px',
            borderRadius: '6px',
            color: 'rgba(' + hexToRgb('#000') + ', 0.87)',
            background: '#fff',
            width: '100%',
            boxShadow: '0 1px 4px 0 rgba(' + hexToRgb('#000') + ', 0.14)',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            minWidth: '0',
            wordWrap: 'break-word',
            fontSize: '.875rem',
        },
    },
}));

export default useStyles;
