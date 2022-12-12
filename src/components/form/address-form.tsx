import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from '@material-ui/core';
import CustomTextField from '../custom-text-field/custom-text-field';

export default function AddressForm() {
    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <CustomTextField name='firstName' label='First name' />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomTextField name='lastName' label='Last name' />
                </Grid>
                <Grid item xs={12}>
                    <CustomTextField required name='address1' label='Address line 1' />
                </Grid>
                <Grid item xs={12}>
                    <CustomTextField name='address2' label='Address line 2' />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomTextField required name='city' label='City' />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomTextField name='state' label='State/Province/Region' />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomTextField required name='zip' label='Zip / Postal code' />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomTextField required name='country' label='Country' />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color='secondary' name='saveAddress' value='yes' />}
                        label='Use this address for payment details'
                    />
                </Grid>
            </Grid>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button type={'button'} variant='contained' color={'primary'}>
                    Agregar
                </Button>
            </div>
        </React.Fragment>
    );
}
