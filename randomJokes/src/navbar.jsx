import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import logo from './assets/logo.png';

function ResponsiveNavbar() {
  return (
    <AppBar position="sticky">
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
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              fontWeight: 600,
              letterSpacing: '0.1rem',
            }}
          >
            Random Jokes
          </Typography>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveNavbar;
