import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const MobileDetails = ({ mobile }) => {
    const { name, description, shortDescription } = mobile;

    return (
        <Box sx={{ boxShadow: 3, border: '1px solid #ff8000', textAlign: 'left', p: 3, pt: 0 }}>
            <h2>{name}</h2>
            <Box sx={{ flexGrow: 1, pb: 3, borderBottom: '1px solid grey' }}>

            </Box>
            <Typography sx={{ pt: 3 }}>{description}</Typography>
        </Box>
    );
};

export default MobileDetails;