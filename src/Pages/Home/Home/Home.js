import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Questions from '../Questions/Questions';
import Reviews from '../Reviews/Reviews';
import Topmobiles from '../TopMobiles/TopMobiles';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Box
                className="banner"
                sx={{
                    height: '95vh',
                    background: `url(https://i.ibb.co/BBrwT7V/mobilepoint-banner.jpg)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'lightblue', mb: 3, fontFamily: 'verdana' }}>World's Best Mobiles Are Here</Typography>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'white', fontFamily: 'verdana' }}>Make Yourself Shine Like Sun</Typography>
                <Link to='/explore' style={{ textDecoration: 'none' }}>
                    <Button variant="contained" sx={{ px: 3, mt: 3, backgroundColor: '#ff8000' }}>Explore</Button>

                </Link>
            </Box>
            <Topmobiles></Topmobiles>
            <Reviews></Reviews>
            <Questions></Questions>
            <Footer></Footer>
        </>
    );
};

export default Home;