import { StandardTextFieldProps, TextField } from '@material-ui/core';
import React from 'react';

const CustomTextField = (props: StandardTextFieldProps) => {
    return <TextField fullWidth variant='outlined' label={props.label} {...props} />;
};

export default CustomTextField;
