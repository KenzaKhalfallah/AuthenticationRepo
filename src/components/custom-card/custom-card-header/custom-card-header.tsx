import React from 'react';
import useStyles from './styles/use-styles';

interface Props {
    children?: React.ReactNode;
    rest?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
}

function CustomCardHeader({ children, rest }: Props) {
    const classes = useStyles();
    return (
        <div {...rest} className={classes.root}>
            <div style={{  }}>{children}</div>
        </div>
    );
}

export default CustomCardHeader;
