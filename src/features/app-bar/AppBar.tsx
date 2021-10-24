import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

export function AppNavBar() {
  return (
    <AppBar position='static' sx={{ mb: 2 }}>
      <Toolbar variant='regular'>
        <IconButton edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' color='inherit' component='div' sx={{ mr: 2 }}>
          <NavLink to='/'>Home</NavLink>
        </Typography>
        <Typography variant='h6' color='inherit' component='div'>
          <NavLink to='/add-facility'>Add Facility </NavLink>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
