import React from 'react';
import { Box, Card, CardContent, Stack, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

import HeroBannerImage from '../assets/images/banner.png';

const StyledButton = styled(Button)({
  background: '#FF2625',
  borderRadius: '28px',
  color: 'white',
  fontSize: '15px',
  marginTop: '-72px',
  marginLeft: '40px',
  width: '190px',
  fontWeight: 700,
  padding: '17px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#bf0b0b',
  },
});
const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Card sx={{ p: '25px', borderRadius: '10px', boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.2)', padding: '40px 30px', maxWidth: {lg: '400px', xs: '100%'}, margin: '90 auto' }}>
      <CardContent>
        <Typography color="#BF0B0B" fontWeight="600" fontSize="29px" mb="1rem">
          Fitness Crew
        </Typography>
        <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
          Smile, WorkOut <br />
          And Repeat
        </Typography>
        <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px" mb="1rem">
          Check out effective exercises personalized to you
        </Typography>
      </CardContent>
    </Card>
    <Stack>
      <StyledButton variant="contained" href="#exercises">Explore Exercises</StyledButton>
    </Stack>

    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
