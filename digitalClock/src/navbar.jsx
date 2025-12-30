import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import logo from './assets/logo.png';

function ResponsiveNavbar() {
  return (
    <AppBar position="static" sx={{background: 'radial-gradient(circle,rgba(250, 250, 250, 1) 0%, rgba(230, 237, 255, 1) 36%, rgba(245, 245, 245, 1) 75%)'}}>
      <Container maxWidth="xl">
        <Toolbar sx={{ position: 'relative' }}>
          
          {/* LEFT LOGO */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{ height: 80 }}
            />
          </Box>

          {/* CENTER HEADING */}
          <Typography
            variant="h4"
            sx={{
              color: '#016349ff',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              fontWeight: 600,
              letterSpacing: '0.1rem',
            }}
          >
            DigitalClock
          </Typography>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveNavbar;
