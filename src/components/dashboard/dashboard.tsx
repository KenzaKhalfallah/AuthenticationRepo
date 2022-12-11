import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles/use-styles';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Footer from './footer';

interface Props {
    children?: React.ReactNode;
}

export default function Dashboard({ children }: Props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <Box style={{ display: 'flex' }}>
            <Navbar open={open} toggleDrawer={toggleDrawer} />
            <Sidebar open={open} toggleDrawer={toggleDrawer} />
            <Box
                component='main'
                style={{
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                <div className={classes.appBarSpacer} />
                <Container maxWidth='lg' style={{ marginTop: '32px', marginBottom: '32px' }}>
                    <Grid container spacing={3}>
                        {children}
                    </Grid>
                    <Box style={{ paddingTop: '32px' }}>
                        <Footer />
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}
