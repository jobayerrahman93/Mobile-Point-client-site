import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header';
import MobileDetailsCart from '../MobileDetailsCart/MobileDetailsCart';
import MobileDetails from '../MobileDetails/MobileDetails';

const Mobile = () => {
    const { mobileID } = useParams();

    const mobiles = useSelector((state) => state.mobilesReducer.mobiles);
    const mobile = mobiles.filter(mobile => mobile._id === mobileID);
    console.log(mobile);
    return (
        <>
            <Header></Header>
            <Box
                className="banner"
                sx={{
                    height: '85vh',
                    background: `url("${mobile[0].picture}")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%'
                }}></Box>
            <Container sx={{ flexGrow: 1, mx: 'auto', mt: 5 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <MobileDetails mobile={mobile[0]}></MobileDetails>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <MobileDetailsCart mobile={mobile[0]}></MobileDetailsCart>
                    </Grid>
                </Grid>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Mobile;