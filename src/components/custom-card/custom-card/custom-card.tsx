import React from 'react';
import useStyles from '../custom-card-body/styles/use-styles';

interface Props {
    children?: React.ReactNode;
    rest?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
}

function CustomCard({ children, rest }: Props) {
    const classes = useStyles();
    return (
        <div className={classes.root} {...rest}>
            {children}
        </div>
    );
}

export default CustomCard;
