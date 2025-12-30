import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import logo from './assets/logo.png';

function ResponsiveNavbar() {
  return (
    <AppBar position="static" sx={{background: 'linear-gradient(177deg,rgba(250, 250, 250, 1) 0%, rgba(255, 245, 245, 1) 36%, rgba(255, 228, 214, 1) 75%)'}}>
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
              color: '#85030cff',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              fontWeight: 600,
              letterSpacing: '0.1rem',
            }}
          >
            ToDoList
          </Typography>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveNavbar;
