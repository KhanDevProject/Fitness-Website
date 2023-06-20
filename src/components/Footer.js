import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
    <img src={Logo} alt="logo" style={{ width: '150px', height: '90px', objectFit: 'contain' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '24px', xs: '18px' }, fontWeight: 600, color: '#333333', textTransform: 'uppercase', letterSpacing: '1px', mt: '30px' }} textAlign="center" pb="40px">Designed and developed by Waqas Khan</Typography>
  </Box>
);

export default Footer;
